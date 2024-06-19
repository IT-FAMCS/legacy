import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesComponent from "./components/RoutesComponent";
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
            <RoutesComponent />
          </BrowserRouter>
        </main>

        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
