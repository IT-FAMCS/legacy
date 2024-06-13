import { useState } from "react";
import { EventInfo } from "../../interfaces/event";
import useEvents from "../../hooks/useEvents";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";

export function EventForm({}) {
  const [info, setInfo] = useState<EventInfo>({
    id: 0,
    links: [],
    short_title: "",
    title: "",
    description: "",
    structure: "",
    work: "",
    FAQ: "",
  });

  const [newInfo, setNewInfo] = useState<EventInfo>({
    id: 0,
    links: [],
    short_title: "",
    title: "",
    description: "",
    structure: "",
    work: "",
    FAQ: "",
  });

  const { changeEvent } = useEvents();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setInfo({ ...newInfo });
          changeEvent({ data: newInfo });
        }}
      >
        Сохранить
      </Button>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginLeft: 50,
          marginRight: 50,
          marginTop: 5,
          marginBottom: 5,
          borderRadius: 2,
        }}
      >
        <TextField
          label="Title"
          defaultValue={info.description}
          name="description"
          onChange={(e) => {
            setNewInfo({ ...newInfo, description: e.target.value });
          }}
        />
        <TextField
          label="Structure"
          multiline
          rows={4}
          defaultValue={info.structure}
          name="structure"
          onChange={(e) => {
            setNewInfo({ ...newInfo, structure: e.target.value });
          }}
        />
        <TextField
          label="Work"
          multiline
          rows={4}
          defaultValue={info.work}
          name="work"
          onChange={(e) => {
            setNewInfo({ ...newInfo, work: e.target.value });
          }}
        />
        <TextField
          label="FAQ"
          multiline
          rows={4}
          defaultValue={info.FAQ}
          name="FAQ"
          onChange={(e) => {
            setNewInfo({ ...newInfo, FAQ: e.target.value });
          }}
        />
        <TextField label="Links" name="links" />
      </Box>
    </>
  );
}
