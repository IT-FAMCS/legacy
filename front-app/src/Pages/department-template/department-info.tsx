import { DepatmentInfo } from "../../interfaces/department";
import BBCode from "@bbob/react";
import presetReact from "@bbob/preset-react";

export function DepartmentInfoComponent({
  departmentInfo,
}: {
  departmentInfo: DepatmentInfo;
}) {
  const plugins = [presetReact()];

  return (
    <>
      <h3>Описание</h3>
      <p>
        <BBCode plugins={plugins}>{departmentInfo.description}</BBCode>
      </p>
      <h3>Структура</h3>
      <p>
        <BBCode plugins={plugins}>{departmentInfo.structure}</BBCode>
      </p>
      <h3>Работа</h3>
      <p>
        <BBCode plugins={plugins}>{departmentInfo.work}</BBCode>
      </p>
      <h3>На мероприятиях</h3>
      <p>
        <BBCode plugins={plugins}>{departmentInfo.in_events}</BBCode>
      </p>
      <h3>FAQ</h3>
      <p>
        <BBCode plugins={plugins}>{departmentInfo.FAQ}</BBCode>
      </p>
    </>
  );
}
