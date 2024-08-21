import { expect, testStep, dtl } from '@epic-web/workshop-utils/test'
const { screen } = dtl

import './index.tsx'

await testStep('Calculator h1 is rendered', () =>
	screen.findByText('Calculator'),
)

const calculators = await testStep('Code elements are rendered', async () => {
	const elements = await screen.findAllByRole('code')
	expect(elements).toHaveLength(4)
	return elements
})

const [add, subtract, multiply, divide] = calculators

await testStep('Addition calculation is rendered correctly', async () => {
	expect(add).toHaveTextContent('1 + 2 = 3')
})

await testStep('Subtraction calculation is rendered correctly', async () => {
	expect(subtract).toHaveTextContent('1 - 2 = -1')
})

await testStep('Multiplication calculation is rendered correctly', async () => {
	expect(multiply).toHaveTextContent('1 * 2 = 2')
})

await testStep('Division calculation is rendered correctly', async () => {
	expect(divide).toHaveTextContent('1 / 2 = 0.5')
})
