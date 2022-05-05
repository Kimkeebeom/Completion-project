import Slider from "react-slick";
import * as S from "./banner.styles";
import { v4 as uuid4 } from "uuid";

export default function BannerUI(props) {
  return (
    <S.Wrapper>
      <Slider {...props.settings}>
        {[1, 2, 3, 4].map((el) => (
          <S.Image key={uuid4()}>
            <img src={`/images/slider/sliderImage-${el}.jpg`}></img>
          </S.Image>
        ))}
      </Slider>
    </S.Wrapper>
  );
}
