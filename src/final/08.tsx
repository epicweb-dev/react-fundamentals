// Rendering Lists
// http://localhost:3000/isolated/final/08.tsx

import * as React from 'react'

type Item = {id: string; value: string}

const allItems: Array<Item> = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function typedBoolean<T>(
  value: T,
): value is Exclude<T, false | null | undefined | '' | 0> {
  return Boolean(value)
}

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    const newItems = [
      ...items,
      allItems.find(i => !itemIds.includes(i.id)),
    ].filter(typedBoolean)
    setItems(newItems)
  }

  function removeItem(item: Item) {
    const newItems = items.filter(i => i.id !== item.id)
    setItems(newItems)
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
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

export {App}
