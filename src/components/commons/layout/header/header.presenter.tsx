import { useRouter } from "next/router";
import * as S from "./header.styles";

export default function HeaderUI(props) {
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
          {props.userInfo && (
            <>
              <li>
                {props.userInfo?.name}님 포인트{" "}
                {props.userInfo?.userPoint?.amount}P
              </li>
              <li>충전</li>
              <li onClick={props.onClickLogout}>로그아웃</li>
              <li>장바구니</li>
            </>
          )}
          {!props.userInfo && (
            <>
              <li
                onClick={() => {
                  router.push(`/login`);
                }}
              >
                로그인
              </li>
              <li
                onClick={() => {
                  router.push(`/join`);
                }}
              >
                회원가입
              </li>
              <li>장바구니</li>
            </>
          )}
        </ul>
      </S.HeaderRight>
    </S.HeaderWrapper>
  );
}
