import React from "react";
import logo from "./logo.svg";
import parser from 'bbcode-to-react';
import racoon from "./Raccoon.png"
import "./App.css";
import Button from '@mui/material/Button';


function App() {
  return (
      <div className="App">
    <Button variant="contained">Contained</Button>
      <header className="App-header"> 
      <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
       <div className="Project">LEGACY</div>
      </header>

      <body>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code></code> 
        </p>
      </body>
       
      <footer className="App-footer">
        <a className="FooterText">
        ⓒ IT-FAMCS 2024
        </a>
      </footer>
    </div>
  );
}

export default App;
