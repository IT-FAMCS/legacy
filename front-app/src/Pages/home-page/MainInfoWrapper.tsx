import { MainInfoCard } from "../../components/MenuCard";
import { mainInfo } from "../../Constants/main-info";

export function MainInfoWrapper() {
  return (
    <>
      <div className="section-name">Общая информация</div>
      <div className="buttons">
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
