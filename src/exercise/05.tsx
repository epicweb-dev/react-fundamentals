// Styling
// http://localhost:3000/isolated/exercise/05.tsx

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const smallBox = <div>small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>

interface BoxProps {
  // 🐨 add the box properties here!
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Box: React.FC<BoxProps> = () => {
  // 🐨 return your box implementation
  return null
}

const App: React.VFC = () => (
  <div>
    {smallBox}
    {mediumBox}
    {largeBox}
  </div>
)

export default App
