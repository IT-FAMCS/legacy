import React, { useState } from "react";
import { EventForm } from "./Forms/EventForm";
import { Button } from "@mui/material";

export default function TurTropaPage() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <h2>Тур Тропа</h2>
      <Button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <EventForm />}
    </>
  );
}
