import '@testing-library/jest-dom/extend-expect'

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
