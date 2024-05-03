import { useEffect } from "react";
import { GetDepartments } from "../api/GetDepartments";
import { ChangeDepartment } from "../api/ChangeDepartment";
import { DepartmentLink } from "../interfaces/department";

export default function RabochkaPage() {
  //const data = GetDepartments();
  useEffect(() => {
    // ChangeDepartment({
    //   data: {
    //     links: [{ link: "sdf", title: "fwr" }],
    //     short_title: "helloj",
    //     title: "helloj",
    //     description: "helloj",
    //     structure: "helloj",
    //     work: "helloj",
    //     in_events: "helloj",
    //     FAQ: "helloj",
    //   },
    // });
    GetDepartments();
  }, []);

  return <div>Я есть RabochkaPage</div>;
}
