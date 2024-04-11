import React from "react";
import logo from "./logo.svg";
import parser from "bbcode-to-react";
import racoon from "./images/Raccoon.png";
import "./App.css";
import Button from "@mui/material/Button";
import { departmentsInfo } from "./constants/departments-info";
import { MenuCard } from "./components/MenuCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
        <div className="Project">LEGACY</div>
      </header>

      <body>
        <div className="Buttons">
          {departmentsInfo.map((department) => {
            return (
              <MenuCard header={department.header} text={department.text} />
            );
          })}
        </div>
      </body>

      <footer className="App-footer">
        <div className="FooterText">ⓒ IT-FAMCS 2024</div>
      </footer>
    </div>
  );
}

export default App;
