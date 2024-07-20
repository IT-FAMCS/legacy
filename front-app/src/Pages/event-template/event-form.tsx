import { useState } from "react";
import { EventInfo } from "../../interfaces/event";
import useEvents from "../../hooks/useEvents";
import { Button, Input } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";

export function EventForm({ eventInfo }: { eventInfo: EventInfo }) {
  const [info, setInfo] = useState<EventInfo>(eventInfo);
  const [newInfo, setNewInfo] = useState<EventInfo>(eventInfo);

  const { changeEvent } = useEvents();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setInfo({ ...newInfo });
          changeEvent({ data: newInfo })
            .then(() => {
              window.location.reload();
            })
            .catch((e) => {
              //выводить что что-то не так
            });
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
          marginLeft: 10,
          marginRight: 10,
          marginTop: 5,
          marginBottom: 5,
          borderRadius: 2,
        }}
      >
        <Input
          placeholder="Заголовок"
          defaultValue={info.title}
          name="title"
          onChange={(e) => {
            setNewInfo({ ...newInfo, title: e.target.value });
          }}
        />
        <TextField
          label="Описание"
          defaultValue={info.description}
          name="description"
          onChange={(e) => {
            setNewInfo({ ...newInfo, description: e.target.value });
          }}
        />
        <TextField
          label="Структура"
          multiline
          rows={4}
          defaultValue={info.structure}
          name="structure"
          onChange={(e) => {
            setNewInfo({ ...newInfo, structure: e.target.value });
          }}
        />
        <TextField
          label="Работа"
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
        <TextField label="Полезные ссылки" name="links" />
      </Box>
    </>
  );
}
