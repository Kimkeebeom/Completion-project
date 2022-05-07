import QuestionEdit from "../edit/questionEdit.container";
import * as L from "./questionList.styles";
export default function QuestionListUI(props) {
  //   console.log(props.data?.fetchUseditemQuestions);
  return (
    <div>
      <QuestionEdit key={props.el._id} el={props.el} />
    </div>
  );
}
