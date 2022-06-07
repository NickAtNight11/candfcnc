import React, { useState, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AdminTableEntry from './AdminTableEntry';
import AdminCreationBox from './AdminCreationBox';
import './AdminBox.css'

function AdminBox( {title, data, onClick} ) {
    const [tableentries, setTableEntries] = useState(null);
    const [previewpictures, setPreviewPictures] = useState(null);


    let importImages = ((r) => {
        let images = {};
        r.keys().map((item) => {return images[item.replace('./', '')] = r(item); });
        return images;
    });
    
    useEffect(() => {
        let images; 
        switch(title) {
            case "CNC Plaques": images = importImages(require.context('../../images/cnc plaques', false, /\.(png|JPG|jpe?g|svg)$/)); break;
            default: break;
        }
        setPreviewPictures(data.map(((item) => <AdminCreationBox key={item.img_name} image={images[item.img_name]} imagedesc={item.alt}/>)));
        setTableEntries(data.map(((item) => <AdminTableEntry key={item.img_name} image={item.img_name} imagedesc={item.alt} onClick={(e, i, idesc) => onClick(e, images[i], idesc)}/>)));
    }, [title, data, onClick]);

  return (
    <div id="admin-box">
        <div id="admin-top">
            <h3>{title}</h3>
            <i id="admin-add-new" className="bi bi-plus admin-icon-1" onClick={onClick}/>
        </div>
        <div id="admin-table" className="admin-box-container">
            <div id="admin-table-header">
                <h4 id="table-header-left">Image Name</h4>
                <h4>Description/Alt</h4>
                <h4 id="table-header-right">Action</h4>
            </div>
            <div id="admin-table-entries">{tableentries}</div>
        </div>
        <div id="admin-preview" className="admin-box-container">
        <div id="admin-preview-title"><h4>Preview</h4></div>
        <div id="admin-preview-images">{previewpictures}</div>
        </div>
        <div className="admin-buttons">
            <button type="button" id="admin-revert-button" className="btn btn-dark admin-popup-button">Revert</button>
            <button type="button" id="admin-save-button" className="btn btn-success admin-popup-button" onClick={onClick}>Save</button>
        </div>
    </div>
  )
}

export default AdminBox