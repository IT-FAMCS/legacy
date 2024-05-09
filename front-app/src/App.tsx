import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import FandraizPage from "./pages/FandraizPage";
import RabochkaPage from "./pages/RabochkaPage";
import NauchkaPage from "./pages/NauchkaPage";
import DecoratorkaPage from "./pages/DecoratorkaPage";
import ITPage from "./pages/ITPage";
import KorporativPage from "./pages/KorporativPage";
import KreatorkaPage from "./pages/KreatorkaPage";
import MedyikaPage from "./pages/MedyikaPage";
import PhotoVideoPage from "./pages/PhotoVideo";
import TikTokPage from "./pages/TikTokPage";
import DRfpmiPage from "./pages/DRfpmiPage";
import DRNauchkiPage from "./pages/DRNauchkiPage";
import FPMushkaPage from "./pages/FPMushkaPage";
import KapustnikPage from "./pages/KapustnikPage";
import MisterMissPage from "./pages/MisterMissPage";
import PiarPage from "./pages/PiarPage";
import ScienceConfPage from "./pages/ScienceConfPage";
import TurTropaPage from "./pages/TurTropaPage";
import DlyaPredsedaPage from "./pages/DlyaPredsedaPage";
import SovetyActivistuPage from "./pages/SovetyActivistuPage";
import MenagementPage from "./pages/MenagementPage";
import FAQPage from "./pages/FAQPage";
import HistoryPage from "./pages/HistoryPage";
import KriteriiIsklPage from "./pages/KriteriiIsklPage";
import KriteriiPPage from "./pages/KriteriiPPage";
import LoginPage from "./pages/LoginPage";
import CreatorsPage from "./pages/CreatorsPage";
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
