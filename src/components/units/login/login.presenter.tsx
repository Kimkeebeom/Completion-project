import * as S from "./login.styles";

export default function LoginUI() {
  return (
    <S.Wrapper>
      <S.Header>
        <div className="text">LOGIN</div>
      </S.Header>
      <S.Body>
        <S.LoginBox>
          <S.LoginId>
            <span>아이디</span>
            <input
              type="email"
              placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
            />
          </S.LoginId>
          <S.LoginPassword>
            <span>비밀번호</span>
            <input
              type="password"
              placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
            />
          </S.LoginPassword>
        </S.LoginBox>
        <S.Button>로그인</S.Button>
      </S.Body>
    </S.Wrapper>
  );
}
