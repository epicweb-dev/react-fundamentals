import 'jest-dom/extend-expect'
import '@testing-library/react/cleanup-after-each'

beforeAll(() => {
  jest.spyOn(console, 'info')
  console.info.mockImplementation(() => {})
})
afterAll(() => console.info.mockRestore())
beforeEach(() => console.info.mockClear())

// none of these tests should actually invoke fetch
beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation((...args) => {
    console.warn('window.fetch is not mocked for this call', ...args)
    return Promise.reject(new Error('This must be mocked!'))
  })
})

afterEach(() => {
  window.fetch.mockRestore()
})

// this is just a little hack to silence a warning that we'll get until react
// fixes this: https://github.com/facebook/react/pull/14853
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
