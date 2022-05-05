import { useRouter } from "next/router";
import * as S from "./header.styles";

export default function HeaderUI() {
  const router = useRouter();

  const MoveToMain = () => {
    router.push("/main");
  };

  const MoveToLogin = () => {
    router.push("login");
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderLeft>
        <img onClick={MoveToMain} src="/images/DINGCO.png" />
      </S.HeaderLeft>
      <S.HeaderRight>
        <ul>
          <li onClick={MoveToLogin}>로그인</li>
          <li>회원가입</li>
          <li>장바구니</li>
        </ul>
      </S.HeaderRight>
    </S.HeaderWrapper>
  );
}
