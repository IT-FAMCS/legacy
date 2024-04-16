import * as React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import parser from "bbcode-to-react";
import "./App.css";
import { departmentsInfo } from "./constants/departments-info";
import { MenuCard } from "./components/MenuCard";
import HomePage from "./Pages/HomePage";
import FandraizPage from "./Pages/FandraizPage";
import RabochkaPage from "./Pages/RabochkaPage";
import NauchkaPage from "./Pages/NauchkaPage";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {darkTheme, lightTheme} from "./constants/Theme"


function App() {
  const [themeMode, setThemeMode] = React.useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  // const toggleTheme = () => {
  //   const newTheme = themeMode === 'light' ? 'dark' : 'light';
  //   setThemeMode(newTheme);
  //   localStorage.setItem('theme', newTheme); 
  // };

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className="App">
      <Header></Header>
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
          {departmentsInfo.map((department) => {
            return (
              <MenuCard header={department.header} text={department.text} />
            );
          })}
        </div>
      </body>

      <Footer></Footer>
    </div>
    </ThemeProvider>
  );
}


  export default App; 