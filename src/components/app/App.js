// Dashboard
// import React from 'react';
import React, { useState } from "react";
import logo from './logo.jpg';
import './App.css';
import Modal from '../modal';

const App = () => {

  const [modalLogin, setModalLogin] = useState(true)
  const [modalRegistrate, setModalRegistrate] = useState(true)
  const [modalForgetPassword, setModalForgetPassword] = useState(true)

  return (
    <div className="App">
      <div className="container">
        <div 
          className="Dashboard-main d-flex flex-column justify-content-center" alt="Main dashboard">
          <div className="Dashboard-main-btn d-flex justify-content-around">
            <button 
              onClick={() => setModalLogin(true)}
              type="button" 
              className="btn btn-primary btn-lg" 
              >Likar</button>
            <button 
              type="button" 
              className="btn btn-primary btn-lg" 
              onClick={() => setModalLogin(true)}
              >Training school</button>
          </div>
          <div className="d-flex justify-content-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="Dashboard-main-btn d-flex justify-content-around">
            <button 
              type="button"
              className="Certifying-commission-Dash-board btn btn-primary btn-lg "
              onClick={() => setModalLogin(true)}
              >Certifying-commission</button>
            <button 
              type="button"
              className="Seminars-Dash-board btn btn-primary btn-lg"
              onClick={() => setModalLogin(true)}
              >Seminars</button>
          </div>
        </div>
        <div className="New-feed" alt="News feed">News feed</div>
        <div className="Adv" alt="ad block">advertisement</div>
      </div>
      <Modal active={modalLogin} setActive={setModalLogin}>
        <h2 className="modal__header">Login to your account</h2>
        <hr></hr>
        <button 
        className="modal__registrate"
        onClick={() => setModalRegistrate(true) & setModalLogin(false) }
         >Registrate</button>
         <button 
        className="modal__forget__password"
        onClick={() => setModalForgetPassword(true) & setModalLogin(false) }
         >Forget my password</button>
      </Modal>
      <Modal active={modalRegistrate} setActive={setModalRegistrate}>
        <h2 className="modal__header">Registrate new account</h2>
        <hr></hr>
        </Modal>
      <Modal active={modalForgetPassword} setActive={setModalForgetPassword}>
        <h2 className="modal__header">Forget my password</h2>
        <hr></hr>
      </Modal>
    </div>
  );
}
export default App;