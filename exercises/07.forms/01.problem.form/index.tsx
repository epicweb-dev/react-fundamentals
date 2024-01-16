import * as ReactDOM from 'react-dom/client'

function App() {
	// 🐨 render a form
	//   🐨 render a "Username" label
	//   🐨 render an input with the name "username"
	//   🐨 render a "Password" label
	// 💯 associate the labels to the inputs using htmlFor and id attributes
	// 💯 explicitly set the button type appropriately
	return 'TODO'
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
