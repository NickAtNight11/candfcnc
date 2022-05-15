import React from 'react'
import CreationBox from '../CreationBox'

function Creations() {
  return (
    <div>
        <div className='clear-container'>
            <h1>Our Creations</h1>
            <h3><i>Check out some of our work!</i></h3>
        </div>
        <div className='clear-container'>
            <h2 className='creations-text'>CNC Gifts</h2>
            <h3 className='creations-text'><i>Wood Plaques</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/plaques/Plaques 1.png')} imagename="law enforcement wood plaque for sheriff"/>
              <CreationBox image={require('../../images/plaques/Plaques 2.png')} imagename="law enforcement wood plaque for police"/>
              <CreationBox image={require('../../images/plaques/Plaques 3.jpg')} imagename="law enforcement wood plaque for judge"/>
              <CreationBox image={require('../../images/plaques/Plaques 4.png')} imagename="law enforcement wood plaque for sheriff"/>
              <CreationBox image={require('../../images/plaques/Plaques 5.png')} imagename="law enforcement wood plaque for judge"/>
              <CreationBox image={require('../../images/plaques/Plaques 6.jpg')} imagename="military wood plaque for Navy"/>
              <CreationBox image={require('../../images/plaques/Plaques 7.jpg')} imagename="law enforcement wood plaque for DPS trooper"/>
            </div>

            <h3 className='creations-text'><i>Signs</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/signs/Signs 3.png')} imagename="family wooden hanging sign"/>
              <CreationBox image={require('../../images/signs/Signs 5.png')} imagename="colored wooden Texas sign"/>
              <CreationBox image={require('../../images/signs/Signs 6.png')} imagename="John Wayne wooden sign"/>
              <CreationBox image={require('../../images/signs/Signs 7.png')} imagename="car wash business wooden sign"/>
              <CreationBox image={require('../../images/signs/Signs 8.png')} imagename="family wooden hanging sign"/>
              <CreationBox image={require('../../images/signs/Signs 9.png')} imagename="ship steering wheel wooden sign"/>
              <CreationBox image={require('../../images/signs/Signs 10.JPG')} imagename="colored snake wooden sign"/>
              <CreationBox image={require('../../images/signs/Signs 13.png')} imagename="family reunion wooden sign"/>
            </div>

            <h3 className='creations-text'><i>Miscellaneous</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/other/Other 1.png')} imagename="Texas wooden mirror"/>
              <CreationBox image={require('../../images/other/Other 6.jpg')} imagename="Wine glass and bottle holder"/>
            </div>

            <h2 className='creations-text'>Lasered Products</h2>
            <h3 className='creations-text'><i>Signs</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/signs/Signs 1.png')} imagename="engraved bulldogs mascot wooden sign"/>
              <CreationBox image={require('../../images/signs/Signs 2.jpg')} imagename="engraved circular football sign"/>
              <CreationBox image={require('../../images/signs/Signs 4.png')} imagename="engraved Aztec wall hanging"/>
              <CreationBox image={require('../../images/signs/Signs 11.jpg')} imagename="engraved circular compass sign"/>
              <CreationBox image={require('../../images/signs/Signs 12.jpg')} imagename="engraved circular wildcat sports sign"/>
            </div>

            <h3 className='creations-text'><i>Cups</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/cups/Cups 1.png')} imagename="engraved police tumbler cup"/>
              <CreationBox image={require('../../images/cups/Cups 2.png')} imagename="engraved nurse tumbler cup"/>
              <CreationBox image={require('../../images/cups/Cups 6.png')} imagename="engraved American helmet tumbler cup"/>
            </div>

            <h3 className='creations-text'><i>Flasks</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/other/Other 2.png')} imagename="engraved name flask"/>
              <CreationBox image={require('../../images/other/Other 3.png')} imagename="engraved quote flask"/>
            </div>

            <h3 className='creations-text'><i>Jewelry Boxes</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/jewelry/Jewelry 1.png')} imagename="engraved tree wooden jewelry box"/>
              <CreationBox image={require('../../images/jewelry/Jewelry 2.png')} imagename="engraved cross wooden jewelry box"/>
              <CreationBox image={require('../../images/jewelry/Jewelry 3.png')} imagename="engraved grapes wooden jewelry box"/>
            </div>

            <h3 className='creations-text'><i>Miscellaneous</i></h3>
            <div className='creation-box-container'>
              <CreationBox image={require('../../images/other/Other 4.jpg')} imagename="engraved mason jar box"/>
              <CreationBox image={require('../../images/other/Other 5.jpg')} imagename="3D wolf animal cutout puzzle"/>
            </div>
        </div>
    </div>
  )
}

export default Creations