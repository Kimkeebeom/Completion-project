import styled from "@emotion/styled";

export const ListItems = styled.div`
  width: 100%;
  height: 470px;
  overflow: hidden;

  > div:nth-of-type(1) {
    height: 80%;
    text-align: center;
    vertical-align: middle;
    object-position: center;
    overflow: hidden;
    img {
      z-index: 1;
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
      height: 100%;
    }
    .heart {
      z-index: 2;
      position: relative;
      bottom: 530px;
      width: 40px;
      left: 151px;
      cursor: pointer;
    }
  }
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  > div > span:nth-of-type(1) {
    font-size: 20px;
    margin-right: 15px;
    font-weight: 700;
    color: red;
  }
  span:nth-of-type(2) {
    font-size: 20px;
    font-weight: 700;
  }
`;
