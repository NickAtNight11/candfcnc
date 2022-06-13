import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './AdminPopup.css'

function AdminPopup( { picture, onClick, onChange }) {
    return (
    <div id="admin-popup" className="admin-popup-invisible">
        <div id="admin-popup-top">
            <div id="admin-popup-header">
                <h3 className="admin-popup-text">Image Editor</h3>
                <i id="admin-popup-x" className="bi bi-x admin-icon-1" onClick={onClick}/>
            </div>
            <div id="admin-popup-options">
                <label htmlFor="admin-popup-image-selector" className="admin-popup-text"><i>Selected Image:</i></label>
                <input type="file" id="admin-popup-image-selector" name="admin-popup-image" accept="image/png, image/jpeg" onChange={(e) => {onChange(e.target.files[0], "", "", "", "")}}/>
                <div/>
                <div id="admin-popup-image">{picture}</div>
                <label htmlFor="admin-popup-message" className="admin-popup-text"><i>Description/Alt:</i></label>
                <textarea id="admin-popup-message" name="admin-popup-message" onChange={(e) => {onChange(null, "", "", "", e.target.value)}}/>
            </div>
        </div>
        <div id="admin-popup-buttons">
            <button type="button" id="admin-popup-cancel" className="btn btn-dark admin-popup-button" onClick={onClick}>Cancel</button>
            <button type="button" id="admin-popup-add" className="btn btn-primary admin-popup-button" onClick={onClick}>Add</button>
        </div>
    </div>
  )
}

export default AdminPopup