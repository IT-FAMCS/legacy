import { EventCard } from "../../components/MenuCard";
import { eventsInfo } from "../../constants/events-info";

export function EventsWrapper() {
  return (
    <>
      <div className="SectionName">Гайды по подготовке к мероприятиям</div>
      <div className="SectionName2">
        Здесь вы можете узнать актуальную информацию про мероприятия/подготовку
        к мероприятиям Проектного Направления Студенческого Сoвета ФПМИ
      </div>
      <div className="Buttons">
        {eventsInfo.map((event) => {
          return (
            <EventCard
              key={event.header}
              header={event.header}
              link={event.link}
            />
          );
        })}
      </div>
    </>
  );
}
