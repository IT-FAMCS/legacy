import racoon from "../images/Raccoon.png";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const HeaderComponent = ({ onChange, themeMode }: any) => {
  return (
    <header className="App-header">
      <div className="HeaderLeft">
        <img src={racoon} alt="Raccoon logo" className="RaccconLogo"></img>
        <div className="Project">LEGACY</div>
      </div>
      <IconButton sx={{ ml: 1 }} onClick={onChange} color="inherit">
        {themeMode === "dark" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </header>
  );
};
