import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { DepartmentForm } from "../forms/DepartmentForm";
import useDepartment from "../../hooks/useDepartment";
import { useLocation } from "react-router-dom";
import { DepartmentInfoComponent } from "./department-info";
import bbobHTML from "@bbob/html";
import presetHTML5 from "@bbob/preset-html5";

export default function DepartmentTemplate({
  departmentName,
}: {
  departmentName: string;
}) {
  const locale = useLocation();
  const { getDepartments } = useDepartment();

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [departmentInfo, setDepartmentInfo] = useState({
    id: 0,
    links: [],
    short_title: locale.pathname,
    title: "",
    description: "",
    structure: "",
    work: "",
    in_events: "",
    FAQ: "",
  });

  useEffect(() => {
    getDepartments(departmentName).then((res) => {
      setDepartmentInfo(res);
    });
  }, []);

  return (
    <>
      <h2>{bbobHTML(departmentInfo.title, presetHTML5())}</h2>
      <Button
        onClick={() => {
          setIsFormVisible(!isFormVisible);
        }}
      >
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <DepartmentForm departmentInfo={departmentInfo} />}
      {!isFormVisible && (
        <DepartmentInfoComponent departmentInfo={departmentInfo} />
      )}
    </>
  );
}
