import React from "react";
import './JobCategories.css';
import './delete.css';
import Modal from "../components/Modal";
import { useState } from "react";


function Delete() {

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="top-menu">
        <div className="top-left-menu">Delete Account</div>
        <div className="top-right-menu">
          <div className="right-menu">
            <i className="bi bi-house-door"></i> / Delete Account
          </div>
        </div>
      </div>

      <div className="table-container">
            <div className="table-users">
                
                <div className="table-wrapper">
                    <div className="text"> Delete Company Account</div>
              
               <div>
               <button className="btn" onClick={() => setOpenModal(true)}>Delete Account</button>
               {openModal && <Modal closeModal={setOpenModal} />}
               
               </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Delete;
