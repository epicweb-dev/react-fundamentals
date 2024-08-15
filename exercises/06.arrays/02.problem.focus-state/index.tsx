import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
	const [items, setItems] = useState([
		{ id: 'apple', value: '🍎 apple' },
		{ id: 'orange', value: '🍊 orange' },
		{ id: 'grape', value: '🍇 grape' },
		{ id: 'pear', value: '🍐 pear' },
	])

	const [autoShuffle, setAutoShuffle] = useState(true)

	useEffect(() => {
		if (autoShuffle) {
			const id = setInterval(() => setItems(shuffle), 1000)
			return () => clearInterval(id)
		}
	}, [autoShuffle])

	function getChangeHandler(item: (typeof items)[number]) {
		return (event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = event.currentTarget.value
			setItems(allItems =>
				allItems.map(i => ({
					...i,
					value: i.id === item.id ? newValue : i.value,
				})),
			)
		}
	}

	return (
		<div className="keys">
			<main>
				<div>
					<h1>Without a key</h1>
					<ul style={{ display: 'flex', gap: '10px' }}>
						{items.map((item, index) => (
							// 🐨 add a key prop to the <li> below. Set it to item.id
							// 💣 you can then delete this eslint-disable line:
							// eslint-disable-next-line react/jsx-key
							<li>
								<label htmlFor={`no-key-${item.id}-input`}>
									No key #{index + 1}
								</label>
								<input
									id={`no-key-${item.id}-input`}
									className={`${item.id}-input`}
									value={item.value}
									onChange={getChangeHandler(item)}
								/>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h1>With array index as key</h1>
					<ul style={{ display: 'flex', gap: '10px' }}>
						{items.map((item, index) => (
							// 🐨 change the key prop below to item.id (something that actually represents the item)
							<li key={index}>
								<label htmlFor={`index-key-${item.id}-input`}>
									Index key #{index + 1}
								</label>
								<input
									id={`index-key-${item.id}-input`}
									className={`${item.id}-input`}
									value={item.value}
									onChange={getChangeHandler(item)}
								/>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h1>With a proper key</h1>
					<ul style={{ display: 'flex', gap: '10px' }}>
						{items.map((item, index) => (
							<li key={item.id}>
								<label htmlFor={`proper-key-${item.id}-input`}>
									Proper key #{index + 1}
								</label>
								<input
									id={`proper-key-${item.id}-input`}
									className={`${item.id}-input`}
									value={item.value}
									onChange={getChangeHandler(item)}
								/>
							</li>
						))}
					</ul>
				</div>
			</main>
			<aside style={{ marginTop: '40px' }}>
				<div style={{ alignItems: 'center', display: 'flex', gap: '8px' }}>
					<input
						id="autoshuffle"
						type="checkbox"
						checked={autoShuffle}
						onChange={event => setAutoShuffle(event.target.checked)}
					/>
					<label htmlFor="autoshuffle">Auto-shuffle inputs</label>
				</div>
			</aside>
		</div>
	)
}

function shuffle<ArrayType>(originalArray: Array<ArrayType>) {
	const array = [...originalArray]
	let currentIndex = array.length
	let temporaryValue
	let randomIndex
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1
		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}
	return array
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
