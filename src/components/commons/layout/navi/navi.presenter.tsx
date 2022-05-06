import { useRouter } from "next/router";
import * as S from "./navi.styles";

export default function NaviUI() {
  const router = useRouter();

  return (
    <S.NaviWrapper>
      <S.InnerWrap>
        <ul>
          <li
            onClick={() => {
              router.push(`/brand`);
            }}
          >
            BRAND
          </li>
          <li>CATEGORY</li>
          <li>LIFE</li>
          <li>BEAUTY</li>
          <li>|</li>
          <li>#STYLE</li>
          <li>EVENT</li>
        </ul>
      </S.InnerWrap>
    </S.NaviWrapper>
  );
}
