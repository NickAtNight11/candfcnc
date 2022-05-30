import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './CreationBox.css'

function CreationBox({image}, {imagename}) {
  return (
    <div id='creation-box'>
        <LazyLoadImage id='creation-image' src={image} alt={imagename} effect="black-and-white"/>
    </div>
  )
}

export default CreationBox;