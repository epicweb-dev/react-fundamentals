import { useState } from 'react'
import { createRoot } from 'react-dom/client'

const allItems = [
	{ id: 'apple', value: '🍎 apple' },
	{ id: 'orange', value: '🍊 orange' },
	{ id: 'grape', value: '🍇 grape' },
	{ id: 'pear', value: '🍐 pear' },
]

function App() {
	const [items, setItems] = useState(allItems)

	function addItem() {
		const itemIds = items.map(i => i.id)
		const itemToAdd = allItems.find(i => !itemIds.includes(i.id))
		if (itemToAdd) setItems([...items, itemToAdd])
	}

	function removeItem(id: string) {
		setItems(items.filter(i => i.id !== id))
	}

	return (
		<div className="keys">
			<button disabled={items.length >= allItems.length} onClick={addItem}>
				add item
			</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>
						<button onClick={() => removeItem(item.id)}>remove</button>{' '}
						<label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
						<input id={`${item.id}-input`} defaultValue={item.value} />
					</li>
				))}
			</ul>
		</div>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
