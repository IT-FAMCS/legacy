import { departmentsInfo } from "../constants/departments-info";
import { MenuCard } from "../components/MenuCard";
import "../App.css";
import { eventsInfo } from "../constants/events-info";
import { EventCard } from "../components/MenuCard";
import { mainInfo } from "../constants/main-info";
import { MainInfoCard } from "../components/MenuCard";

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="SectionName">Гайды по отделам</div>
      <div className="SectionName2">
        Здесь вы можете узнать актуальную информацию про отделы Проектного
        Направления Студенческого Сoвета ФПМИ
      </div>
      <div className="Buttons">
        {departmentsInfo.map((department) => {
          return (
            <MenuCard
              header={department.header}
              text={department.text}
              link={department.link}
            />
          );
        })}
      </div>

      <div className="SectionName">Гайды по подготовке к мероприятиям</div>
      <div className="SectionName2">
        Здесь вы можете узнать актуальную информацию про мероприятия/подготовку
        к мероприятиям Проектного Направления Студенческого Сoвета ФПМИ
      </div>
      <div className="Buttons">
        {eventsInfo.map((department) => {
          return (
            <EventCard header={department.header} link={department.link} />
          );
        })}
      </div>

      <div className="SectionName">Общая информация</div>

      <div className="Buttons">
        {mainInfo.map((department) => {
          return (
            <MainInfoCard header={department.header} link={department.link} />
          );
        })}
      </div>
    </div>
  );
}
