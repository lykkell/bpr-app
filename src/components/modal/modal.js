import React from 'react';
import './modal.css';

const Modal = ({active, setActive, children}) => {

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className='modal__close' onClick={() => setActive(false)}>×</div>
                
                {children}
            </div>
        </div>
    );
};
  
export default Modal