import { expect, testStep } from '@epic-web/workshop-utils/test'

const response = await fetch(location.href)
const indexHtml = await response.text()
const node = document.createElement('div')
node.innerHTML = indexHtml

const inlineScript = node.querySelector('script[type="text/babel"]')
if (!inlineScript) {
	throw new Error('inlineScript not found')
}

await testStep('fragments are used', async () => {
	const usesShorthand = inlineScript.textContent?.includes('<>')
	const usesLonghand = inlineScript.textContent?.includes('<React.Fragment>')
	const usesFragment = inlineScript.textContent?.includes('<Fragment>')
	expect(
		usesShorthand || usesLonghand || usesFragment,
		'fragments are not used. You must use <>, <React.Fragment>, or <Fragment>',
	).to.be.true
})
