import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

// 🐨 add type definitions for each function
const operations = {
	// @ts-expect-error 💣 when you finish, remove this comment.
	'+': (left, right) => left + right,
	// @ts-expect-error 💣 when you finish, remove this comment.
	'-': (left, right) => left - right,
	// @ts-expect-error 💣 when you finish, remove this comment.
	'*': (left, right) => left * right,
	// @ts-expect-error 💣 when you finish, remove this comment.
	'/': (left, right) => left / right,
}

// 🐨 create a type called CalculatorProps

// 🐨 set the type for this props argument to CalculatorProps
// @ts-expect-error 💣 when you finish, remove this comment.
function Calculator({ left, operator, right }) {
	// @ts-expect-error we'll fix this one later
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
ReactDOM.createRoot(rootEl).render(<App />)
