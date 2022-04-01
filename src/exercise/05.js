// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'


const Box = ({className = '', size, style, ...others}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return <div className={`box ${className} ${sizeClassName}`} style={{fontStyle: 'italic', ...style}} {...others} /> 
}

function App() {
  return (
    <div>
      <Box size='small' style={{backgroundColor: 'lightblue'}} > Small lightblue box </Box>
      <Box size='medium' style={{backgroundColor: 'pink', margin: '10px 0'}} >Medium pink box </Box>
      <Box size='large' style={{backgroundColor: 'orange'}} >Large orange box </Box>
      <Box style={{backgroundColor: 'red', margin: '20px 0'}} >Large orange box </Box>
    </div>
  )
}

export default App
