import styled from 'styled-components';

export const Root = styled.div`
  height: 100%;
`;

export const Layer = styled.div<{ imgSrc: string }>`
  background-image: ${({ imgSrc }) => imgSrc && `url(${imgSrc})`};
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
  z-index: 1;
  filter: blur(5px) brightness(0.1);
`;

export const MiddleLayer = styled(Layer)`
  transform: translate3d(0, calc(var(--scrollTop)/ 2.5), 0)};
  z-index: 2;
`;

export const FrontLayer = styled(Layer)`
  transform: translate3d(0, calc(var(--scrollTop)/ 5.7), 0)};
  z-index: 3;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  filter: blur(3px) brightness(0.7);
`;

export const Layers = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const MiddlePath = styled.div`
  height: 500px;
  width: 100%;
  z-index: 4;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div<{ imgSrc: string }>`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: ${({ imgSrc }) => imgSrc && `url(${imgSrc})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  z-index: 4;
  font-size: 200px;
  text-align: center;
  align-self: center;
`;

export const SecondPath = styled.div<{ imgSrc: string }>`
  position: relative;
  height: 100vh;
  background-image: ${({ imgSrc }) => imgSrc && `url(${imgSrc})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
