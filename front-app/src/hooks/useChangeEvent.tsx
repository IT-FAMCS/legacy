import { EventI } from "../interfaces/event";

export function useChangeEvent({
  eventName,
  newInfo,
}: {
  eventName: string;
  newInfo: EventI;
}) {
  return fetch("url").then(); //post
}
