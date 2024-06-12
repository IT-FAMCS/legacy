import { useState } from "react";
import { EventForm } from "../forms/EventForm";
import { Button } from "@mui/material";

export default function EventTemplate({eventTitle}: {eventTitle:string}) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <h2>{eventTitle}</h2>
      <Button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <EventForm />}
    </>
  );
}
