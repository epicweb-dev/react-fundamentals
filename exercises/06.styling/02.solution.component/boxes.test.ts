import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
const { screen } = dtl

import './index.tsx'

await testStep('Small lightblue box is rendered correctly', async () => {
	const smallBox = await screen.findByText('small lightblue box')
	expect(smallBox).toHaveClass('box box--small')
	expect(smallBox.style.backgroundColor).toBe('lightblue')
	expect(smallBox.style.fontStyle).toBe('italic')
})

await testStep('Medium pink box is rendered correctly', async () => {
	const mediumBox = await screen.findByText('medium pink box')
	expect(mediumBox).toHaveClass('box box--medium')
	expect(mediumBox.style.backgroundColor).toBe('pink')
	expect(mediumBox.style.fontStyle).toBe('italic')
})

await testStep('Large orange box is rendered correctly', async () => {
	const largeBox = await screen.findByText('large orange box')
	expect(largeBox).toHaveClass('box box--large')
	expect(largeBox.style.backgroundColor).toBe('orange')
	expect(largeBox.style.fontStyle).toBe('italic')
})

await testStep('Sizeless colorless box is rendered correctly', async () => {
	const sizelessColorlessBox = await screen.findByText('sizeless colorless box')
	expect(sizelessColorlessBox).toHaveClass('box')
	expect(sizelessColorlessBox).not.toHaveClass('box--small')
	expect(sizelessColorlessBox).not.toHaveClass('box--medium')
	expect(sizelessColorlessBox).not.toHaveClass('box--large')
	expect(sizelessColorlessBox.style.fontStyle).toBe('italic')
})
