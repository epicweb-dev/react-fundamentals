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

const smallBox = <div 
  className= "box box--small" // using different class names overloads more CSS on the same elements
  style = {{backgroundColor: "lightblue", fontStyle: "italic"}}
  >
  small lightblue box
  </div>

const mediumBox = <div
  className= "box box--medium"
  style = {{backgroundColor: "pink", fontStyle: "italic"}}
  >
    medium pink box
</div>

const largeBox = <div
  className = "box box--large"
  style = {{backgroundColor:"orange", fontStyle: "italic"}} 
 >large orange box</div>


//extra credit 1 making a costum Box component
/*
function Box({style, className ='', ...otherProps}){
  return (
    <div 
      className = {`box ${className}`}
      style = {{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}
*/

//override of the Box function taking in the size parameter.
function Box({style, size, className, ...otherProps}){
  const sizeName = size ? `box--${size}` : '' // is there a size operand? if so set to return (
    return(
      <div 
      className = {`box ${sizeName}`}
      style = {{fontStyle: 'italic', ...style}}
      {...otherProps}

      />
    )
}

//extra credit 2 implementation with size parameter in API
 function App(){
  return <div>
    <Box size="small" style={{backgroundColor: 'lightblue'}}>
      small lightblue box
    </Box>

    <Box size="medium" style={{backgroundColor: 'pink'}}>
      medium pink box
    </Box>

    <Box size="large" style={{backgroundColor: 'orange'}}>
      large orange box
    </Box>

    <Box>
      sizeless box
    </Box>

  </div>
 }
 //App() running with the latest implementation of the box component that takes in the 
 //small, medium and large options and hard codes that operand thus selecting the desired CSS option.

 //remember to use the JSX expression of the tag e.g. <div /> within the box funtion as the returning React element.

/*
function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}
*/

/*function App(){
  //the class name must be in "" not '' or else it wont compile well.
  return (
    <div>
      <Box className = "box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>

      <Box className = "box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>

      <Box className = "box--large" style={{backgroundColor:'orange'}}>
        large orange box
      </Box>

      <Box>
        sizeless box
      </Box>
    </div>
  )
}
*/

//working implementation, forgot the <div> element to group the boxes, was offered to use 
//a fragment, <></> 

//re-implementing with the costum made box

export default App
