import { createRoot } from 'react-dom/client'

// 🐨 create a component called "Box" which accepts style (defaults to {}), className (defaults to ''), and children props.
// 🐨 Make it render a div with the style, className, and children applied.
// 🐨 Also automatically add the fontStyle: 'italic' style to the style prop so consumers don't have to provide that
// 🐨 And automatically add the "box" className to the className prop so consumers don't have to provide that as well.
// 🚨 make sure to export the Box component so it can be imported in the test file.

// 💯 as a bonus, have this accept any number of additional props (typed as React.ComponentProps<'div'>)
// and apply those to the rendered div as well.

// 🐨 update all of these to use the <Box> component with the appropriate props.
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
