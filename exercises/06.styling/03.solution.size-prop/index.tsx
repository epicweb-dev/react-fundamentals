import * as ReactDOM from 'react-dom/client'

function Box({
	style,
	size,
	...otherProps
}: {
	size?: 'small' | 'medium' | 'large'
} & React.HTMLAttributes<HTMLDivElement>) {
	const sizeClassName = size ? `box--${size}` : ''
	return (
		<div
			className={`box ${sizeClassName}`}
			style={{ fontStyle: 'italic', ...style }}
			{...otherProps}
		/>
	)
}

function App() {
	return (
		<div>
			<Box size="small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box size="medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box size="large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
ReactDOM.createRoot(rootEl).render(<App />)
