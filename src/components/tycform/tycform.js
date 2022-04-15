import React from "react";
import {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import Modal from '../modal';

  const useValidation = (value, validations) => {
  
  const [isEmpty, setEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [emailError, setEmailError] = useState (true)
  // const [inputValid, setInputValid] = useState (false)

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

// const [modalRegistrate, setModalRegistrate] = useState(false)
// const [modalForgetPassword, setModalForgetPassword] = useState(false)
// const [accountCard, setAccountCard] = useState(false)


  

const Field = () => {

  // const FieldData = {
  //   name: 'name',
  //   type: 'type',
  //   id: 'id',
  //   minLength: 'minLegth',
  //   maxLength: 'maxLength',
  //   regEx: 'regEx',
  //   errorMessage: 'errorMessage'
  // };

  const { t } = useTranslation();
  // const [modalLogin, setModalLogin] = useState(false)
  
  const [modalRegistrate, setModalRegistrate] = useState(false)
  const [modalForgetPassword, setModalForgetPassword] = useState(false)
  const email = useImput('', {isEmpty: true, minLength: 7, maxLenght: 40, isEmail: true })
  const password = useImput('', {isEmpty: true, minLength: 6, maxLenght: 16})

    return (
      <div>
        <h2  className="modal__header">{t("Login")}</h2>
            <hr></hr>
            <form>
              <div>
                <h3>{t("YourAccount")}</h3>
                {(email.isDirty && email.isEmpty) && <div style={{color:'yellow'}}>
                {t("isEmpty")}</div>}
                {(email.isDirty && email.minLengthError) && <div style={{color:'yellow'}}>
                  {t("minLengthError")}</div>}
                {(email.isDirty && email.maxLengthError) && <div style={{color:'yellow'}}>
                  {t("maxLengthError")}</div>}
                {(email.isDirty && email.emailError) && <div style={{color:'yellow'}}>
                  {t("emailError")}</div>}
                <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)}value={email.value} className="modal__account" type="text" name="account" placeholder="A-Z.a-z@x.xx"
                ></input>
                <h3>{t("Password")}</h3>
                {(password.isDirty && password.isEmpty) && <div style={{color:'yellow'}}>
                  {t("isEmpty")}</div>}
                {(password.isDirty && password.minLengthError) && <div style={{color:'yellow'}}>
                  {t("minLengthError")}</div>}
                {(password.isDirty && password.maxLengthError) && <div style={{color:'yellow'}}>
                  {t("maxLengthError")}</div>}
                <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)}value={password.value} className="modal__account" type="password" name="password" placeholder="0123456789, A-Z, a-z"
                ></input>
              </div>  
              <div className='modal__footer'>
                <div className='modal__button'>
                  <button type="submit" className="btn btn-primary" 
                  disabled={password.isEmpty || password.maxLengthError || password.minLengthError || email.isEmpty || email.emailError} >
                    {t("Submit")}
                  </button>
                </div>
                <div className='modal__button__short'>
                  <button className="modal__registrate btn btn-link"
                    onClick={() => setModalRegistrate(true) }>
                    {t("Registrate")}
                  </button>
                  <button className="modal__forget__password btn btn-link"
                    onClick={() => setModalForgetPassword(true)}>
                    {t("Forget")}
                  </button>
                </div>
              </div>
            </form>
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

export default Field;