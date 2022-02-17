import React from "react";
import './likar-account-card.css';
import accountphoto from './accountphoto.jpg';

const LikarAccountCard = ({active, setActive, children}) => {

    return (
       <div className='LikarAccountCard'>
           <div className='container'>
                <div className="d-flex justify-content-center">
                    <img src={accountphoto} className="Account-photo" alt="account-img" />
                </div>
           </div>
       </div>
    );
};
  
export default LikarAccountCard