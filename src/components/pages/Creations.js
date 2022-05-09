import React from 'react'
import Background from '../../images/pexels-fwstudio-129731.jpg'
import CreationBox from '../CreationBox'

function Creations() {
  return (
    <div>
        <div className='background-container'>
            <img src={Background} alt="C&F" className='background-image'/>
            <img src={Background} alt="C&F" className='background-image'/>
            <img src={Background} alt="C&F" className='background-image'/>
            <img src={Background} alt="C&F" className='background-image'/>
            <img src={Background} alt="C&F" className='background-image'/>
        </div>
        <div className='clear-container'>
            <h1>Our Creations</h1>
            <h3><i>Check out some of our work!</i></h3>
        </div>
        <div className='clear-container'>
            <h2 className='creations-text'>CNC Gifts</h2>
            <h3 className='creations-text'><i>Wood Plaques</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/plaques/Plaques 1.png')} imagename="Plaque"/>
              <CreationBox image={require('../../images/plaques/Plaques 2.png')} imagename="Plaque"/>
              <CreationBox image={require('../../images/plaques/Plaques 3.jpg')} imagename="Plaque"/>
              <CreationBox image={require('../../images/plaques/Plaques 4.png')} imagename="Plaque"/>
              <CreationBox image={require('../../images/plaques/Plaques 5.png')} imagename="Plaque"/>
              <CreationBox image={require('../../images/plaques/Plaques 6.jpg')} imagename="Plaque"/>
              <CreationBox image={require('../../images/plaques/Plaques 7.jpg')} imagename="Plaque"/>
            </div>

            <h3 className='creations-text'><i>Signs</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/signs/Signs 3.png')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 5.png')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 6.png')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 7.png')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 8.png')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 9.png')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 10.JPG')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 13.png')} imagename="Sign"/>
            </div>

            <h3 className='creations-text'><i>Miscellaneous</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/other/Other 1.png')} imagename="Other"/>
              <CreationBox image={require('../../images/other/Other 6.jpg')} imagename="Other"/>
            </div>

            <h2 className='creations-text'>Lasered Products</h2>
            <h3 className='creations-text'><i>Signs</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/signs/Signs 1.png')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 2.jpg')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 4.png')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 11.jpg')} imagename="Sign"/>
              <CreationBox image={require('../../images/signs/Signs 12.jpg')} imagename="Sign"/>
            </div>

            <h3 className='creations-text'><i>Cups</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/cups/Cups 1.png')} imagename="Cup"/>
              <CreationBox image={require('../../images/cups/Cups 2.png')} imagename="Cup"/>
              <CreationBox image={require('../../images/cups/Cups 6.png')} imagename="Cup"/>
            </div>

            <h3 className='creations-text'><i>Flasks</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/other/Other 2.png')} imagename="Other"/>
              <CreationBox image={require('../../images/other/Other 3.png')} imagename="Other"/>
            </div>

            <h3 className='creations-text'><i>Jewelry Boxes</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/jewelry/Jewelry 1.png')} imagename="Jewelry"/>
              <CreationBox image={require('../../images/jewelry/Jewelry 2.png')} imagename="Jewelry"/>
              <CreationBox image={require('../../images/jewelry/Jewelry 3.png')} imagename="Jewelry"/>
            </div>

            <h3 className='creations-text'><i>Miscellaneous</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/other/Other 4.jpg')} imagename="Other"/>
              <CreationBox image={require('../../images/other/Other 5.jpg')} imagename="Other"/>
            </div>
        </div>
    </div>
  )
}

export default Creations