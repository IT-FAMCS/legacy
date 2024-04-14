import { Button } from "@mui/material";
import { departmentsInfo } from "../constants/departments-info";
export const MenuCard = ({
  header,
  text,
  link,
}: {
  header: string;
  text: string;
  link: string;
}) => {
  return (
    <Button
      href={link}
      variant="contained"
      sx={{
        width: 300,
        color: "white",
        height: 150,
        margin: 10,
      }}
    >
      <div className="ButtonText">
        <h2>{header}</h2>
        <div>{text}</div>
      </div>
    </Button>
  );
};
