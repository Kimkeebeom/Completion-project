import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 100%;
    height: 750px;
    background-color: #C4C4C4;
    display: flex;
    position: relative;
    & .slick-dots {
        position: absolute;
        bottom: 10px;
    }
    & .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #242121;
    &::before {
      display: none;
    }
  }
  & .slick-dots li.slick-active button {
    background-color: #fff;
  }
`
export const SlideBox = styled.div`
    position: relative;
`

export const SlideContents = styled.div`
    width: 100%;
    height: 100%;
    & div {
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
    & span {
        color: #fff;
        display: block;
        font-size: 100px;
    }
    & img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    &.slide1{
        background: url("images/dong.gif") no-repeat center/cover;
    }
    &.slide2{
        background: url("images/prison.gif") no-repeat center/cover;;
    }
    &.slide3{
        background: url("images/wallpaperbetter") no-repeat center/cover;;
    }
`