import { createRoot } from 'react-dom/client'

const smallBox = (
	<div
		className="box box--small"
		style={{ fontStyle: 'italic', backgroundColor: 'lightblue' }}
	>
		small lightblue box
	</div>
)
const mediumBox = (
	<div
		className="box box--medium"
		style={{ fontStyle: 'italic', backgroundColor: 'pink' }}
	>
		medium pink box
	</div>
)
const largeBox = (
	<div
		className="box box--large"
		style={{ fontStyle: 'italic', backgroundColor: 'orange' }}
	>
		large orange box
	</div>
)
const sizelessColorlessBox = (
	<div className="box" style={{ fontStyle: 'italic' }}>
		sizeless colorless box
	</div>
)

function App() {
	return (
		<div>
			{smallBox}
			{mediumBox}
			{largeBox}
			{sizelessColorlessBox}
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
