import {
  ChangeEventHandler,
  MouseEventHandler,
  ReactChild,
  ReactFragment,
  ReactPortal
} from "react";
import * as S from "./join.styles";

interface JoinValues {
  onClickCancelButton: MouseEventHandler<HTMLButtonElement>;
  onClickCreateButton: MouseEventHandler<HTMLButtonElement>;
  onChangeEmail: ChangeEventHandler<HTMLInputElement>;
  errorEmail: boolean | ReactChild | ReactFragment | ReactPortal;
  onChangeName: ChangeEventHandler<HTMLInputElement>;
  errorName: boolean | ReactChild | ReactFragment | ReactPortal;
  onChangePassword: ChangeEventHandler<HTMLInputElement>;
  errorPassword: boolean | ReactChild | ReactFragment | ReactPortal;
  onChangeCheckPassword: ChangeEventHandler<HTMLInputElement>;
  errorCheckPassword: boolean | ReactChild | ReactFragment | ReactPortal;
  isActive: boolean;
}

export default function JoinUI(props: JoinValues) {
  return (
    <S.Wrapper>
      <S.Header>
        <div className="text">JOIN MEMBER</div>
      </S.Header>
      <S.Body>
        <S.JoinId>
          <span>아이디</span>
          <input
            type="email"
            placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
            onChange={props.onChangeEmail}
          />
        </S.JoinId>
        <p>{props.errorEmail}</p>

        <S.JoinPassword>
          <span>비밀번호</span>
          <input
            type="password"
            placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
            onChange={props.onChangePassword}
          />
        </S.JoinPassword>
        <p>{props.errorPassword}</p>

        <S.CheckedPassword>
          <span>비밀번호 확인</span>
          <input
            type="password"
            placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
            onChange={props.onChangeCheckPassword}
          />
        </S.CheckedPassword>
        <p>{props.errorCheckPassword}</p>

        <S.JoinName>
          <span>이름</span>
          <input
            type="text"
            placeholder="Ex) 홍길동"
            onChange={props.onChangeName}
          />
        </S.JoinName>
        <p>{props.errorName}</p>
      </S.Body>
      <S.ButtonBox>
        <S.CancelButton onClick={props.onClickCancelButton}>
          취소
        </S.CancelButton>
        <S.JoinButton onClick={props.onClickCreateButton}>확인</S.JoinButton>
      </S.ButtonBox>
    </S.Wrapper>
  );
}
