// Dashboard
// import React from 'react';
import React, { useState } from "react";
import logo from './logo.jpg';
import './App.css';
import Modal from '../modal';

const App = () => {

  const [modalLogin, setModalLogin] = useState(false)
  const [modalRegistrate, setModalRegistrate] = useState(false)
  const [modalForgetPassword, setModalForgetPassword] = useState(false)

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
        <form>
          <div> 
            <h3>Your account:</h3>
            <input 
            className="modal__account"
            type="login"
            name="account"
            placeholder="Enter your e-mail or phone number +380 (XX) XXXXXXX"
            ></input>
            <h3>Your password:</h3>
            <input 
            className="modal__account"
            type="password"
            name="password"
            placeholder="Enter your password"
            ></input>
          </div>  
          <div className='modal__footer'>
            <div className='modal__button'>
              {/* <button type="button" className="btn btn-warning">Clear</button> */}
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            <div className='modal__button__short'>
              <button 
              className="modal__registrate btn btn-link"
              onClick={() => setModalRegistrate(true) & setModalLogin(false) }
              >Registrate</button>
              <button 
              className="modal__forget__password btn btn-link"
              onClick={() => setModalForgetPassword(true) & setModalLogin(false) }
              >Forget my password</button>
            </div>
          </div>
        </form>
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