import { expect, testStep } from '@epic-web/workshop-utils/test'

const response = await fetch(location.href)
const indexHtml = await response.text()
const node = document.createElement('div')
node.innerHTML = indexHtml

const inlineScript = node.querySelector('script[type="text/babel"]')
if (!inlineScript) {
	throw new Error('inlineScript not found')
}

await testStep(
	'Correctly creating a <Message /> component with JSX',
	async () => {
		expect(inlineScript.textContent).to.include('<Message')
	},
)
