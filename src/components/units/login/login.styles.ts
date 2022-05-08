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
  display: flex;
  margin: 175px 0px 315px;
`;
export const LoginBox = styled.div`
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
export const LoginId = styled.div``;
export const LoginPassword = styled.div``;
export const Button = styled.button`
  width: 190px;
  height: 140px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
