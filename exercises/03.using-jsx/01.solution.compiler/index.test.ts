import { expect, testStep } from '@epic-web/workshop-utils/test'

const response = await fetch(location.href)
const indexHtml = await response.text()
const node = document.createElement('div')
node.innerHTML = indexHtml

const inlineScript = node.querySelector('script[type="text/babel"]')
await testStep('script with type text/babel exists', () => {
	expect(
		inlineScript,
		'script with type text/babel not found',
	).to.be.instanceOf(HTMLScriptElement)
})

await testStep('script with type text/babel has data-type="module"', () => {
	expect(
		inlineScript!.getAttribute('data-type'),
		'script with type text/babel does not have data-type="module"',
	).to.equal('module')
})

await testStep('babel is loaded', () => {
	const script = node.querySelector('script[src="/babel-standalone.js"]')
	expect(
		script,
		'babel script not found, did you remember to add a script for "/babel-standalone.js" as the src?',
	).to.be.instanceOf(HTMLScriptElement)
})

await testStep('JSX is in use', async () => {
	// Filter out comment lines before checking
	const scriptContent = inlineScript!.textContent || ''
	const lines = scriptContent.split('\n')
	const nonCommentLines = lines
		.filter((line) => {
			const trimmed = line.trim()
			return (
				!trimmed.startsWith('//') &&
				!trimmed.startsWith('/*') &&
				!trimmed.startsWith('*')
			)
		})
		.join('\n')

	expect(
		nonCommentLines,
		'createElement( should not appear in your source (excluding comments)',
	).not.to.include('createElement(')
	expect(nonCommentLines, 'JSX is not in use (excluding comments)').to.include(
		'</div>',
	)
})
