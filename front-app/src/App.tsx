import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import logo from "./logo.svg";
import parser from 'bbcode-to-react';
import racoon from "./images/Raccoon.png"
import "./App.css";
import home_component from "./components/home_component";
import fandraiz_component from "./components/fandraiz_component";
import rabochka_component from "./components/rabochka_component";
import nauchka_component from "./components/nauchka_component";
import Button from '@mui/material/Button';

function App() {
  return (
      <div className="App">
      <header className="App-header"> 
      <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
       <div className="Project">LEGACY</div>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={home_component()} />
        <Route path="/nauchka" element={nauchka_component()} />
        <Route path="/fandraiz" element={fandraiz_component()} />
        <Route path="/rabochka" element={rabochka_component()} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>

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
