import React from 'react';
import './mwindow.css';

const MWindow = () => {
    return (
        <div class="mwindow">
            <div class="mbox">
                <div class="mheader">
                    Login to you account
                </div>
                <div class="mbody">
                    <div class='maccount'>
                        {/* Your account:  */}
                        <input type="text" size='150px' placeholder="Your account: Enter your e-mail or phone number +(XXX) XX XXXXXXX"></input>
                    </div>
                    <div class='maccount'>
                        Your password: 
                        <input type="text" placeholder="Enter your password"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default MWindow;