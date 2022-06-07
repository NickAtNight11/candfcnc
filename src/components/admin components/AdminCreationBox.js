import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './AdminCreationBox.css'

function AdminCreationBox({image, imagedesc}) {
  return (
    <div id="admin-creation-box">
        <LazyLoadImage id='admin-creation-image' src={image} alt={imagedesc} effect="black-and-white"/>
    </div>
  )
}

export default AdminCreationBox