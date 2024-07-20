import { QuestionInfo } from "../../interfaces/question";

export function MainInfoForm({
  mainQuestionInfo,
}: {
  mainQuestionInfo: QuestionInfo;
}) {
  return (
    <form>
      <input type="text" name="title" />
      <textarea name="FAQ" />
      <textarea name="links" />
    </form>
  );
}
