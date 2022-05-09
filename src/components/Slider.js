import React, {useState, useEffect} from 'react'
import './Slider.css'
import sliderimage1 from '../images/homepage/Home Page 1.jpg'
import sliderimage2 from '../images/homepage/Home Page 2.jpg'
import sliderimage3 from '../images/homepage/Home Page 3.jpg'
import sliderimage4 from '../images/other/Other 2.png'
import sliderimage5 from '../images/homepage/Home Page 4.jpg'
import sliderimage6 from '../images/homepage/Home Page 5.jpg'
import sliderimage7 from '../images/jewelry/Jewelry 1.png'


function Slider() {
    const [count, setCount] = useState(0);
    const [prevcount, setPrevCount] = useState(0);
    let change = "";
    let reset = "";
    let photos = [sliderimage1, sliderimage2, sliderimage3, sliderimage4, sliderimage5, sliderimage6, sliderimage7];


    useEffect(() => {   // eslint-disable-next-line
        change = "dot-"+ count; // eslint-disable-next-line
        reset = "dot-"+ prevcount;
        document.getElementById('slider-image-container').className = 'slider-fade';
        setTimeout(() => {document.getElementById('slider-image').src = photos[count];}, 500);
        setTimeout(() => {document.getElementById('slider-image-container').className = 'slider-unfade'}, 500);
        document.getElementById(reset).className = 'slider-dot-open';
        document.getElementById(change).className = 'slider-dot-closed';
        setPrevCount(count);
        const timer = setTimeout(() => {
            if(count === 6) {
                setCount(0);
            } 
            else {
                setCount(count+1);
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, [count]);
    

    return (
        <div id='slider'>
            <h3 id="slider-text"><i>Custom Engravings and CNC Gifts, Made Personal for You!</i></h3>
            <div id='slider-responsive-container'>
                <div className='arrow-container' onClick={() => {if(count === 0) {setCount(6)} else {setCount(count-1)}}}>
                    <div className='arrow-point arrow-point-up'></div>
                    <div className='arrow-point arrow-point-down arrow-bottom'></div>
                </div>
                <div id='slider-image-container'>
                    <img id='slider-image' src='' alt='C & F CNC and Laser Creations'/>
                </div>
                <div className='arrow-container' onClick={() => {if(count === 6) {setCount(0)} else {setCount(count+1)}}}>
                    <div className='arrow-point arrow-point-down'></div>
                    <div className='arrow-point arrow-point-up arrow-bottom'></div>
                </div>
            </div>
            <div id='dot-container'>
                <div id='dot-0' className='slider-dot-closed'></div>
                <div id='dot-1' className='slider-dot-open'></div>
                <div id='dot-2' className='slider-dot-open'></div>
                <div id='dot-3' className='slider-dot-open'></div>
                <div id='dot-4' className='slider-dot-open'></div>
                <div id='dot-5' className='slider-dot-open'></div>
                <div id='dot-6' className='slider-dot-open'></div>
            </div>
        </div>
    )
}

export default Slider