import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrap = styled.textarea`
  width: 100%;
  background-color: #e9e9e9;
  resize: none;
  border: none;
  padding: 20px;
  margin-bottom: 10px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  & button {
    width: 120px;
    height: 50px;
    border: 1px solid black;
    :hover {
      cursor: pointer;
    }
    font-size: 16px;
    font-weight: 400;
  }
`;

export const CancelButton = styled.button`
  background-color: white;
  margin-right: 15px;
`;

export const SubmitButton = styled.button`
  background-color: black;
  color: white;
`;
