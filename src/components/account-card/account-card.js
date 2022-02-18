import React from "react";
import './account-card.css';

const AccountCard = ({active, setActive, children}) => {

    return (
        <div className={active ? "account__card active" : "account__card"} onClick={() => setActive(false)}>
            <div className={active ? "account__card__content active" : "account__card__content"} onClick={e => e.stopPropagation()}>
                <div className='account__card__close' onClick={() => setActive(false)}>Close</div>
                
                {children}
            </div>
        </div>
    );
};
  
export default AccountCard