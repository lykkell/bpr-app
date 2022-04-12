// Dashboard
import React, { useState } from "react";
import {useEffect} from 'react';
import logo from './logo.jpg';
import accountpicture from './accountpicture.jpg';
import { useTranslation } from "react-i18next";
import '../translations/i18n';
import i18n from "i18next";
import './App.css';
import Modal from '../modal';
import AccountCard from "../account-card";
// import { useEffect } from "react/cjs/react.production.min";

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState (true)
    const [inputValid, setInputValid] = useState (false)

  useEffect( () => {
    for (const validation in validations) {
      switch (validation) {

        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
        break

        case 'maxLenght':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
        break

        case 'isEmpty' :
          value ? setEmpty(false) : setEmpty(true)
        break
        
        case 'isEmail' :
          // eslint-disable-next-line no-useless-escape
          const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          res.test(String(value).toLowerCase()) ? setEmailError (false) : setEmailError (true)
          
        break

        default:
        /* code */
        break

      }
    }
  },[validations, value])
  
  // useEffect( () => {

  //     if (isEmpty || maxLengthError || minLengthError || emailError) {
  //       setInputValid (false)
  //     } else {
  //       setInputValid(true)
  //   }

  // }, [isEmpty, maxLengthError, minLengthError, emailError])
  
  return {
    isEmpty,
    minLengthError, 
    maxLengthError,
    emailError,
    // inputValid
  }
}

const useImput = (initialValue, validations) => {

    const [value, setValue] = useState(initialValue)
    const [isDirty, SetDirty] = useState(false)
    const valid = useValidation(value,validations)
    const onChange = (e) => {
      setValue(e.target.value)
    }

    const onBlur =(e) => {
      SetDirty(true)
    }

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
    }
}

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
  const [accountCard, setAccountCard] = useState(false)
  const email = useImput('', {isEmpty: true, minLength: 7, maxLenght: 40, isEmail: true })
  const password = useImput('', {isEmpty: true, minLength: 6, maxLenght: 16})

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
      {/* Validation account */}
      <Modal lang={language} active={modalLogin} setActive={setModalLogin}>
        <h2 className="modal__header">{t("Login")}</h2>
        <hr></hr>
        <form>
          <div> 
            <h3>{t("YourAccount")}:</h3>
            {(email.isDirty && email.isEmpty) && <div style={{color:'yellow'}}>Поле не повинне бути порожнім</div>}
            {(email.isDirty && email.minLengthError) && <div style={{color:'yellow'}}>Недостатня довжина</div>}
            {(email.isDirty && email.maxLengthError) && <div style={{color:'yellow'}}>Завелика довжина</div>}
            {(email.isDirty && email.emailError) && <div style={{color:'yellow'}}>Email некорректий</div>}
            <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)}value={email.value} className="modal__account" type="text" name="account" placeholder="Enter your phone (XX) XXXXXXX or e-mail"
            ></input>
            <h3>{t("Password")}</h3>
            {(password.isDirty && password.isEmpty) && <div style={{color:'yellow'}}>Поле не повинне бути порожнім</div>}
            {(password.isDirty && password.minLengthError) && <div style={{color:'yellow'}}>Слабкий пароль</div>}
            {(password.isDirty && password.maxLengthError) && <div style={{color:'yellow'}}>long password</div>}
            <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)}value={password.value} className="modal__account" type="password" name="password" placeholder="Enter your password"
            ></input>
          </div>  
          <div className='modal__footer'>
            <div className='modal__button'>
              {/* <button type="button" className="btn btn-warning">Clear</button> */}
              <button type="submit" className="btn btn-primary" 
              disabled={password.isEmpty || password.maxLengthError || password.minLengthError || email.isEmpty || email.emailError} >
                {t("Submit")}
              </button>
            </div>
            <div className='modal__button__short'>
              <button className="modal__registrate btn btn-link"
                onClick={() => setModalRegistrate(true) & setModalLogin(false) }>
                {t("Registrate")}
              </button>
              <button className="modal__forget__password btn btn-link"
                onClick={() => setModalForgetPassword(true) & setModalLogin(false) }>
                {t("Forget")}
              </button>
            </div>
          </div>
        </form>
      </Modal>
      {/* Registration new account */}
      <Modal lang={language} active={modalRegistrate} setActive={setModalRegistrate}>
        <h2 className="modal__header">Registrate new account</h2>
        <hr></hr>
      </Modal>
      {/* Recovery account */}
      <Modal lang={language} active={modalForgetPassword} setActive={setModalForgetPassword}>
        <h2 className="modal__header">Forget my password</h2>
        <hr></hr>
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