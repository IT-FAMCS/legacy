import React from "react";
import racoon from "../images/Raccoon.png";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Button } from "@mui/material";

interface HeaderProps {
  themeMode: string;
  toggleTheme: () => void;
}

export const HeaderComponent = ({ toggleTheme, themeMode }: HeaderProps) => {
  return (
    <header className="App-header">
      <div className="App-header__block">
        <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
        <div className="Project">LEGACY</div>
      </div>
      <div className="App-header__block">
       <Button
        href={"/"}
        variant="contained"
          sx={{
          width: 150,
          color: "white",
          height: 40,
          margin: 5,
        }}
      >
        <div className="ButtonText">
          <h2>Home</h2>
        </div>
      </Button>
      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
        {themeMode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
      </div>
      
      
    </header>
  );
};
