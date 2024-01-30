import { useState } from 'react'
import * as ReactDOM from 'react-dom/client'

function App() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [key, setKey] = useState(0)
	return (
		<div>
			{/* 🐨 add a key prop to this input and set it to the key state */}
			<input />
			<button onClick={() => setKey(key => key + 1)}>Reset</button>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
