import { EventInfo } from "../interfaces/event";

export function useChangeEvent({
  eventName,
  newInfo,
}: {
  eventName: string;
  newInfo: EventInfo;
}) {
  return fetch("url").then(); //post
}
