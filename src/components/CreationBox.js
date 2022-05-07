import React from 'react'
import './CreationBox.css'

function CreationBox({image}, {imagename}) {
  return (
    <div id='creation-box'>
        <img id='creation-image' src={image} alt={imagename}/>
    </div>
  )
}

export default CreationBox;