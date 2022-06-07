import React, { useState } from 'react'
import AdminBox from '../admin components/AdminBox'
import AdminPopup from '../admin components/AdminPopup'
import AdminConfirm from '../admin components/AdminConfirm'
import AdminCreationBox from '../admin components/AdminCreationBox'


function Admin({ ImageData }) {
  const [popupimage, setPopupImage] = useState(null);
  
  let toggleConfirm = (() => {
    let c = document.getElementById("admin-confirm");
    if(c.className === "admin-confirm-invisible") {
        c.className = "admin-confirm-visible"
    }
  });

  let togglePopup = ((image, imagedesc) => {
    let p = document.getElementById("admin-popup");
    if(p.className === "admin-popup-invisible") {
        p.className = "admin-popup-visible"
        document.getElementById("admin-popup-message").value = imagedesc;
        document.getElementById("admin-popup-image-selector").value = '';
        setPopupImage(image);
    }
  });

  let clickBox = ((e, i, idesc) => {
    switch(e.currentTarget.id) {
      case "table-item-edit": togglePopup(<AdminCreationBox image={i} imagedesc={idesc} className=""/>, idesc); break;
      case "admin-add-new": togglePopup(null, ""); break;
      case "admin-save-button": toggleConfirm(); break;
      default: return;
    }
  });

  let clickPopup = (() => {
    document.getElementById("admin-popup").className = "admin-popup-invisible";
  });

  let clickConfirm = (() => {
    document.getElementById("admin-confirm").className = "admin-confirm-invisible";
  });

  return (
    <div className='clear-container'>
      <AdminPopup picture={popupimage} onClick={clickPopup}/>
      <AdminConfirm onClick={clickConfirm}/>
      <AdminBox title="CNC Plaques" data={ImageData.cnc_plaques} onClick={clickBox}/>
    </div>
  )
}

export default Admin