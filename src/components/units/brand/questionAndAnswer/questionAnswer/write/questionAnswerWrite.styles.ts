import styled from "@emotion/styled";

export const AnswerButton = styled.div`
  /* width: 5%;
  padding-left: 95%; */
  cursor: pointer;
`;

export const Wrap = styled.div`
  width: 100%;
  padding: 20px 0px 30px 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    width: 100%;
    border-top: 1px dashed #c0c0c0;
    border-left: 0px;
    border-bottom: 0px;
    border-right: 0px;
    margin-bottom: 10px;
  }
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
`;

export const SubmitButton = styled.button`
  background-color: black;
  margin-right: 15px;
  color: white;
`;
