// Rendering Lists
// http://localhost:3000/isolated/exercise/07.tsx

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'} as const,
  {id: 'orange', value: '🍊 orange'} as const,
  {id: 'grape', value: '🍇 grape'} as const,
  {id: 'pear', value: '🍐 pear'} as const,
]

type Items = typeof allItems
type Item = Items[number]

//#region  App
const App: React.VFC = () => {
  const [items, setItems] = React.useState<Items>(allItems)

  const addItem: React.MouseEventHandler<HTMLButtonElement> = () => {
    setItems([
      ...items,
      allItems.find(i => !items.map(({id}) => id).includes(i.id)),
    ])
  }

  function removeItem(item: Item): void {
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
//#endregion App

export default App
