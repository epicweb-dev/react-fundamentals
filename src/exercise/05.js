// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = (
  <div
    className={`box box--small`}
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className={`box box--medium`}
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className={`box box--large`}
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function Box({className, style, ...props}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

function Box2({className, size, style, ...props}) {
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    />
  )
}

function App() {
  return (
    <div>
      <div>
        {smallBox}
        {mediumBox}
        {largeBox}
      </div>
      <div>
        Extra Credit 1:
        <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
          small lightblue box
        </Box>
        <Box className="box--medium" style={{backgroundColor: 'pink'}}>
          medium pink box
        </Box>
        <Box className="box--large" style={{backgroundColor: 'orange'}}>
          large lightblue box
        </Box>
      </div>
      <div>
        Extra Credit 2:
        <Box2 size="small" style={{backgroundColor: 'lightblue'}}>
          small lightblue box
        </Box2>
        <Box2 size="medium" style={{backgroundColor: 'pink'}}>
          medium pink box
        </Box2>
        <Box2 size="large" style={{backgroundColor: 'orange  '}}>
          large orange box
        </Box2>
      </div>
    </div>
  )
}

export default App
