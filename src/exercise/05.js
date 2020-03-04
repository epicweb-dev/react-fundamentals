// Styling

/*
For the rest of the exercises, you can now run things locally with `npm start`
or on codesandbox: https://codesandbox.io/s/github/kentcdodds/react-fundamentals
*/

import React from 'react'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div>small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>

function Usage() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default Usage
