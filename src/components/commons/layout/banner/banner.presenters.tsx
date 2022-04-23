import Slider from "react-slick";
import * as S from "./banner.styles";

export default function BannerUI(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // autoplay: true,
        // autoplayspeed: 500,
        // pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
        <S.Wrapper>
            <Slider {...settings}>
                <S.SlideBox>
                    <S.SlideContents className="slide1">
                        {/* <div>
                            <span>No.1</span>
                        </div> */}
                    </S.SlideContents>
                </S.SlideBox>
                <S.SlideContents className="slide2">
                    {/* <div>
                        <span>No.2</span>
                    </div> */}
                </S.SlideContents>
                <S.SlideContents className="slide3">
                    {/* <div>
                        <span>No.3</span>
                    </div> */}
                </S.SlideContents>
            </Slider>
        </S.Wrapper>
    )
}