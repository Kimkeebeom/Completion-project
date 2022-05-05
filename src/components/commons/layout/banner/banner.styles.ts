import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Image = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: relative;

  & img {
    width: 100%;
    object-fit: cover;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;
