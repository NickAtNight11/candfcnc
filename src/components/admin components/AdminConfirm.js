import React from 'react'
import './AdminConfirm.css'

function AdminConfirm({ onClick }) {

    return (
        <div id="admin-confirm" className="admin-confirm-invisible">
            <h4>Are you sure you want to save?</h4>
            <div className="admin-buttons">
                <button type="button" className="btn btn-danger admin-popup-button" onClick={onClick}>No</button>
                <button type="button" className="btn btn-success admin-popup-button" onClick={onClick}>Yes</button>
            </div>
        </div>
  )
}

export default AdminConfirm