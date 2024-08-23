import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
import { createRoot } from 'react-dom/client'
const { screen } = dtl

import { Box } from './index.tsx'
await testStep('Box component renders correctly with size prop', async () => {
	document.body.innerHTML = ''
	const root = document.createElement('div')
	document.body.appendChild(root)
	createRoot(root).render(
		<Box size="small" style={{ backgroundColor: 'lightblue' }}>
			Small Box
		</Box>,
	)

	const boxElement = await screen.findByText('Small Box')

	expect(boxElement).toHaveClass('box box--small')
	expect(boxElement.style.backgroundColor).toBe('lightblue')
	expect(boxElement.style.fontStyle).toBe('italic')
	expect(boxElement).toHaveTextContent('Small Box')
})

await testStep('Box component applies default size correctly', async () => {
	document.body.innerHTML = ''
	const root = document.createElement('div')
	document.body.appendChild(root)
	createRoot(root).render(<Box>Default Size Box</Box>)

	const boxElement = await screen.findByText('Default Size Box')

	expect(boxElement).toHaveClass('box')
	expect(boxElement).not.toHaveClass('box--small')
	expect(boxElement).not.toHaveClass('box--medium')
	expect(boxElement).not.toHaveClass('box--large')
	expect(boxElement.style.fontStyle).toBe('italic')
})

await testStep('Box component handles all size options', async () => {
	document.body.innerHTML = ''
	const root = document.createElement('div')
	document.body.appendChild(root)
	createRoot(root).render(
		<>
			<Box size="small">Small Box</Box>
			<Box size="medium">Medium Box</Box>
			<Box size="large">Large Box</Box>
		</>,
	)

	const smallBox = await screen.findByText('Small Box')
	const mediumBox = await screen.findByText('Medium Box')
	const largeBox = await screen.findByText('Large Box')

	expect(smallBox).toHaveClass('box box--small')
	expect(mediumBox).toHaveClass('box box--medium')
	expect(largeBox).toHaveClass('box box--large')
})
