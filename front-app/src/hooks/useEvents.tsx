import { fetchGet } from "../api/FetchGet";
import { fetchPost } from "../api/FetchPost";
import { CREATE_EVENT, GET_EVENT } from "../constants/events-url";
import { EventInfo } from "../interfaces/event";

export default function useEvent() {
  async function changeEvent({ data }: { data: EventInfo }) {
    return await fetchPost(CREATE_EVENT, data);
  }

  async function getEvents(event = "") {
    return (await fetchGet(GET_EVENT + event)).json();
  }

  return { changeEvent, getEvents };
}
