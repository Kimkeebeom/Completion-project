import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  MouseEventHandler,
  useEffect
} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as D from "./itemDetail.styles";
import { v4 as uuidv4 } from "uuid";
import QuestionWrite from "../questionAndAnswer/question/write/questionWrite.container";
import QuestionList from "../questionAndAnswer/question/list/questionList.container";

const WARNING = [
  "상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다. 상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다. 상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의 소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거 소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.) 주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점 양해 부탁드립니다. 반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여 주십시오. 제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품 부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부 포장재를 훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외)  반품/교환이 불가합니다. A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는 에이블리 고객센터를 통해 부탁드립니다. 상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수 있습니다."
];

declare const window: typeof globalThis & {
  kakao: any;
};

export default function DetailUI(props: {
  data: {
    fetchUseditem: {
      images: any[];
      name: boolean | ReactChild | ReactFragment | ReactPortal;
      price: boolean | ReactChild | ReactFragment | ReactPortal;
      remarks: boolean | ReactChild | ReactFragment | ReactPortal;
      tags: boolean | ReactChild | ReactFragment | ReactPortal;
      contents: string;
      useditemAddress: {
        zipcode: string;
        address: string;
        addressDetail: string;
      };
    };
  };
  togglePick: MouseEventHandler<HTMLImageElement>;
  MoveToproductEdit: MouseEventHandler<HTMLButtonElement>;
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: true,
    autoplay: true,
    cssEase: "linear",
    fade: true
  };

  const mapAddress = props.data?.fetchUseditem?.useditemAddress?.address;

  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 만들어짐
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=8b77aaeac9eee62232cd589f76eb677f&libraries=services&autoload=false"; // ?&autoload=false 추가
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div

        const imageSrc = "/images/marker.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 주소-좌표 변환 객체를 생성합니다

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(mapAddress, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            const mapOption = {
              center: coords, // 지도의 중심좌표
              level: 3
            };
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            const map = new window.kakao.maps.Map(mapContainer, mapOption);

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
              image: markerImage // 마커이미지 설정
            });
            map.setCenter(coords);
            marker.setMap(map);
          }
        });
      });
    };
  }, [mapAddress]);

  return (
    <D.Wrap>
      <D.IWrap>
        <D.ImageWrap>
          <Slider {...settings}>
            {props.data?.fetchUseditem?.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <D.Image key={uuidv4()}>
                  <img key={el} src={`https://storage.googleapis.com/${el}`} />
                </D.Image>
              ))}
          </Slider>
        </D.ImageWrap>
        <D.InfoWrap>
          <D.ItemName>
            <p>AVANDRESS</p>
            <h1>[SET] HERO TRACK WIDE SET-UP PURPLE</h1>
            <p>name :{props.data?.fetchUseditem.name}</p>
          </D.ItemName>
          <D.ItemPricePick>
            <D.ItemPrice>
              <p>판매가 :</p>
              <span>{props.data?.fetchUseditem.price}</span>원
            </D.ItemPrice>
            <D.ItemPick>
              <span>MY</span>
              <img
                src={
                  props.isActive ? "/images/heart.svg" : "/images/redHeart.svg"
                }
                onClick={props.onClickTogglePick}
              >
                {/* {props.togglePickedData?.fetchUseditem?.togglepick} */}
              </img>
              <span>PRODUCT</span>
            </D.ItemPick>
          </D.ItemPricePick>
          <hr />
          <D.ItemContents>
            <D.Remarks>
              상품 요약 : {props.data?.fetchUseditem.remarks}
            </D.Remarks>
            <D.Tags>tags : {props.data?.fetchUseditem.tags}</D.Tags>
          </D.ItemContents>
          <hr />
          <D.ButtonWrap>
            <D.BuyNow>
              <span>BUY NOW</span>
            </D.BuyNow>
            <D.ShoppingBag>
              <span>SHOPPING BAG</span>
            </D.ShoppingBag>
          </D.ButtonWrap>
        </D.InfoWrap>
      </D.IWrap>
      <D.EditButton onClick={props.MoveToproductEdit}>수정하기</D.EditButton>

      <h1>DETAIL</h1>
      <hr />
      <D.DetailWrap>
        <D.DetailImage>
          <img src="/images/brand-detail-default.jpg" />
          {/* <img src={props.data?.fetchUseditem.images} /> */}
        </D.DetailImage>
        <D.DetailContents>
          상품 내용 : {props.data?.fetchUseditem.contents}
        </D.DetailContents>
        <D.DetailAddress>
          <h2>배송/교환/반품/AS관련 유의사항</h2>
          <p>
            상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
            안내사항보다 우선 적용됩니다.
          </p>
          {/* <img src="/images/brand-detail-map.png" /> */}
          <div>
            {props.data?.fetchUseditem?.useditemAddress && (
              <div>
                {/* <p style={{color:'white'}}></p> */}
                <div>
                  주소:
                  {props.data?.fetchUseditem?.useditemAddress.zipcode}{" "}
                  {props.data?.fetchUseditem?.useditemAddress.address}{" "}
                  {props.data?.fetchUseditem?.useditemAddress.addressDetail}
                </div>
                <div id="map" style={{ width: "100%", height: "400px" }}></div>
              </div>
            )}
          </div>
          <ul>
            {WARNING[0].split(". ").map((el) => (
              <>
                <li>{el}</li>
              </>
            ))}
          </ul>
        </D.DetailAddress>
      </D.DetailWrap>
      <h1>Q&amp;A</h1>
      <hr></hr>
      <QuestionWrite />
      <QuestionList />
    </D.Wrap>
  );
}
