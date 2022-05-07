import * as L from "./questionList.styles";
export default function QuestionListUI(props) {
  //   console.log(props.data?.fetchUseditemQuestions);
  return (
    <L.Wrap>
      <L.LeftWrap>
        <L.Writer>{props.el.user.name}</L.Writer>
      </L.LeftWrap>
      <L.RightWrap>
        <L.ContentsButton>
          <L.Contents>{props.el.contents}</L.Contents>
          <L.SideWrap>
            <L.CreatedAt>{props.el.createdAt.slice(0, 10)}</L.CreatedAt>
            <L.ButtonWrap>
              <button onClick={() => alert("수정하기")}>수정</button>
              <button onClick={() => alert("삭제하기")}>삭제</button>
            </L.ButtonWrap>
          </L.SideWrap>
        </L.ContentsButton>
      </L.RightWrap>
    </L.Wrap>
  );
}
