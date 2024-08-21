import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
import { createRoot } from 'react-dom/client'
const { screen } = dtl

import { Box } from './index.tsx'

await testStep('Box component renders correctly', async () => {
	document.body.innerHTML = ''
	const root = document.createElement('div')
	document.body.appendChild(root)
	createRoot(root).render(
		<Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
			Test Box
		</Box>,
	)

	const boxElement = await screen.findByText('Test Box')

	expect(boxElement).toHaveClass('box box--small')
	expect(boxElement.style.backgroundColor).toBe('lightblue')
	expect(boxElement.style.fontStyle).toBe('italic')
	expect(boxElement).toHaveTextContent('Test Box')
})

await testStep('Box component applies default props correctly', async () => {
	document.body.innerHTML = ''
	const root = document.createElement('div')
	document.body.appendChild(root)
	createRoot(root).render(<Box>Default Box</Box>)

	const boxElement = await screen.findByText('Default Box')

	expect(boxElement).toHaveClass('box')
	expect(boxElement.style.fontStyle).toBe('italic')
	expect(boxElement).toHaveTextContent('Default Box')
})

await testStep('Box component passes through additional props', async () => {
	document.body.innerHTML = ''
	const root = document.createElement('div')
	document.body.appendChild(root)
	createRoot(root).render(
		<Box data-testid="custom-box" aria-label="Custom Box">
			Custom Props Box
		</Box>,
	)

	const boxElement = await screen.findByText('Custom Props Box')

	expect(boxElement).toHaveAttribute('data-testid', 'custom-box')
	expect(boxElement).toHaveAttribute('aria-label', 'Custom Box')
})
