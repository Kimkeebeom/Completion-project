import { useRouter } from "next/router";
import Banner from "../../commons/layout/banner/banner.container";
import ItemsList from "../itemsList/itemsList.container";
import * as S from "./body.styles";
// import { v4 as uuidv4 } from "uuid";

export default function BodyUI(props) {
  return (
    <>
      <Banner />
      <S.Wrapper>
        <S.Header>
          <span>New Arrival</span>
        </S.Header>
        <ItemsList isMain={true} />
      </S.Wrapper>
    </>
  );
}
