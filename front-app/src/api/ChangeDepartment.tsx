import { DepatmentInfo } from "../interfaces/department";
import { FetchPost } from "./FetchPost";

export function ChangeDepartment({ data }: { data: DepatmentInfo }) {
  FetchPost("http://127.0.0.1:8000/api/departments/create/", data).then(
    (data) => {
      console.log(data);
    }
  );
}
