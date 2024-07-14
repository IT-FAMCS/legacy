import { Button } from "@mui/material";
import { useState } from "react";
import { DepartmentForm } from "../forms/DepartmentForm";
import useDepartment from "../../hooks/useDepartment";

export default function DepartmentTemplate({
  departmentName,
}: {
  departmentName: string;
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { getDepartments, changeDepartment } = useDepartment();

  const data = getDepartments(departmentName);

  return (
    <>
      <h2>{departmentName}</h2>
      <Button
        onClick={() => {
          setIsFormVisible(!isFormVisible);
          changeDepartment({
            data: {
              id: 1,
              links: [],
              short_title: "rabochka",
              title: "Rabochka",
              description: "asdf",
              structure: "asdf",
              work: "asdf",
              in_events: "asdf",
              FAQ: "asdf",
            },
          });
        }}
      >
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <DepartmentForm />}
    </>
  );
}
