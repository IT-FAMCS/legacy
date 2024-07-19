import presetReact from "@bbob/preset-react";
import { EventInfo } from "../../interfaces/event";
import BBCode from "@bbob/react";

export function EventInfoComponent({ eventInfo }: { eventInfo: EventInfo }) {
  const plugins = [presetReact()];

  return (
    <>
      <h3>Описание</h3>
      <p>
        <BBCode plugins={plugins}>{eventInfo.description}</BBCode>
      </p>
      <h3>Структура</h3>
      <p>
        <BBCode plugins={plugins}>{eventInfo.structure}</BBCode>
      </p>
      <h3>Работа</h3>
      <p>
        <BBCode plugins={plugins}>{eventInfo.work}</BBCode>
      </p>
      <h3>FAQ</h3>
      <p>
        <BBCode plugins={plugins}>{eventInfo.FAQ}</BBCode>
      </p>
    </>
  );
}
