import React, { useState, useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AdminTableEntry from './AdminTableEntry';
import AdminCreationBox from './AdminCreationBox';
import './AdminBox.css'

function AdminBox( {title, data, onClick} ) {
    const [tableentries, setTableEntries] = useState(null);
    const [previewpictures, setPreviewPictures] = useState(null);
    
    useEffect(() => {
        setPreviewPictures(data.map(((item) => <AdminCreationBox key={item.id} dbid={item.id} image={item.img} imagedesc={item.alt}/>)));
        setTableEntries(data.map(((item) => <AdminTableEntry key={item.id} dbid={item.id} image={item.img} imagename={item.img_name} imagedesc={item.alt} onClick={(e, iid, i, iname, idesc) => onClick(e, title, iid, i, iname, idesc)}/>)));
    }, [title, data, onClick]);

  return (
    <div id="admin-box">
        <div id="admin-top">
            <h3>{title}</h3>
            <i id="admin-add-new" className="bi bi-plus admin-icon-1" onClick={(e) => onClick(e, title, "", "", "", "")}/>
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
    </div>
  )
}

export default AdminBox