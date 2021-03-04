// ModalLogin window
import React from 'react';
import './Modal-login.css';

const ModalLogin = () => {
    return (
        <div className="Modal-login d-flex flex-column justify-content-aroud align-items-between ">
            Login to you account
            <div className="Modal-close">
                text
            </div>
            <div className="Login-box d-flex flex-column justify-content-aroud align-items-between">
                <input className="Login-input" 
                type="text"
                placeholder="Enter your e-mail or phone number"
                ></input>
                <input className="Login-input" 
                type="password"
                placeholder="Enter your password"
                ></input>
            </div>
            <div className="Registrate">
            text
            </div>

        </div>
    );
}

export default ModalLogin;