import { createRoot } from 'react-dom/client'

const operations = {
	'+': (left: number, right: number): number => left + right,
	'-': (left: number, right: number): number => left - right,
	'*': (left: number, right: number): number => left * right,
	'/': (left: number, right: number): number => left / right,
}

type CalculatorProps = {
	// 🐨 make each of these optional
	left: number
	operator: keyof typeof operations
	right: number
}
// 🐨 add defaults so if a user just uses <Calculator /> they'll get "0 + 0 = 0"
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
			{/* 🐨 remove the values that are not strictly necessary */}
			<Calculator left={1} operator="+" right={2} />
			<Calculator left={0} operator="-" right={0} />
			<Calculator left={1} operator="*" right={0} />
			<Calculator left={0} operator="/" right={2} />
			{/* 🦉 Sometimes passing a value that's the default is ok even if it's not
			strictly necessary because it's more explicit and clear. But we're just
			playing around with TypeScript and defaults here so play along please! */}
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
