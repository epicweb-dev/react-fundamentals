import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
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
createRoot(rootEl).render(<App />)
