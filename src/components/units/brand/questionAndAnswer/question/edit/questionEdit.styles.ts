import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #c0c0c0;
  align-items: flex-start;
  padding: 20px 0px;
`;

// export const WholeBox = styled.div`
//   display: flex;
// `;

export const LeftWrap = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Writer = styled.div`
  width: 100px;
  background-color: black;
  color: white;
  text-align: center;
  border: none;
`;

export const RightWrap = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  /* background-color: aqua; */
  padding-right: 15px;
`;

export const ContentsButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Contents = styled.div``;

export const SideWrap = styled.div`
  display: flex;
`;

export const CreatedAt = styled.div`
  margin-right: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  & > button {
    margin-right: 20px;
  }
`;
