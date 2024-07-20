import { QuestionInfo } from "../../interfaces/question";

export function MainInfoComponent({
  mainQuestionInfo,
}: {
  mainQuestionInfo: QuestionInfo;
}) {
  return <p>{mainQuestionInfo.info}</p>;
}
