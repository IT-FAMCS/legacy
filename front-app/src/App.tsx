import React from "react";
import logo from "./logo.svg";
import parser from 'bbcode-to-react';
import racoon from "./Raccoon.png"
import "./App.css";
import Button from '@mui/material/Button';


function App() {
  return (
      <div className="App">
      <header className="App-header"> 
      <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
       <div className="Project">LEGACY</div>
      </header>

      <body>
        <div className="Buttons">
      <Button variant="contained"  sx={{width: 300, color: 'white', height: 150, margin: 10}}>
         <div className="ButtonText"> 
         <h2>Рабочка</h2>
         <div>Рабочее направление</div>
         </div>
      </Button>
      <Button variant="contained"  sx={{width: 300, color: 'white', height: 150, margin: 10}}>
      <div className="ButtonText"> 
         <h2>Научка</h2>
         <div>Научное направление</div>
         </div>
        </Button>
      <Button variant="contained"  sx={{width: 300, color: 'white', height: 150, margin: 10}}>

      <div className="ButtonText"> 
         <h2>Фандрайз</h2>
         <div>Направление фандрайза</div>
         </div>
      </Button>
      </div>
      




      </body>
        
      <footer className="App-footer">
        <div className="FooterText">
        ⓒ IT-FAMCS 2024
        </div>
      </footer>
    </div>
  );
}

export default App;
