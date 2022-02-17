import React from 'react';
import './likar-account-card.css';
import account-logo from './account-logo.jpg';

const LikarAccountCard = ({active, setActive, children}) => {

    return (
       <div className='LikarAccountCard'>
           <div className='container'>
                <div className="d-flex justify-content-center">
                    <img src={account-logo} className="Account-logo" alt="account-logo" />
                </div>
           </div>
       </div>
    );
};
  
export default LikarAccountCard