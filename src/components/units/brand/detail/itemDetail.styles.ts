import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 95%;
  height: 100%;
  padding-top: 30px;
`;

export const IWrap = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 50px;
`;

export const ImageWrap = styled.div`
  width: 45%;
  border: 1px solid black;
`;

export const InfoWrap = styled.div`
  width: 55%;
  padding: 30px;
  /* background-color: rebeccapurple; */
`;

export const ItemName = styled.div`
  margin-bottom: 40px;
`;

export const ItemPricePick = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemPrice = styled.div`
  display: flex;
`;

export const ItemPick = styled.div`
  & img {
    margin-left: 10px;
    margin-right: 10px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const ItemContents = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export const Remarks = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Contents = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Tags = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`;

export const BuyNow = styled.button`
  width: 250px;
  height: 70px;
  border: none;
  background-color: black;
  color: white;
  & span {
    font-size: 20px;
    font-weight: 300;
  }
  :hover {
    cursor: pointer;
  }
`;

export const ShoppingBag = styled.button`
  width: 300px;
  height: 70px;
  border: none;
  background-color: #a0a0a0;
  color: white;
  & span {
    font-size: 20px;
    font-weight: 300;
  }
  :hover {
    cursor: pointer;
  }
`;

export const DetailWrap = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px;
  margin-bottom: 50px;
`;

export const DetailImage = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 50px;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const DetailContents = styled.div`
  width: 80%;
  text-align: center;
`;

export const DetailAddress = styled.div`
  /* background-color: aquamarine; */
  width: 80%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
`;

export const EditButton = styled.button``;
