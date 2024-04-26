import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import FandraizPage from "./Pages/FandraizPage";
import RabochkaPage from "./Pages/RabochkaPage";
import NauchkaPage from "./Pages/NauchkaPage";
import DecoratorkaPage from "./Pages/DecoratorkaPage";
import ITPage from "./Pages/ITPage";
import KorporativPage from "./Pages/KorporativPage";
import KreatorkaPage from "./Pages/KreatorkaPage";
import MedyikaPage from "./Pages/MedyikaPage";
import PhotoVideoPage from "./Pages/PhotoVideo";
import TikTokPage from "./Pages/TikTokPage";
import DRfpmiPage from "./Pages/DRfpmiPage";
import DRNauchkiPage from "./Pages/DRNauchkiPage";
import FPMushkaPage from "./Pages/FPMushkaPage";
import KapustnikPage from "./Pages/KapustnikPage";
import MisterMissPage from "./Pages/MisterMissPage";
import PiarPage from "./Pages/PiarPage";
import ScienceConfPage from "./Pages/ScienceConfPage";
import TurTropaPage from "./Pages/TurTropaPage";
import DlyaPredsedaPage from "./Pages/DlyaPredsedaPage";
import SovetyActivistuPage from "./Pages/SovetyActivistuPage";
import MenagementPage from "./Pages/MenagementPage";
import FAQPage from "./Pages/FAQPage";
import HistoryPage from "./Pages/HistoryPage";
import KriteriiIsklPage from "./Pages/KriteriiIsklPage";
import KriteriiPPage from "./Pages/KriteriiPPage";
import LoginPage from "./Pages/LoginPage";
import CreatorsPage from "./Pages/CreatorsPage";
import { HeaderComponent } from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./constants/themes";

function App() {
  const [themeMode, setThemeMode] = React.useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  });

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div className="App">
        <HeaderComponent themeMode={themeMode} toggleTheme={toggleTheme} />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={HomePage()} />
              <Route path="/nauchka" element={NauchkaPage()} />
              <Route path="/fandraiz" element={FandraizPage()} />
              <Route path="/rabochka" element={RabochkaPage()} />
              <Route path="/decoratorka" element={DecoratorkaPage()} />
              <Route path="/it" element={ITPage()} />
              <Route path="/korporativ" element={KorporativPage()} />
              <Route path="/kreatorka" element={KreatorkaPage()} />
              <Route path="/medyika" element={MedyikaPage()} />
              <Route path="/photovideo" element={PhotoVideoPage()} />
              <Route path="/tiktok" element={TikTokPage()} />

              <Route path="/drfpmi" element={DRfpmiPage()} />
              <Route path="/drnauchki" element={DRNauchkiPage()} />
              <Route path="/fpmushka" element={FPMushkaPage()} />
              <Route path="/kapustnik" element={KapustnikPage()} />
              <Route path="/mistermiss" element={MisterMissPage()} />
              <Route path="/piar" element={PiarPage()} />
              <Route path="/scienceconf" element={ScienceConfPage()} />
              <Route path="/turtropa" element={TurTropaPage()} />

              <Route path="/dlyapredseda" element={DlyaPredsedaPage()} />
              <Route path="/sovetyactivistu" element={SovetyActivistuPage()} />
              <Route path="/menagement" element={MenagementPage()} />
              <Route path="/faq" element={FAQPage()} />
              <Route path="/kriteriip" element={KriteriiPPage()} />
              <Route path="/kriteriiiskl" element={KriteriiIsklPage()} />
              <Route path="/history" element={HistoryPage()} />

              <Route path="/login" element={LoginPage()} />

              <Route path="/creators" element={CreatorsPage()} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </main>

        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
