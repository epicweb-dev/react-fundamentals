// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = ({style, ...otherProps}) => {
  const classSizeName = otherProps.size ? `box--${otherProps.size}` : ``;
  return(
    <div
      className={`box ${classSizeName}`}
      style={{marginTop: 20, fontStyle: 'italic', ...style}}
    >
      {otherProps.children}
    </div>
  )
}

const smallBox = <Box
                    style={{backgroundColor: 'lightblue'}}
                    size='small'
                    children='small lightblue box'
                    />
const mediumBox = <Box
                    style={{backgroundColor: 'pink'}}
                    size='medium'
                    children='medium pink box'
                  />

const largeBox = <Box
                    style={{backgroundColor: 'orange'}}
                    size='large'
                    children='large orange box'
                  />

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
