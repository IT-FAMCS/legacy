import * as React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import logo from "./logo.svg";
import parser from 'bbcode-to-react';
import racoon from "./images/Raccoon.png"
import "./App.css";
import HomePage from "./Pages/HomePage";
import FandraizPage from "./Pages/FandraizPage";
import RabochkaPage from "./Pages/RabochkaPage";
import NauchkaPage from "./Pages/NauchkaPage";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {darkTheme, lightTheme} from "./Constants/Theme"




function App() {
  const [themeMode, setThemeMode] = React.useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    const newTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className="App">
      <header className="App-header"> 
      <div className="HeaderLeft">
        <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
        <div className="Project">LEGACY</div>
      </div>
      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {themeMode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
        </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage()} />
        <Route path="/nauchka" element={NauchkaPage()} />
        <Route path="/fandraiz" element={FandraizPage()} />
        <Route path="/rabochka" element={RabochkaPage()} />
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
    </ThemeProvider>
  );
}

  export default App;