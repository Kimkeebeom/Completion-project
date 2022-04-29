import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 95%;
  padding: 100px 90px;
  .title {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Label = styled.div``;

export const Input = styled.input``;

export const Name = styled.div``;
export const Summary = styled.div``;
export const Contents = styled.div``;
export const Price = styled.div``;
export const Tag = styled.div``;
export const Location = styled.div``;
export const LocationBody = styled.div``;
export const Img = styled.div``;
export const AddressBox = styled.div``;
export const AddressContents = styled.div`
  display: flex;
  flex-direction: column;
  input:nth-of-type(1) {
    background-color: black;
    color: white;
  }
`;
export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;

  .ImageUploadBox {
    display: flex;
  }
`;
