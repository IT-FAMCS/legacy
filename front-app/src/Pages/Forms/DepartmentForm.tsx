import { useState } from "react";
import { DepatmentInfo } from "../../interfaces/department";
import useDepartment from "../../hooks/useDepartment";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";

export function DepartmentForm({}) {
  const [info, setInfo] = useState<DepatmentInfo>({
    id: 0,
    links: [],
    short_title: "",
    title: "",
    description: "",
    structure: "",
    work: "",
    in_events: "",
    FAQ: "",
  });

  const [newInfo, setNewInfo] = useState<DepatmentInfo>({
    id: 0,
    links: [],
    short_title: "",
    title: "",
    description: "",
    structure: "",
    work: "",
    in_events: "",
    FAQ: "",
  });

  const { changeDepartment } = useDepartment();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setInfo({ ...newInfo });
          changeDepartment({ data: newInfo });
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
        {/* <input type="text" name="title" /> */}
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
        />
        <TextField
          label="Work"
          multiline
          rows={4}
          defaultValue={info.work}
          name="work"
        />
        <TextField
          label="In events"
          multiline
          rows={4}
          defaultValue={info.in_events}
          name="in_events"
        />
        <TextField
          label="FAQ"
          multiline
          rows={4}
          defaultValue={info.FAQ}
          name="FAQ"
        />
        <TextField label="Links" name="links" />
      </Box>
    </>
  );
}
