import useDepartment from "../hooks/useDepartment";
import bbcode from "bbcode-to-react";
import { DepatmentInfo } from "../interfaces/department";
import { useEffect, useState } from "react";

export default function RabochkaPage() {
  const [info, setInfo] = useState<DepatmentInfo>();
  const useDep = useDepartment();

  useEffect(() => {
    useDep.getDepartments("123").then((data) => {
      setInfo(data);
    });
  }, []);

  return <div>{bbcode.toReact(`[b]${info?.title}[/b]`)}</div>;
}
