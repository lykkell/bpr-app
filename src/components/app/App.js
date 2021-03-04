// Dashboard
import React from 'react';
import logo from './logo.jpg';
import './App.css';
import ModalLogin from '../modal-login';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div 
          className="Dashboard-main d-flex flex-column justify-content-center" alt="Main dashboard">
          <div className="Dashboard-main-btn d-flex justify-content-around">
          
            <button 
              type="button" 
              class="btn btn-primary btn-lg" 
              id="Dashboard-Likar"
              >Likar</button>
            <button 
              type="button" 
              class="btn btn-primary btn-lg" 
              id="Dashboard-Training-School"
              >Training school</button>
          </div>
          <div className="d-flex justify-content-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="Dashboard-main-btn d-flex justify-content-around">
            <button 
              type="button"
              className="Certifying-commission-Dash-board btn btn-primary btn-lg "
              id="Dashboard-Certifying-commission"
              >Certifying-commission</button>
            <button 
              type="button"
              className="Seminars-Dash-board btn btn-primary btn-lg"
              id="Dashboard-Seminars"
              >Seminars</button>
          </div>
        </div>
        <div className="New-feed" alt="News feed">News feed</div>
        <div className="Adv" alt="ad block">advertisement</div>
        <ModalLogin/>
      </div>
    </div>
  );
}
export default App;
