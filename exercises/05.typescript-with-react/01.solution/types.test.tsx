import {waitFor, within} from '@testing-library/react'
import {expect, testStep} from '@kentcdodds/workshop-app/test'
import '.'

const body = within(document.body)

await testStep('a', async () => {
  expect(await body.findByText('1 + 2 = 3')).to.exist
  // const codeStrings = Array.from(body.queryAllBy('code')).map(
  //   c => c.textContent,
  // )

  // expect(codeStrings.join('\n')).toMatchInlineSnapshot(`
  //   "1 + 2 = 3
  //   1 - 2 = -1
  //   1 * 2 = 2
  //   1 / 2 = 0.5"
  // `)
})
