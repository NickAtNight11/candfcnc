import React from 'react'
import './AdminTableEntry.css'

function AdminTableEntry( {image, imagedesc, onClick} ) {
  return (
    <div id="admin-table-entry">
        <h5 id="table-item-left" className='table-entry-item'>{image}</h5>
        <h5 className='table-entry-item'>{imagedesc}</h5>
        <div id="table-item-right" className='table-entry-item'>
            <i id="table-item-edit" className="bi bi-pencil-fill admin-icon-2" onClick={(e) => onClick(e, image, imagedesc)}/>
            <i id="table-item-delete" className="bi bi-trash-fill admin-icon-2" onClick={(e) => onClick(e, image, imagedesc)}/>
        </div>
    </div>
  )
}

export default AdminTableEntry