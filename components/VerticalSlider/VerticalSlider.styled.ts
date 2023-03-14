import styled from 'styled-components';

export const Stage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 700px;
  transform-style: preserve-3d;
  user-select: none;
  overflow: hidden;
  background: #000;

  html,
  body {
    overflow: hidden;
    background: #000;
  }

  div,
  svg {
    position: absolute;
  }
`;

export const Root = styled.div`
  perspective: 2000px;
  width: 400px;
  height: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  html,
  body,
  .ring,
  .img {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    user-select: none;
  }
`;
