import React from 'react'
import './modal.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Modal({closeModal}) {

  const notify = () => toast.error("This action cannot be completed!", {
    position: "bottom-right"});



  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Are you sure?</h1>
        </div>
        <div className="body">
          <p> Do you want to delete company account?</p>
        </div>

        <div className="footer">
          <button onClick={() => closeModal(false)} id="cancelbtn">Cancel</button>
          <button className="btn" id="deletebtn" onClick={notify}>Delete</button>
        </div>
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "pink" }} />
    </div>
    
    
   

  )
}

export default Modal