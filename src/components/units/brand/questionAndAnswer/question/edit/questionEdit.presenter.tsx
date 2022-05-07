import * as L from "./questionEdit.styles";

export default function QuestionEditUI(props: any) {
  return (
    <>
      {!props.isEdit && (
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
                  <button id={props.el._id} onClick={props.onClickDelete}>
                    삭제
                  </button>
                  <button onClick={props.onClickUpdateButton}>수정</button>
                </L.ButtonWrap>
              </L.SideWrap>
            </L.ContentsButton>
          </L.RightWrap>
        </L.Wrap>
      )}
      {props.isEdit && (
        <L.Wrap>
          <L.LeftWrap>
            <L.Writer>{props.el.user.name}</L.Writer>
          </L.LeftWrap>
          <L.RightWrap>
            <L.ContentsButton>
              <input
                type="text"
                onChange={props.onChangeContents}
                defaultValue={props.el?.contents}
              />
              <L.SideWrap>
                <L.CreatedAt>{props.el.createdAt.slice(0, 10)}</L.CreatedAt>
                <L.ButtonWrap>
                  <button id={props.el._id} onClick={props.onClickUpdate}>
                    등록
                  </button>
                </L.ButtonWrap>
              </L.SideWrap>
            </L.ContentsButton>
          </L.RightWrap>
        </L.Wrap>
      )}
    </>
  );
}
