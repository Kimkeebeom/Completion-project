import BannerUI from "./banner.presenters";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Banner() {
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
  return <BannerUI settings={settings} />;
}
