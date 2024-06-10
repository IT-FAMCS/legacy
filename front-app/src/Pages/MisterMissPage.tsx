import React, { useState } from "react";
import { EventForm } from "./Forms/EventForm";
import { Button } from "@mui/material";

export default function MisterMissPage() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <h2>Мистер/Мисс ФПМИ</h2>
      <Button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <EventForm />}
    </>
  );
}
