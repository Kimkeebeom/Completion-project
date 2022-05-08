import * as A from "./questionAnswerWrite.styles";

export default function QuestionsAnswerWriteUI(props) {
  return (
    <>
      {!props.isClick && (
        <A.AnswerButton
          // id={props.el._id}
          onClick={props.onClickCommentAnswerButton}
        >
          답글
        </A.AnswerButton>
      )}
      {props.isClick && (
        <A.Wrap>
          <hr></hr>
          <A.InputWrap
            placeholder="내용을 입력해주세요"
            onChange={props.onChangeContents}
            value={props.questionAnswers}
          ></A.InputWrap>
          <A.ButtonWrap>
            <A.SubmitButton
              // id={props.el._id}
              onClick={props.onClickRegisCommentAnswer}
            >
              작성하기
            </A.SubmitButton>
            <A.CancelButton onClick={props.onClickCancelButton}>
              취소하기
            </A.CancelButton>
          </A.ButtonWrap>
        </A.Wrap>
      )}
    </>
  );
}
