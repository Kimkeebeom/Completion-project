import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 95%;
  height: 100px;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
`;
export const HeaderLeft = styled.div`
  margin: 26px 80px;
  img {
    width: 189px;
    height: 49px;
    cursor: pointer;
  }
`;
export const HeaderRight = styled.div`
  & ul {
    display: flex;
    list-style: none;
  }

  & ul > li {
    margin-right: 25px;
    cursor: pointer;
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: black;
  }
`;
