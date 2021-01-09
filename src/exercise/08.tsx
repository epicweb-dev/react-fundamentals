// Rendering Lists
// http://localhost:3000/isolated/exercise/08.tsx

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
        {/* 🐨 use items.map to convert the item objects to React elements */}
        {/* 💰 Here's what the UI should look like for each item:
          - <li>
            - <button> with onClick that calls `removeItem` with the item
            - <label> with the contents of `item.value` and a globally unique htmlFor
            - <input> with an id that matches the htmlFor and a defaultValue set to item.value
          💰 You can set the `id` and `htmlFor` to `${item.id}-input` to make it globally unique
         */}
      </ul>
    </div>
  )
}

export {App}

/*
eslint
  @typescript-eslint/no-unused-vars: "off",
*/
