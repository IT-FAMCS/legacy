import { Button } from "@mui/material";

export const MenuCard = ({
  header,
  text,
}: {
  header: string;
  text: string;
}) => {
  return (
    <Button
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
