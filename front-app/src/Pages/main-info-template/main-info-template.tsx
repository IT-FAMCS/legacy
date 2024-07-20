import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import useDepartment from "../../hooks/useDepartment";
import { useLocation } from "react-router-dom";
import BBCode from "@bbob/react";
import presetReact from "@bbob/preset-react";
import { MainInfoForm } from "./main-info-form";
import { MainInfoComponent } from "./main-info-component";

export default function MainInfoTemplate({
  mainInfoName,
}: {
  mainInfoName: string;
}) {
  const locale = useLocation();
  const { getDepartments } = useDepartment();
  const plugins = [presetReact()];

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [mainQuestionInfo, setMainQuestionInfotInfo] = useState({
    id: 0,
    short_title: locale.pathname.split("/")[1],
    title: "",
    info: "",
  });

  useEffect(() => {
    getDepartments(mainInfoName).then((res) => {
      if (!res.detail) {
        setMainQuestionInfotInfo(res);
      }
    });
  }, []);

  return (
    <div className="page-info-wrapper">
      <div>
        <BBCode plugins={plugins}>{mainQuestionInfo.title}</BBCode>
      </div>
      <Button
        onClick={() => {
          setIsFormVisible(!isFormVisible);
        }}
      >
        {isFormVisible ? "Скрыть форму" : "Показать форму"}
      </Button>
      {isFormVisible && <MainInfoForm mainQuestionInfo={mainQuestionInfo} />}
      {!isFormVisible && (
        <MainInfoComponent mainQuestionInfo={mainQuestionInfo} />
      )}
    </div>
  );
}
