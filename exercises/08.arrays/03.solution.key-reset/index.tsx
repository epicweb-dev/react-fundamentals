import { useState } from 'react'
import * as ReactDOM from 'react-dom/client'

function App() {
	const [key, setKey] = useState(0)
	return (
		<div>
			<input key={key} />
			<button onClick={() => setKey(key => key + 1)}>Reset</button>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
