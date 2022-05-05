import Banner from "../../commons/layout/banner/banner.container";
import * as S from "./body.styles";
// import { v4 as uuidv4 } from "uuid";

export default function BodyUI(props) {
  console.log(props.data?.fetchUseditems);
  return (
    <>
      <Banner />
      <S.Wrapper>
        <S.Header>
          <span>New Arrival</span>
        </S.Header>
        <S.List>
          {props.data?.fetchUseditems.map((el, index) => {
            if (index < 8)
              return (
                <S.ListItems key={index}>
                  <div>
                    <img src="/images/wallpaperbetter.jpg" />
                    <img
                      className="heart"
                      src="/images/heart.svg"
                      onClick={() => alert("찜!")}
                    />
                  </div>
                  <S.ListInfo>
                    <div>
                      <span>{el.tags}</span>
                      <span>{el.price}</span>
                    </div>
                    <p>{el.seller.name}</p>
                    <p>
                      [{el.remarks}] {el.name}
                    </p>
                  </S.ListInfo>
                </S.ListItems>
              );
            else return "";
          })}
        </S.List>
      </S.Wrapper>
    </>
  );
}
