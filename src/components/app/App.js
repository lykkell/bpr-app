// Dashboard
import logo from './logo.jpg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="Dash-board-main" alt="Main dashboard">
        <div className="Dash-board-btn-up">
          <btn classsName="Likar-Dash-board">Likar</btn>
          <btn classsName="Training-School-Dash-board">Training-School</btn>
        </div>
        <div className="Dash-board-btn-middle">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Dash-board-btn-down">
          <btn classsName="Certifying-commission-Dash-board">Certifying-commission</btn>
          <btn classsName="Seminars-Dash-board">Seminars</btn>
        </div>
        <div className="News-feed" alt="News feed">
          News feed
        </div>
        <div className="Adv" alt="ad block">
          advertisement
        </div>
      </div>
      
      <header className="App-header">
        
        
      
      </header>
    </div>
  );
}

export default App;
