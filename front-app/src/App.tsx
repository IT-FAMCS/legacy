import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import home_component from "./Pages/HomePage";
import fandraiz_component from "./Pages/FandraizPage";
import rabochka_component from "./Pages/RabochkaPage";
import nauchka_component from "./Pages/NauchkaPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
    </div>
  );
}

export default App;
