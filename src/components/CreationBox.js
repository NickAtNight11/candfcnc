import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './CreationBox.css'

function CreationBox({image, imagedesc}) {
  return (
    <div id='creation-box'>
        <div id='creation-background'>
          <LazyLoadImage id='creation-image' src={image} alt={imagedesc} effect="black-and-white"/>
        </div>
    </div>
  )
}

export default CreationBox;