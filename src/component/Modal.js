import React from "react";
import "./Modal.css";
import {useState} from 'react'

function Modal({ setOpenModal }) {


    const [name, setName] = useState('');
    
    const Update = (()=>{
        
        setOpenModal.Modal(name);

    
    });

  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>
      <div className="title">
        <h2>Update 
            
            
            Profile</h2>
      </div>
      <div className="body">
        <p>Personal Information Changes</p>
      </div>

      <div>

        <p className="para1">Would you like to change your Name?</p>

      <input className="input1" type="text" placeholder="Change Name" onChange={(event) => setName(event.target.value)}/> <button className="yes" onClick={() => {
            setOpenModal(false);
          }}>Yes</button> <button className="no"  onClick={() => {
            setOpenModal(false);
          }}>No</button>

        </div>

        <div>

<p>Would you like to change your Surame?</p>

<input className="input2" type="text" placeholder="Change Surame" onChange={(event) => setName(event.target.value)}/> <button className="yes" onClick={() => {
    setOpenModal(false);
  }}>Yes</button> <button className="no"  onClick={() => {
    setOpenModal(false);
  }}>No</button>

</div>

      <div className="footer">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          id="cancelBtn"
        >
          Cancel
        </button>
        <button  onClick={() => {
            setOpenModal(false);
          }}
          id="continueBtn">Save</button> 
      </div>
    </div>
  </div>
  );
}

export default Modal;