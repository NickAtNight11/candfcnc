import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './AdminPopup.css'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
//import axios from 'axios';

function AdminPopup( { picture, onClick }) {

    const collectionRef = collection(db, "cncplaques");

    let fileChange = ((e) => {
        console.log(e.target.files[0]);
    });

    useEffect(() => {
        const getPics = async () => {
            const data = await getDocs(collectionRef);
            console.log(data.docs);
        }
        getPics();
    }, [collectionRef]);

    return (
    <div id="admin-popup" className="admin-popup-invisible">
        <div id="admin-popup-top">
            <div id="admin-popup-header">
                <h3 className="admin-popup-text">Image Editor</h3>
                <i className="bi bi-x admin-icon-1" onClick={onClick}/>
            </div>
            <div id="admin-popup-options">
                <label htmlFor="admin-popup-image-selector" className="admin-popup-text"><i>Selected Image:</i></label>
                <input type="file" id="admin-popup-image-selector" name="admin-popup-image" accept="image/png, image/jpeg" onChange={fileChange}/>
                <div/>
                <div id="admin-popup-image">{picture}</div>
                <label htmlFor="admin-popup-message" className="admin-popup-text"><i>Description/Alt:</i></label>
                <textarea id="admin-popup-message" name="admin-popup-message"/>
            </div>
        </div>
        <div className="admin-buttons">
            <button type="button" className="btn btn-dark admin-popup-button" onClick={onClick}>Cancel</button>
            <button type="button" className="btn btn-primary admin-popup-button" onClick={onClick}>Add</button>
        </div>
    </div>
  )
}

export default AdminPopup