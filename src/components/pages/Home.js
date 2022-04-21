import React from 'react'
import Background from '../../images/pexels-fwstudio-129731.jpg'
import Slider from '../Slider'


function Home() {
  return (
    <div>
        <div className='background-container'>
            <img src={Background} alt="C&F" className='background-image'/>
        </div>
        <Slider />
        <div className='page-container'>
            <div className='text-container'>
                <h2 className='subtitle'>Our Goal:</h2>
                <h3 className='home-text'><i>Take your ideas and make them realities.</i></h3>
                <h3 className='home-text'>Do you have a design that you want to see brought to life? Need 
                    a custom engraving for one of your personal items? How about 
                    a plaque or sign to celebrate a special occasion?
                </h3>
                <h3 className='home-text'>Look no further, because C & F is here to lend a hand!</h3>
                <h3 className='home-text'>As a home-grown small business, our products are crafted with 
                    an artisan’s edge, emphasizing both hard work and care. We 
                    specialize in creating cutouts and engravings for wood, metal, 
                    leather, and more! With our state-of-the-art CNC and Laser 
                    Cutters, no design is too large or too intricate for us to handle.
                </h3>
                <h3 className='home-text'>Give us a try today, and see how we can help create a custom 
                    design that’s just right for you!
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Home