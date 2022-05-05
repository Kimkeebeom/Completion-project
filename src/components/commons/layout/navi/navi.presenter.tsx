import { MouseEventHandler } from "react";
import * as S from "./navi.styles";

export default function NaviUI(props: {
  MoveToBrand: MouseEventHandler<HTMLLIElement>;
}) {
  return (
    <S.NaviWrapper>
      <ul>
        <li onClick={props.MoveToBrand}>BRAND</li>
        <li>CATEGORY</li>
        <li>LIFE</li>
        <li>BEAUTY</li>
        <li>|</li>
        <li>#STYLE</li>
        <li>EVENT</li>
      </ul>
    </S.NaviWrapper>
  );
}
