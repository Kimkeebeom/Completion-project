import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 95%;
  padding: 100px 90px;
  .titleBox {
    border-bottom: 3px solid #555555;
  }
  .title {
    font-size: 40px;
    font-weight: 700, bold;
    margin-left: 37px;
  }
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0px 30px;
  border-bottom: 1px solid #999999;
  width: 100%;

  .ReactQuill {
    width: 1420px;
    margin-right: 20px;
  }
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 500, medium;
  margin-left: 45px;
  width: 20%;
`;

export const Input = styled.input`
  /* width: 1420px; */
  width: 80%;
  height: 55px;
  background: #e9e9e9;
  margin-right: 20px;
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 55px;
  background: #e9e9e9;
  margin-right: 20px;
`;

export const Location = styled.div`
  padding-top: 30px;
  padding-left: 5px;
  width: 100%;
  height: 100%;
`;

export const Img = styled.div`
  width: 30%;
  height: 250px;
  margin-right: 20px;
  overflow: hidden;
`;
export const AddressBox = styled.div`
  margin-right: 20px;
  width: 70%;
`;
export const AddressContents = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  border-bottom: 3px solid #555555;

  .ImageUploadBox {
    display: flex;
  }
`;

export const ButtonBox = styled.div``;

export const RegisButton = styled.button``;
export const CancelButton = styled.button``;
