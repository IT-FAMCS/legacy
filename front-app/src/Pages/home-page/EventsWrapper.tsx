import { EventCard } from "../../components/MenuCard";
import { eventsInfo } from "../../сonstants/events-info";

export function EventsWrapper() {
  return (
    <>
      <div className="section-name">Гайды по подготовке к мероприятиям</div>
      <div className="section-name_second">
        Здесь вы можете узнать актуальную информацию про мероприятия/подготовку
        к мероприятиям Проектного Направления Студенческого Сoвета ФПМИ
      </div>
      <div className="buttons">
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
