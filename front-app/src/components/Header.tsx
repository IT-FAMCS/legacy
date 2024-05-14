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
    <header className="app-header">
      <div className="app-header__block">
        <img src={racoon} alt="Raccoon logo" className="racccon-logo"></img>
        <div className="project-name">LEGACY</div>
      </div>
      <div className="app-header__block">
        <Button
          href={"/"}
          variant="outlined"
          sx={{ color: "white", borderColor: "white", marginX: "10px" }}
        >
          На главную
        </Button>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {themeMode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </div>
    </header>
  );
};
