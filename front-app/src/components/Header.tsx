import React from 'react'; 
import racoon from "../images/Raccoon.png";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface HeaderProps {
  themeMode: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ themeMode, toggleTheme }) => {

  return (
    <header className="App-header"> 
      <div className="HeaderLeft">
        <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
        <div className="Project">LEGACY</div>
      </div>
      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {themeMode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </header>
  );
}

export default Header;
