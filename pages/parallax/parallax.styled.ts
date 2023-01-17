import styled from 'styled-components';

export const Root = styled.div`
  height: 100%;
`;

export const Layer = styled.div<{ bckImg: any }>`
  background-image: ${({ bckImg }) => bckImg && `url(${bckImg.src})`};
  height: 100%;
  width: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
  will-change: transform;
  transition: transform 0.75s cubic-bezier(0.075, 0.5, 0, 1);
`;

export const BaseLayer = styled(Layer)`
  transform: translate3d(0, calc(var(--scrollTop)/ 1.6), 0)};
  z-index: 0;
`;

export const FrontLayer = styled(Layer)`
transform: translate3d(0, calc(var(--scrollTop)/ 5.7), 0)};
z-index: 2;
`;

export const MiddleLayer = styled(Layer)`
transform: translate3d(0, calc(var(--scrollTop)/ 2.5), 0)};
z-index: 1;
`;

export const BackLayer = styled(Layer)`
transform: translate3d(0, calc(var(--scrollTop)/ 1.6), 0)};
z-index: 0;
`;

export const Layers = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Block = styled.div`
  height: 100vh;
`;
