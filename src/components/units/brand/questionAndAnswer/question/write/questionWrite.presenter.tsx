import * as C from "./questionWrite.styles";

export default function QuestionWriteUI(props) {
  return (
    <C.Wrap>
      <C.InputWrap
        placeholder="내용을 입력해주세요"
        onChange={props.onChangeQuestion}
      ></C.InputWrap>
      <C.ButtonWrap>
        <C.CancelButton>취소하기</C.CancelButton>
        <C.SubmitButton onClick={props.onClickSubmit}>작성하기</C.SubmitButton>
      </C.ButtonWrap>
    </C.Wrap>
  );
}
