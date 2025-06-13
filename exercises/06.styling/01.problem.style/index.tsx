import { createRoot } from 'react-dom/client'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
	<div
		className="box box--small"
		style={{ background: 'lightblue', fontStyle: 'italic' }}
	>
		small lightblue box
	</div>
)
const mediumBox = (
	<div
		className="box box--medium"
		style={{ background: 'pink', fontStyle: 'italic' }}
	>
		medium pink box
	</div>
)
const largeBox = (
	<div
		className="box box--large"
		style={{ background: 'orange', fontStyle: 'italic' }}
	>
		large orange box
	</div>
)

// 💰 the sizelessColorlessBox should still be a box, just with no size or color
const sizelessColorlessBox = (
	<div
		className="box"
		style={{ background: 'transparent', fontStyle: 'italic' }}
	>
		sizeless colorless box
	</div>
)

function App() {
	return (
		<div className="box">
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
