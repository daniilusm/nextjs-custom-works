import styled from 'styled-components';
import { ArrowIcon } from 'assets/icons/arrow_icon';

export const Root = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  perspective: 500px;
  transform-style: preserve-3d;
`;

export const Container = styled.div<{
  offset: number;
  direction: number;
  abs_offset: number;
  isActive: boolean;
  isViewMore: boolean;
  isView: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(${({ offset }) => offset && `${offset} * 50deg`}))
    scaleY(
      calc(1 + ${({ abs_offset }) => abs_offset && `${abs_offset}`} * -0.4)
    )
    translateZ(
      calc(${({ abs_offset }) => abs_offset && `${abs_offset} * -30rem`})
    )
    translateX(calc(${({ offset }) => offset && `${offset}* -5rem`}));
  filter: blur(
    calc(${({ abs_offset }) => abs_offset && `${abs_offset} * 1rem`})
  );
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
  opacity: ${({ isView }) => (isView ? '0' : '1')};
  display: ${({ isView }) => (isView ? 'none' : 'flex')};
  transition: all 0.3s ease-out;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
`;

export const LeftArrow = styled(Arrow)`
  transform: rotateZ(90deg);
`;

export const RightArrow = styled(Arrow)`
  right: 0;
  transform: rotateZ(270deg);
`;
