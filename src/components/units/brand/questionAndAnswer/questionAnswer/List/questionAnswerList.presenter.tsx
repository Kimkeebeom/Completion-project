import * as L from "./questionAnswerList.styles";

export default function QuestionAnswerListUI(props) {
  return (
    <L.Wrap>
      {props.data?.fetchUseditemQuestionAnswers?.map((el) => (
        <div key={el._id}>
          <div>↳{el.contents}</div>
          <button id={el._id} onClick={props.onClickDelete}>
            삭제하기
          </button>
        </div>
      ))}
    </L.Wrap>
  );
}
