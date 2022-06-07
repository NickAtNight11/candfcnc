import React, {useState, useEffect } from 'react'
import CreationBox from '../CreationBox'

function Creations({ ImageData }) {
  const [cncplaques, setCncPlaques] = useState(null);
  const [cncsigns, setCncSigns] = useState(null);
  const [cncmisc, setCncMisc] = useState(null);
  const [lasersigns, setLaserSigns] = useState(null);
  const [lasercups, setLaserCups] = useState(null);
  const [laserflasks, setLaserFlasks] = useState(null);
  const [laserjewelry, setLaserJewelry] = useState(null);
  const [lasermisc, setLaserMisc] = useState(null);

  let importImages = ((r) => {
    let images = {};
    r.keys().map((item) => {return images[item.replace('./', '')] = r(item); });
    return images;
  });

  useEffect(() => {
    let images;
    function setImages(data) {
      images = importImages(require.context('../../images/cnc plaques', false, /\.(png|JPG|jpe?g|svg)$/));
      setCncPlaques(data.cnc_plaques.map((item) => <CreationBox key={item.img_name} image={images[item.img_name]} imagedesc={item.alt}/>));
      images = importImages(require.context('../../images/cnc signs', false, /\.(png|JPG|jpe?g|svg)$/));
      setCncSigns(data.cnc_signs.map((item) => <CreationBox key={item.img_name} image={images[item.img_name]} imagedesc={item.alt}/>));
      images = importImages(require.context('../../images/cnc misc', false, /\.(png|JPG|jpe?g|svg)$/));
      setCncMisc(data.cnc_misc.map((item) => <CreationBox key={item.img_name} image={images[item.img_name]} imagedesc={item.alt}/>));
      images = importImages(require.context('../../images/laser signs', false, /\.(png|JPG|jpe?g|svg)$/));
      setLaserSigns(data.laser_signs.map((item) => <CreationBox key={item.img_name} image={images[item.img_name]} imagedesc={item.alt}/>));
      images = importImages(require.context('../../images/cups', false, /\.(png|JPG|jpe?g|svg)$/));
      setLaserCups(data.laser_cups.map((item) => <CreationBox key={item.img_name} image={images[item.img_name]} imagedesc={item.alt}/>));
      images = importImages(require.context('../../images/flasks', false, /\.(png|JPG|jpe?g|svg)$/));
      setLaserFlasks(data.laser_flasks.map((item) => <CreationBox key={item.img_name} image={images[item.img_name]} imagedesc={item.alt}/>));
      images = importImages(require.context('../../images/jewelry', false, /\.(png|JPG|jpe?g|svg)$/));
      setLaserJewelry(data.laser_jewelry.map((item) => <CreationBox key={item.img_name} image={images[item.img_name]} imagedesc={item.alt}/>));
      images = importImages(require.context('../../images/laser misc', false, /\.(png|JPG|jpe?g|svg)$/));
      setLaserMisc(data.laser_misc.map((item) => <CreationBox key={item.img_name} image={images[item.img_name]} imagedesc={item.alt}/>));
    }
    setImages(ImageData);  
  }, [ImageData]);

  return (
    <div>
        <div className='clear-container'>
            <h1>Our Creations</h1>
            <h3><i>Check out some of our work!</i></h3>
        </div>
        <div className='clear-container'>
            <h2 className='creations-text'>CNC Gifts</h2>
            <h3 className='creations-text'><i>Wood Plaques</i></h3>
            <div className='creation-box-container'>{cncplaques}</div>

            <h3 className='creations-text'><i>Signs</i></h3>
            <div className='creation-box-container'>{cncsigns}</div>

            <h3 className='creations-text'><i>Miscellaneous</i></h3>
            <div className='creation-box-container'>{cncmisc}</div>

            <h2 className='creations-text'>Lasered Products</h2>
            <h3 className='creations-text'><i>Signs</i></h3>
            <div className='creation-box-container'>{lasersigns}</div>

            <h3 className='creations-text'><i>Cups</i></h3>
            <div className='creation-box-container'>{lasercups}</div>

            <h3 className='creations-text'><i>Flasks</i></h3>
            <div className='creation-box-container'>{laserflasks}</div>

            <h3 className='creations-text'><i>Jewelry Boxes</i></h3>
            <div className='creation-box-container'>{laserjewelry}</div>

            <h3 className='creations-text'><i>Miscellaneous</i></h3>
            <div className='creation-box-container'>{lasermisc}</div>
        </div>
    </div>
  )
}

export default Creations