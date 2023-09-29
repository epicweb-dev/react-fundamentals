import {expect, testStep} from '@kentcdodds/workshop-app/test'
import '.'

await testStep('a', async () => {
  const codeStrings = Array.from(document.body.querySelectorAll('code')).map(
    c => c.textContent,
  )

  expect(codeStrings.join('\n')).toMatchInlineSnapshot(`
    "1 + 2 = 3
    1 - 2 = -1
    1 * 2 = 2
    1 / 2 = 0.5"
  `)
})
