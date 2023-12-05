import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

// 🐨 create an OperationFn type that represents the common shape of the
// operation functions below
// 🐨 create an Operator type that's set to the union of +, -, *, and /
// 🦉 Note: you cannot use "keyof typeof operations" anymore because of a
// circular dependency here

// 🐨 cast the operations variable to a Record of the Operator type and the OperationFn type
const operations = {
	// 🐨 remove all the ": number" from these functions
	'+': (left: number, right: number): number => left + right,
	'-': (left: number, right: number): number => left - right,
	'*': (left: number, right: number): number => left * right,
	'/': (left: number, right: number): number => left / right,
}

type CalculatorProps = {
	left?: number
	operator?: keyof typeof operations
	right?: number
}
function Calculator({ left = 0, operator = '+', right = 0 }: CalculatorProps) {
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
			<Calculator left={1} right={2} />
			<Calculator operator="-" />
			<Calculator left={1} operator="*" />
			<Calculator operator="/" right={2} />
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
