// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size, ...otherProps}) {
  const className = size ? `box--${size}` : ''

  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)

const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    small lightblue box
  </Box>
)

const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    small lightblue box
  </Box>
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
