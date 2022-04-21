import React from 'react'
import './Slider.css'

function Slider() {
  return (
    <div id='slider'>
        <h3 id="slider-text"><i>Custom Engravings and CNC Gifts, Made Personal for You!</i></h3>
        <div id='slider-responsive-container'>
            <div className='arrow-container'>
                <div className='arrow-point arrow-point-up'></div>
                <div className='arrow-point arrow-point-down arrow-bottom'></div>
            </div>
            <div id='slider-image-container'>

            </div>
            <div className='arrow-container'>
                <div className='arrow-point arrow-point-down'></div>
                <div className='arrow-point arrow-point-up arrow-bottom'></div>
            </div>
        </div>
        <div id='dot-container'>
            <div className='slider-dot-closed'></div>
            <div className='slider-dot-open'></div>
        </div>
    </div>
  )
}

export default Slider