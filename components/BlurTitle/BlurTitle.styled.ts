import styled from 'styled-components';

export const Root = styled.div`
  user-select: none;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const Canvas = styled.canvas`
  width: 60rem;
  height: 40rem;
  position: absolute;
  top: calc(50% - 20rem);
  left: calc(50% - 30rem);
`;

export const Title = styled.div`
  filter: blur(5px);
  font-size: 20rem;
  letter-spacing: -0.1em;
  margin-top: calc(50vh - 20rem);
  width: 100%;
  text-align: center;
  position: absolute;
  color: white;
`;
