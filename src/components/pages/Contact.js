import React from 'react'
import Background from '../../images/pexels-fwstudio-129731.jpg'
import ContactBox from '../ContactBox'

function Contact() {
  return (
    <div>
        <div className='background-container'>
            <img src={Background} alt="C&F" className='background-image'/>
        </div>
        <div className='clear-container'>
            <h1>Try Us Today</h1>
            <h3><i>Contact us and learn more about our pricing!</i></h3>
            <ContactBox />
        </div>
        <div className='page-container'>
            <div className='text-container'>
                <h2 className='subtitle'>Pricing Information</h2>
                <h3 className='contact-text'>Our pricing, just like our work, is customized depending on the project. 
                We consider the following when assessing the cost of your craft:
                </h3>
                <ul className='list-text'>
                    <li>
                        <h3 className='contact-text'>Size - (Will it be handheld (i.e. cups, boxes, etc.) or larger 
                        (i.e. signs, plaques, etc.))
                        </h3>
                    </li>
                    <li>
                        <h3 className='contact-text'>Material - (Wood, metal, leather, etc.)</h3>
                    </li>
                    <li>
                        <h3 className='contact-text'>Design - (Is your project a cut-out or an engraving? What kind 
                        of pattern will we be using?)
                        </h3>
                    </li>
                    <li>
                        <h3 className='contact-text'>Shipping - (Local or out of state?)</h3>
                    </li>
                </ul>
                <h3 className='contact-text'>Our main priority is your satisfaction, and so we strive to provide prices 
                that are both fair and reasonable. Contact us today to get more information, and see how we can help you 
                get started with your dream project!
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Contact