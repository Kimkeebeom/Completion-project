import * as S from "./navi.styles";

export default function NaviUI() {
  return (
    <S.NaviWrapper>
      <S.InnerWrap>
        <ul>
          <li>BRAND</li>
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
