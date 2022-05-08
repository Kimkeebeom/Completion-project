import QuestionEdit from "../../question/edit/questionEdit.container";
import QuestionsAnswerWrite from "../../questionAnswer/write/questionAnswerWrite.container";
import * as L from "../write/questionAnswerWrite.styles";

export default function QuestionAnswerListUI(props) {
  return (
    <L.Wrap>
      <QuestionEdit key={props.el._id} el={props.el} />
      <div className="QuestionsAnswer">
        <QuestionsAnswerWrite questionEl={props.el} />
      </div>
    </L.Wrap>
  );
}
