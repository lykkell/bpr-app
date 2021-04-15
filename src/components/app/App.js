// Dashboard
// import React from 'react';
import React, { useState } from "react";
import logo from './logo.jpg';
import { useTranslation } from "react-i18next";
import '../translations/i18n';
import i18n from "i18next";
import './App.css';
import Modal from '../modal';

const App = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("");
 
  const handleOnclick=(e)=>{
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
  }
  const [modalLogin, setModalLogin] = useState(false)
  const [modalRegistrate, setModalRegistrate] = useState(false)
  const [modalForgetPassword, setModalForgetPassword] = useState(false)

  return (
    
    <div className="App">
      <div className="container">
      <div>
      <button value='en' onClick={handleOnclick}>
        English
      </button>
      <button value='ua' onClick={handleOnclick}>
        Українська
      </button>
      <button value='ru' onClick={handleOnclick}>
        Русский
      </button>
    </div>
        <div 
          className="Dashboard-main d-flex flex-column justify-content-center" alt="Main dashboard">
          <div className="Dashboard-main-btn d-flex justify-content-around">
            <button 
              onClick={() => setModalLogin(true)}
              type="button" 
              className="btn btn-primary btn-lg" 
              >{t("Likar")}</button>
            <button 
              type="button" 
              className="btn btn-primary btn-lg" 
              onClick={() => setModalLogin(true)}
              >{t("TrainingSchools")}</button>
          </div>
          <div className="d-flex justify-content-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="Dashboard-main-btn d-flex justify-content-around">
            <button 
              type="button"
              className="Certifying-commission-Dash-board btn btn-primary btn-lg "
              onClick={() => setModalLogin(true)}
              >{t("CertifyingCommission")}</button>
            <button 
              type="button"
              className="Seminars-Dash-board btn btn-primary btn-lg"
              onClick={() => setModalLogin(true)}
              >{t("Seminars")}</button>
          </div>
        </div>
        <div className="New-feed" alt="News feed">News feed</div>
        <div className="Adv" alt="ad block">advertisement</div>
      </div>
      <Modal lang={language} active={modalLogin} setActive={setModalLogin}>
        <h2 className="modal__header">{t("Login")}</h2>
        <hr></hr>
        <form>
          <div> 
            <h3>{t("YourAccount")}:</h3>
            <input 
            className="modal__account"
            type="login"
            name="account"
            placeholder="Enter your phone (XX) XXXXXXX or e-mail"
            ></input>
            <h3>{t("Password")}</h3>
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
              <button type="submit" className="btn btn-primary">{t("Submit")}</button>
            </div>
            <div className='modal__button__short'>
              <button 
              className="modal__registrate btn btn-link"
              onClick={() => setModalRegistrate(true) & setModalLogin(false) }
              >{t("Registrate")}</button>
              <button 
              className="modal__forget__password btn btn-link"
              onClick={() => setModalForgetPassword(true) & setModalLogin(false) }
              >{t("Forget")}</button>
            </div>
          </div>
        </form>
      </Modal>
      <Modal lang={language} active={modalRegistrate} setActive={setModalRegistrate}>
        <h2 className="modal__header">Registrate new account</h2>
        <hr></hr>
        </Modal>
      <Modal lang={language} active={modalForgetPassword} setActive={setModalForgetPassword}>
        <h2 className="modal__header">Forget my password</h2>
        <hr></hr>
      </Modal>
    </div>
  );
}
export default App;