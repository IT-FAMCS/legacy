import React from "react";
import { useState } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import logo from "./logo.svg";
import parser from "bbcode-to-react";
import racoon from "./images/Raccoon.png";
import "./App.css";
import Button from "@mui/material/Button";
import { departmentsInfo } from "./constants/departments-info";
import { MenuCard } from "./components/MenuCard";
import HomePage from "./Pages/HomePage";
import FandraizPage from "./Pages/FandraizPage";
import RabochkaPage from "./Pages/RabochkaPage";
import NauchkaPage from "./Pages/NauchkaPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
      <div className="App">
      <header className="App-header"> 
      <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
       <div className="Project">LEGACY</div>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={HomePage()} />
        <Route path="/nauchka" element={NauchkaPage()} />
        <Route path="/fandraiz" element={FandraizPage()} />
        <Route path="/rabochka" element={RabochkaPage()} />
        <Route path="/login" element={LoginPage()} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>

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