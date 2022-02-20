import React from "react";
import { useTranslation } from "react-i18next";
import './account-card.css';

const AccountCard = ({active, setActive, children}) => {

    const { t } = useTranslation();

    return (
        <div className={active ? "account__card active" : "account__card"} onClick={() => setActive(false)}>
            <div className={active ? "account__card__content active" : "account__card__content"} onClick={e => e.stopPropagation()}>
            <div className='modal__close' onClick={() => setActive(false)}>{t("Close")}</div>
                
                {children}
            </div>
        </div>
    );
};
  
export default AccountCard