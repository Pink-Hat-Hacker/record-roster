import React from 'react';
import { Login } from './components/Login';
import './App.css';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Record Roster <i className="bi bi-vinyl"></i></h1>
      </div>
      {/* <Login></Login> */}
      <Dashboard></Dashboard>
      {/* <footer>
        <i className="bi bi-youtube"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-spotify"></i>
        <i className="bi bi-github"></i>
        <i className="bi bi-vinyl-fill"></i>
      </footer> */}
    </div>
  );
}

export default App;
