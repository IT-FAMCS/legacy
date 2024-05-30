import React, { useState } from "react";
import { DepartmentForm } from "./Forms/DepartmentForm";
import { Button } from "@mui/material";

export default function KreatorkaPage() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <h2>Креаторка</h2>
      <Button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <DepartmentForm />}
    </>
  );
}
