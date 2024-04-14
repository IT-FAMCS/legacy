import React from "react";
import { departmentsInfo } from "../constants/departments-info";
import { MenuCard } from "../components/MenuCard";

export default function HomePage() {
  return (
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
  );
}
