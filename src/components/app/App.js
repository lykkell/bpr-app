// Dashboard
import React from 'react';
import logo from './logo.jpg';
import './App.css';
import MWindow from '../mwindow';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div 
          className="Dashboard-main d-flex flex-column justify-content-center" alt="Main dashboard">
          <div className="Dashboard-main-btn d-flex justify-content-around">
            <button 
              type="button" 
              className="btn btn-primary btn-lg" 
              // id="Dashboard-Likar"
              data-modal
              >Likar</button>
            <button 
              type="button" 
              className="btn btn-primary btn-lg" 
              // id="Dashboard-Training-School"
              data-modal
              >Training school</button>
          </div>
          <div className="d-flex justify-content-center">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="Dashboard-main-btn d-flex justify-content-around">
            <button 
              type="button"
              className="Certifying-commission-Dash-board btn btn-primary btn-lg "
              // id="Dashboard-Certifying-commission"
              data-modal
              >Certifying-commission</button>
            <button 
              type="button"
              className="Seminars-Dash-board btn btn-primary btn-lg"
              // id="Dashboard-Seminars"
              data-modal
              >Seminars</button>
          </div>
        </div>
        <div className="New-feed" alt="News feed">News feed</div>
        <div className="Adv" alt="ad block">advertisement</div>
        {/* <ModalWindow/> */}
        <MWindow/>
      </div>
    </div>
  );
}
export default App;
