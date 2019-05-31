// Styling
import React from 'react'

const smallBox = (
  <div className="box box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </div>
)
const mediumBox = (
  <div className="box box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </div>
)
const largeBox = (
  <div className="box box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </div>
)

function Usage() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}
Usage.title = 'Styling'

export default Usage
