import useDepartment from "../hooks/useDepartment";
import bbcode from "bbcode-to-react";
import { DepatmentInfo } from "../interfaces/department";
import { useEffect, useState } from "react";
import { DepartmentForm } from "./Forms/DepartmentForm";
import { Button } from "@mui/material";

export default function RabochkaPage() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <h2>Рабочка</h2>
      <Button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <DepartmentForm />}
    </>
  );

  // const [info, setInfo] = useState<DepatmentInfo>();
  // const useDep = useDepartment();

  // useEffect(() => {
  //   useDep.getDepartments("123").then((data) => {
  //     setInfo(data);
  //   });
  // }, []);

  // return <div>{bbcode.toReact(`[b]${info?.title}[/b]`)}</div>;
}
