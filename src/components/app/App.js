// Dashboard
import React, { useState } from "react";
// import {useEffect} from 'react';
import logo from './logo.jpg';
import accountpicture from './accountpicture.jpg';
import { useTranslation } from "react-i18next";
import '../translations/i18n';
import i18n from "i18next";
import './App.css';
import Modal from '../modal';
import AccountCard from "../account-card";
import Field from "../tycform/tycform";

const App = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("");
 
  const handleOnclick=(e)=>{
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
  }
 
  const [modalLogin, setModalLogin] = useState(false)
  const [accountCard, setAccountCard] = useState(false)
 
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
              onClick={() => setAccountCard(true)}
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
      {/* Modal windows */}
      <Modal lang={language} active={modalLogin} setActive={setModalLogin}>
        {/* feilds of login form */}
        <Field lang={language}></Field>
      </Modal>
      {/* Account windows */}
      <AccountCard lang={language} active={accountCard} setActive={setAccountCard}>
        <div className="container">
          <h2 className="account__card__header">{t("YourAccount")}</h2>
            <div className="d-flex flex-column justify-content-center">
              <div className="account__card__content d-flex flex-row ">
                  <img src={accountpicture} className="accountpicture" alt="addpicture" />
                  <div className="account__card__content d-flex flex-column ">
                    <h3 classNmame="d-flex justify-content-start">{t("FirstName")}:</h3>
                    <h3>{t("SecondName")}:</h3>
                    <h3>{t("Phone")}:</h3>
                    <h3>{t("eMail")}:</h3>
                  </div>
              </div>
              {/* <div className="d-flex account__card__content ">
                <h3>{t("Login")}:</h3>
                <h3>{t("Password")}:</h3>
              </div> */}
              <div className="account__card__content d-flex justify-content-start">
                <h3>{t("Note")}:</h3>
              </div>
              
            </div>
        </div>
      
      
      </AccountCard>
    </div>
  );
}
export default App;