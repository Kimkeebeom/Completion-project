import QuestionEdit from "../edit/questionEdit.container";
export default function QuestionListUI(props) {
  return (
    <div>
      <QuestionEdit key={props.el._id} el={props.el} />
    </div>
  );
}
