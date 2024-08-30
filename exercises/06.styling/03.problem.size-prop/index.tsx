import { createRoot } from 'react-dom/client'

export function Box({
	// 💯 you can keep the style and className props here, but you can make this
	// still work if you remove them. Give that a shot if you want.
	style = {},
	className = '',
	// 🐨 add a size prop here
	...otherProps // 🦺 intersect (&) this with an object that has a size prop type here which is
	// optional and is one of "small", "medium", or "large"
}: React.ComponentProps<'div'>) {
	// 🐨 based on the size prop, define a new variable called sizeClassName
	return (
		<div
			// 🐨 add the sizeClassName to the className prop
			// 💯 for something extra, handle the case where no className is given (remove extra spaces).
			className={`box ${className}`}
			style={{ fontStyle: 'italic', ...style }}
			{...otherProps}
		/>
	)
}

function App() {
	return (
		<div>
			{/* 🐨 update all these boxes to use the size prop */}
			<Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box className="box--medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box className="box--large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
