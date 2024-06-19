import { creatorsInfo } from "../сonstants/creators-info";
import { CreatorCard } from "../components/MenuCard";

export default function CreatorsPage() {
  return (
    <div className="buttons">
      {creatorsInfo.map((creator) => {
        return (
          <CreatorCard
            key={creator.title}
            title={creator.title}
            tg={creator.tg}
            git={creator.git}
          />
        );
      })}
    </div>
  );
}
