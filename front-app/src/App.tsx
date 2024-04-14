import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import parser from "bbcode-to-react";
import racoon from "./images/Raccoon.png";
import "./App.css";
import HomePage from "./Pages/HomePage";
import FandraizPage from "./Pages/FandraizPage";
import RabochkaPage from "./Pages/RabochkaPage";
import NauchkaPage from "./Pages/NauchkaPage";
import { departmentsInfo } from "./constants/departments-info";
import { MenuCard } from "./components/MenuCard";

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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>

      <body></body>

      <footer className="App-footer">
        <div className="FooterText">ⓒ IT-FAMCS 2024</div>
      </footer>
    </div>
  );
}

export default App;
