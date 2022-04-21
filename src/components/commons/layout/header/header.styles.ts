import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
    width: 95%;
    height: 100px;
    max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
`
export const HeaderLeft = styled.div`
    margin: 26px 80px;
    img{
        width: 189px;
        height: 49px;
    }
`
export const HeaderRight = styled.div`
    & ul {
        display: flex;
        list-style: none;
    }
    
    & ul > li {
    margin-right: 25px;
    cursor: pointer;
    position: relative;

    /* padding: 12px 0; */
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: black;
    }
  /* & ul > li.nav__list.active__page {
    color: #0d223a;
    ::after {
      display: block;
      content: " ";
      width: 100%;
      height: 2px;
      background-color: #3894ff;
      position: absolute;
      bottom: -1px;
      left: 0;
    }
  } */
  /* color: #9d9d9d; */
`