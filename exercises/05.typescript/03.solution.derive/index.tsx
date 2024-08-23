import { createRoot } from 'react-dom/client'

const operations = {
	'+': (left: number, right: number): number => left + right,
	'-': (left: number, right: number): number => left - right,
	'*': (left: number, right: number): number => left * right,
	'/': (left: number, right: number): number => left / right,
}

type CalculatorProps = {
	left: number
	operator: keyof typeof operations
	right: number
}
function Calculator({ left, operator, right }: CalculatorProps) {
	const result = operations[operator](left, right)
	return (
		<div>
			<code>
				{left} {operator} {right} = <output>{result}</output>
			</code>
		</div>
	)
}

function App() {
	return (
		<div>
			<h1>Calculator</h1>
			<Calculator left={1} operator="+" right={2} />
			<Calculator left={1} operator="-" right={2} />
			<Calculator left={1} operator="*" right={2} />
			<Calculator left={1} operator="/" right={2} />
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
