import { fetchGet } from "../api/FetchGet";
import { fetchPost } from "../api/FetchPost";
import { CREATE_DEPARTMENT, GET_DEPARTMENT } from "../сonstants/department-url";
import { DepatmentInfo } from "../interfaces/department";

export default function useDepartment() {
  async function changeDepartment({ data }: { data: DepatmentInfo }) {
    return await fetchPost(CREATE_DEPARTMENT, data, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
  }

  async function getDepartments(department = "") {
    return await fetchGet(GET_DEPARTMENT + department, {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
  }

  return { changeDepartment, getDepartments };
}
