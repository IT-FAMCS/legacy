import { departmentsInfo } from "../../constants/departments-info";
import { MenuCard } from "../../components/MenuCard";

export function DepartmentsWrapper() {
  return (
    <>
      <div className="SectionName">Гайды по отделам</div>
      <div className="SectionName2">
        Здесь вы можете узнать актуальную информацию про отделы Проектного
        Направления Студенческого Сoвета ФПМИ
      </div>
      <div className="Buttons">
        {departmentsInfo.map((department) => {
          return (
            <MenuCard
              key={department.header}
              header={department.header}
              text={department.text}
              link={department.link}
            />
          );
        })}
      </div>
    </>
  );
}
