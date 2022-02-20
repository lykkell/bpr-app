import React from 'react';
import './modal.css';
import { useTranslation } from "react-i18next";


const Modal = ({active, setActive, children}) => {
    
    const { t } = useTranslation();

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className='modal__close' onClick={() => setActive(false)}>{t("Close")}</div>
                
                {children}
            </div>
        </div>
    );
};
  
export default Modal