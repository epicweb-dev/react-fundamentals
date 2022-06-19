// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import React, { useState } from 'react'

type Item = {
  id: 'apple' | 'orange' | 'grape' | 'pear'
  value: '🍎 apple' | '🍊 orange' | '🍇 grape' | '🍐 pear'
}

type Items = Item[]

const allItems: Items = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
]

function App() {
  const [items, setItems] = useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)

    const foundItem = allItems.find(i => !itemIds.includes(i.id))
    if (!foundItem) {
      return
    }

    setItems([...items, foundItem])
  }

  function removeItem(item: Item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {items.map(item => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
