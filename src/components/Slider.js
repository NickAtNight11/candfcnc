import React, {useState, useEffect} from 'react'
import './Slider.css'
import { db } from '../firebase-config'
import { collection, orderBy, query, getDocs } from 'firebase/firestore'

function Slider() {
    const [count, setCount] = useState(0);
    const [dots, setDots] = useState(null);
    const [beginSlide, setBeginSlide] = useState(false);
    const [prevcount, setPrevCount] = useState(0);
    const [photos, setPhotos] = useState([]);
    const [currentPhoto, setCurrentPhoto] = useState(null);
    let change = "";
    let reset = "";

    let getCollection = ((c) => {
        const collectionRef = collection(db, c);
        return query(collectionRef, orderBy("img_name"))
    });
    
    useEffect(() => {
        const getPics = async (s) => {
          const data = await getDocs(getCollection(s));
          return data.docs.map((item) => ({...item.data(), id: item.id}));  
        }
        getPics("home page")
            .then((value) => {
                setPhotos(value.map((element, index) => (<img id='slider-image' key={index} src={element.img} alt='CNC Gifts and Laser Engraving Creations'/>)));
            })
    }, []);


    useEffect(() => {
        if(photos.length > 0) {
            setDots(photos.map((element, index) => <div key={index} id={"dot-" + index} className={ index === 0 ? 'slider-dot-closed' : 'slider-dot-open'} />));
            setBeginSlide(true);     
        }
    }, [photos]);
    
    useEffect(() => {
        if(beginSlide) {// eslint-disable-next-line
            change = "dot-"+ count; // eslint-disable-next-line
            reset = "dot-"+ prevcount;
            document.getElementById('slider-image-container').className = 'slider-fade';
            setTimeout(() => {setCurrentPhoto(photos[count])}, 500);
            setTimeout(() => {document.getElementById('slider-image-container').className = 'slider-unfade'}, 500);
            if(document.getElementById(change) != null) {
                document.getElementById(reset).className = 'slider-dot-open';
                document.getElementById(change).className = 'slider-dot-closed';
            }
            setPrevCount(count);
            const timer = setTimeout(() => {
                setCount((count+1) % photos.length);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [count, beginSlide]);
    

    return (
        <div id='slider'>
            <h3 id="slider-text"><i>Custom Engravings and CNC Gifts, Made Personal for You!</i></h3>
            <div id='slider-responsive-container'>
                <div className='arrow-container' onClick={() => {setCount((((count-1) % photos.length) + photos.length) % photos.length);}}>
                    <div className='arrow-point arrow-point-up'></div>
                    <div className='arrow-point arrow-point-down arrow-bottom'></div>
                </div>
                <div id='slider-image-container'>
                    {currentPhoto}
                </div>
                <div className='arrow-container' onClick={() => {setCount((count+1) % photos.length);}}>
                    <div className='arrow-point arrow-point-down'></div>
                    <div className='arrow-point arrow-point-up arrow-bottom'></div>
                </div>
            </div>
            <div id='dot-container'>
                {dots}
            </div>
        </div>
    )
}

export default Slider