import { FetchGet } from "./FetchGet";

export function GetDepartments() {
  return FetchGet("http://127.0.0.1:8000/api/departments").then((data) => {
    console.log(data);
  });
}
