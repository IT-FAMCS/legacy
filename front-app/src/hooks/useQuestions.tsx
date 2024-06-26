import { fetchGet } from "../api/FetchGet";
import { fetchPost } from "../api/FetchPost";
import { CREATE_QUESTION, GET_QUESTIONS } from "../сonstants/questions-url";
import { QuestionInfo } from "../interfaces/question";

export default function useQuestions() {
  async function changeQuestions({ data }: { data: QuestionInfo }) {
    return await fetchPost(CREATE_QUESTION, data);
  }

  async function getQuestions(event = "") {
    return (await fetchGet(GET_QUESTIONS + event)).json();
  }

  return { changeQuestions, getQuestions };
}
