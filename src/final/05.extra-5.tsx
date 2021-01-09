// TypeScript with React
// 💯 use a "Type Narrowing Identity Function (TNIF)"
// http://localhost:3000/isolated/final/05.js
import * as React from 'react'

type OperationFn = (left: number, right: number) => number

const createOperations = <OperationsType extends Record<string, OperationFn>>(
  opts: OperationsType,
) => opts

const operations = createOperations({
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
})

type CalculatorProps = {
  left?: number
  operator?: keyof typeof operations
  right?: number
}
function Calculator({left = 0, operator = '+', right = 0}: CalculatorProps) {
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

export {App}
