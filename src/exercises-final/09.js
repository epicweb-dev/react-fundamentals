// Rendering Arrays
import React from 'react'

const allItems = [
  {id: 'a', value: 'apple'},
  {id: 'o', value: 'orange'},
  {id: 'g', value: 'grape'},
  {id: 'p', value: 'pear'},
]

function App() {
  const [items, setItems] = React.useState([])

  function addItem() {
    setItems([...items, allItems.find(i => !items.includes(i))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i !== item))
  }

  return (
    <div>
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        +
      </button>
      {items.map(i => (
        <div key={i.id}>
          <button onClick={() => removeItem(i)}>-</button>
          {i.value}:
          <input defaultValue={i.value} />
        </div>
      ))}
    </div>
  )
}

function Usage() {
  return <App />
}
Usage.title = 'Rendering Arrays: the key prop'

export default Usage
