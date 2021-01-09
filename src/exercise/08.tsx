// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

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
    setItems(
      [
        ...items,
        allItems.find(i => !items.map(({id}) => id).includes(i.id)),
      ].filter(typedBoolean),
    )
  }

  function removeItem(item: Item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
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

export {App}
