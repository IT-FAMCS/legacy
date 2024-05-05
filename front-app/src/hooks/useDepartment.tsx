import { fetchGet } from "../api/fetchGet";
import { fetchPost } from "../api/fetchPost";
import { CREATE_DEPARTMENT, GET_DEPARTMENT } from "../constants/department-url";
import { DepatmentInfo } from "../interfaces/department";

export default function useDepartment() {
  async function changeDepartment({ data }: { data: DepatmentInfo }) {
    return await fetchPost(CREATE_DEPARTMENT, data).then((data) => {});
  }

  async function getDepartments(department = "") {
    return await fetchGet(GET_DEPARTMENT + department).then((data) => {
      console.log(data);
    });
  }

  return { changeDepartment, getDepartments };
}
