import { MainInfoCard } from "../../components/MenuCard";
import { mainInfo } from "../../constants/main-info";

export function MainInfoWrapper() {
  return (
    <>
      <div className="SectionName">Общая информация</div>
      <div className="Buttons">
        {mainInfo.map((mainI) => {
          return (
            <MainInfoCard
              key={mainI.header}
              header={mainI.header}
              link={mainI.link}
            />
          );
        })}
      </div>
    </>
  );
}
