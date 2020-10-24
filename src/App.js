import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Bootstrap/bootstrap.min.css'

import BackgroundCircle from './Components/Background/BackgroundCircles'
import ForefroundPanel from './Components/Foreground/ForegroundPanel'
import NavDock from './Components/NavDock/NavDock'

function App() {
  return (
    <div className="App">
        <BackgroundCircle/>
        <ForefroundPanel/>
        <NavDock/>
    </div>
  );
}

export default App;
