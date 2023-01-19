import Image from 'next/image';
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
  z-index: 4;
  filter: blur(5px) brightness(0.1);
`;

export const MiddleLayer = styled(Layer)`
  transform: translate3d(0, calc(var(--scrollTop)/ 2.5), 0)};
  z-index: 5;
`;

export const FrontLayer = styled(Layer)`
  transform: translate3d(0, calc(var(--scrollTop)/ 5.7), 0)};
  z-index: 6;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  filter: blur(3px) brightness(0.7);
`;

export const FirstPath = styled.div<{ imgSrc: string }>`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    z-index: 100;
    width: 100%;
    height: calc(calc(1vw + 1vh) * 10);
    background-image: ${({ imgSrc }) => imgSrc && `url(${imgSrc})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    bottom: calc(calc(1vw + 1vh) * -4.5);
    filter: blur(4px);
  }
`;

export const Layers = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const MainTitle = styled.div`
  z-index: 4;
  font-size: 140px;
  text-align: center;
  color: black;
  transform: translate3d(0, calc(var(--scrollTop) / 2), 0);
  transition: transform 0.75s cubic-bezier(0.075, 0.5, 0, 1);
  will-change: transform;
  text-transform: uppercase;
  font-weight: 900;
  text-shadow: 0 0 15px #ece4cb;
`;

export const SecondPath = styled.div<{ imgSrc: string }>`
  position: relative;
  height: 100vh;
  background-image: ${({ imgSrc }) => imgSrc && `url(${imgSrc})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const SubTitle = styled.div`
  width: 700px;
  font-size: 33px;
  text-align: center;
  color: black;
  transform: translate3d(0, calc(var(--scrollTop) / -1.2), 0);
  transition: transform 0.75s cubic-bezier(0.075, 0.5, 0, 1);
  will-change: transform;
  text-transform: uppercase;
  text-shadow: 0 0 15px #ece4cb;
`;

export const Text = styled.div`
  width: 700px;
  font-size: 18px;
  text-align: center;
  color: black;
  transform: translate3d(0, calc(var(--scrollTop) / -1.2), 0);
  transition: transform 0.75s cubic-bezier(0.075, 0.5, 0, 1);
  will-change: transform;
  text-transform: uppercase;
  text-shadow: 0 0 15px #ece4cb;
  margin: 150px 0 0 550px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Front = styled.div<{ imgSrc: string }>`
  background-image: ${({ imgSrc }) => imgSrc && `url(${imgSrc})`};
  height: 100%;
  z-index: 3;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(1px);
`;
