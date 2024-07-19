import { DepatmentInfo } from "../../interfaces/department";
import bbobHTML from "@bbob/html";
import presetHTML5 from "@bbob/preset-html5";

export function DepartmentInfoComponent({
  departmentInfo,
}: {
  departmentInfo: DepatmentInfo;
}) {
  return (
    <>
      <h3>Описание</h3>
      <p>{bbobHTML(departmentInfo.description, presetHTML5())}</p>
      <h3>Структура</h3>
      <p>{bbobHTML(departmentInfo.structure, presetHTML5())}</p>
      <h3>Работа</h3>
      <p>{bbobHTML(departmentInfo.work, presetHTML5())}</p>
      <h3>На мероприятиях</h3>
      <p>{bbobHTML(departmentInfo.in_events, presetHTML5())}</p>
      <h3>FAQ</h3>
      <p>{bbobHTML(departmentInfo.FAQ, presetHTML5())}</p>
    </>
  );
}
