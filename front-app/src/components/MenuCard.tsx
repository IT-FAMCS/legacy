import { Button } from "@mui/material";
import { departmentsInfo } from "../constants/departments-info";
import { eventsInfo } from "../constants/events-info";

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
        margin: 5,
      }}
    >
      <div className="ButtonText">
        <h2>{header}</h2>
        <div>{text}</div>
      </div>
    </Button>
  );
};

export const EventCard = ({
  header,
  link,
}: {
  header: string;
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
        margin: 5,
      }}
    >
      <div className="ButtonText">
        <h2>{header}</h2>
      </div>
    </Button>
  );
};
