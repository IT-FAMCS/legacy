import { Button } from "@mui/material";
import { useState } from "react";
import { DepartmentForm } from "../Forms/DepartmentForm";

export default function DepartmentTemplate({departmentName}: {departmentName: string}) {
    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
      <>
        <h2>{departmentName}</h2>
        <Button onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Скрыть форму" : "Показать форму"}
        </Button>
        {isFormVisible && <DepartmentForm />}
      </>
    );
}