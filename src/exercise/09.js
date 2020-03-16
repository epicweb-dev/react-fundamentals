// Rendering Lists
// http://localhost:3000/isolated/exercise/09.js

import React from 'react'

const allItems = [
  {id: 'a', value: 'apple'},
  {id: 'o', value: 'orange'},
  {id: 'g', value: 'grape'},
  {id: 'p', value: 'pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    setItems([...items, allItems.find(i => !items.includes(i))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i !== item))
  }

  return (
    <div>
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          // 🐨 this needs a key. Set it to i.id
          <li>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.value}-input`}>{item.value}</label>{' '}
            <input id={`${item.value}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function Usage() {
  return (
    <div
      style={{
        height: 200,
        width: 400,
        backgroundColor: '#eee',
        borderRadius: 4,
        padding: 20,
      }}
    >
      <App />
    </div>
  )
}

export default Usage
