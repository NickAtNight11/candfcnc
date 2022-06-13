import React, {useState, useEffect } from 'react'
import CreationBox from '../CreationBox'

import { db } from '../../firebase-config'
import { collection, orderBy, query, getDocs } from 'firebase/firestore'

function Creations() {
  const [cncplaques, setCncPlaques] = useState(null);
  const [cncsigns, setCncSigns] = useState(null);
  const [cncmisc, setCncMisc] = useState(null);
  const [lasersigns, setLaserSigns] = useState(null);
  const [lasercups, setLaserCups] = useState(null);
  const [laserflasks, setLaserFlasks] = useState(null);
  const [laserjewelry, setLaserJewelry] = useState(null);
  const [lasermisc, setLaserMisc] = useState(null);

  let getCollection = ((c) => {
    const collectionRef = collection(db, c);
    return query(collectionRef, orderBy("img_name"))
  });

  useEffect(() => {
    const getPics = async (s) => {
      const data = await getDocs(getCollection(s));
      return data.docs.map((item) => ({...item.data(), id: item.id}));  
    }
    getPics("cnc plaques").then((value) => {setCncPlaques(value.map((item) => (<CreationBox key={item.img_name} image={item.img} imagedesc={item.alt}/>)));});
    getPics("cnc signs").then((value) => {setCncSigns(value.map((item) => (<CreationBox key={item.img_name} image={item.img} imagedesc={item.alt}/>)));});
    getPics("cnc misc").then((value) => {setCncMisc(value.map((item) => (<CreationBox key={item.img_name} image={item.img} imagedesc={item.alt}/>)));});
    getPics("laser signs").then((value) => {setLaserSigns(value.map((item) => (<CreationBox key={item.img_name} image={item.img} imagedesc={item.alt}/>)));});
    getPics("laser cups").then((value) => {setLaserCups(value.map((item) => (<CreationBox key={item.img_name} image={item.img} imagedesc={item.alt}/>)));});
    getPics("laser flasks").then((value) => {setLaserFlasks(value.map((item) => (<CreationBox key={item.img_name} image={item.img} imagedesc={item.alt}/>)));});
    getPics("laser jewelry boxes").then((value) => {setLaserJewelry(value.map((item) => (<CreationBox key={item.img_name} image={item.img} imagedesc={item.alt}/>)));});
    getPics("laser misc").then((value) => {setLaserMisc(value.map((item) => (<CreationBox key={item.img_name} image={item.img} imagedesc={item.alt}/>)));});
  }, []);

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