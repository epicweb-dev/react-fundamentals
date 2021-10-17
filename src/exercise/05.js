// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
function Box({style, size, className='', ...otherProps}) {
  const sizeClassName = size? `box--${size}` : ''
  return (    
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle:'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size='small' style={{fontStyle:"italic", backgroundColor:"lightblue"}}>
        small lightblue box
      </Box>
      <Box size='medium' style={{fontStyle:"italic", backgroundColor:"pink"}}>
        medium pink box
      </Box>
      <Box size='large' style={{fontStyle:"italic", backgroundColor:"orange"}}>
        large orange box
      </Box>
      <Box>
        sizeless box
      </Box>
  
    </div>
  )
}

export default App
