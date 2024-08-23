import { expect, testStep } from '@epic-web/workshop-utils/test'

const response = await fetch(location.href)
const indexHtml = await response.text()
const node = document.createElement('div')
node.innerHTML = indexHtml

const inlineScript = node.querySelector('script[type="text/babel"]')
if (!inlineScript) {
	throw new Error('inlineScript not found')
}

await testStep('props are spread on the div', async () => {
	expect(inlineScript.textContent, 'props should be spread').to.include(
		'...props',
	)
})
