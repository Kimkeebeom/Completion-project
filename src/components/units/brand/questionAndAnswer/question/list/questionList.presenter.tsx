// import QuestionAnswerDetail from "../../questionAnswer/detail/questionAnswerDetail";
import QuestionsAnswerWrite from "../../questionAnswer/write/questionAnswerWrite.container";
import QuestionEdit from "../edit/questionEdit.container";
import * as L from "./questionList.styles";
export default function QuestionListUI(props) {
  return (
    <L.Wrap>
      <QuestionEdit key={props.el._id} el={props.el} />
      <div className="QuestionsAnswer">
        <QuestionsAnswerWrite questionEl={props.el} />
      </div>
    </L.Wrap>
  );
}
