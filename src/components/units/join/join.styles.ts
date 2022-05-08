import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 3px solid #555555;

  .text {
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    margin: 95px 0px 115px;
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 40px 0px 10px 40px;
  border-bottom: 3px solid #555555;
  p {
    color: red;
  }
  span {
    font-size: 24px;
    font-weight: 400;
    margin-right: 20px;
  }
  input {
    width: 610px;
    height: 60px;
    background-color: #e9e9e9;
    margin-bottom: 24px;
    margin-right: 31px;
  }
`;

export const JoinBox = styled.div``;
export const JoinId = styled.div``;
export const JoinPassword = styled.div``;
export const CheckedPassword = styled.div``;
export const JoinName = styled.div``;

export const ButtonBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  padding: 40px;
  font-size: 20px;
  font-weight: 700, bold;
`;
export const CancelButton = styled.button`
  width: 186px;
  height: 56px;
  border: 1px solid black;
  background-color: white;
  color: black;
  cursor: pointer;
`;
export const JoinButton = styled.button`
  width: 186px;
  height: 56px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
