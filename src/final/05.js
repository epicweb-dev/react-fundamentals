// Styling
// http://localhost:3000/isolated/final/05.js

import * as React from 'react'
import '../box-styles.css'

const smallBox = (
  <div
    className="box box--small"
    style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{fontStyle: 'italic', backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{fontStyle: 'italic', backgroundColor: 'orange'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
