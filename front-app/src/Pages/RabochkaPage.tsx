import { useEffect } from "react";
import { DepartmentLink } from "../interfaces/department";
import useDepartment from "../hooks/useDepartment";

export default function RabochkaPage() {
  const useDep = useDepartment();
  useDep.getDepartments("123");
  return <div>Я есть RabochkaPage</div>;
}
