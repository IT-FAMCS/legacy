import "../../App.css";
import { DepartmentsWrapper } from "./DepartmentsWrapper";
import { EventsWrapper } from "./EventsWrapper";
import { MainInfoWrapper } from "./MainInfoWrapper";

export default function HomePage() {
  return (
    <div className="HomePage">
      <DepartmentsWrapper />
      <EventsWrapper />
      <MainInfoWrapper />
    </div>
  );
}
