import React from 'react'
import racoon from "../images/Raccoon.png";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import {darkTheme, lightTheme} from "../constants/Theme"

export default function Header({onThemeChange}){
  const currentTheme = onThemeChange ? onThemeChange() : lightTheme; // Get theme based on parent's logic

  const handleThemeToggle = () => {
    if (onThemeChange) { // Check if the prop is available
      onThemeChange(); // Call the parent's toggleTheme function
    }
  };
    
  return (
    <header className="App-header"> 
      <div className="HeaderLeft">
        <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
        <div className="Project">LEGACY</div>
      </div>
      <IconButton sx={{ ml: 1 }} onClick={handleThemeToggle} color="inherit">
        {currentTheme === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
      </header>
  )
}

