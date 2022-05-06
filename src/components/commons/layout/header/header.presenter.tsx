import { useRouter } from "next/router";
import * as S from "./header.styles";

export default function HeaderUI() {
  const router = useRouter();

  return (
    <S.HeaderWrapper>
      <S.HeaderLeft>
        <img
          onClick={() => {
            router.push(`/main`);
          }}
          src="/images/DINGCO.png"
        />
      </S.HeaderLeft>
      <S.HeaderRight>
        <ul>
          <li
            onClick={() => {
              router.push(`/login`);
            }}
          >
            로그인
          </li>
          <li>회원가입</li>
          <li>장바구니</li>
        </ul>
      </S.HeaderRight>
    </S.HeaderWrapper>
  );
}
