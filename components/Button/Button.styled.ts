import styled from 'styled-components';
import { Colors } from 'styles/colors';

export const Root = styled.div<{
  gradientDeg: number;
  withGradient: boolean;
  isBubble: boolean;
  isFilled: boolean;
  color: string;
  hoverColor: string;
}>`
  position: relative;
  height: 40px;
  width: 120px;
  border-radius: 8px;
  background: ${Colors.nero};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isFilled }) =>
    isFilled &&
    `
  perspective: 230px;`}

  &::before {
    content: '';
    width: 104%;
    height: 108%;
    border-radius: 8px;
    ${({ withGradient, gradientDeg, color }) =>
      withGradient
        ? `
    background-image: linear-gradient(
      ${gradientDeg}deg, #5ddcff, #3c67e3 43%, #4e00c2
    );`
        : `background-color: ${Colors[color]}`};
    position: absolute;
    z-index: -1;
    top: -4%;
    left: -2%;
  }

  &:hover {
    ${({ isBubble }) =>
      isBubble &&
      `
    box-shadow: 4px 4px 6px 0 rgba(63, 62, 62, 0.5),
      -4px -4px 6px 0 rgba(108, 108, 108, 0.5),
      inset -4px -4px 6px 0 rgba(65, 63, 63, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
      `}
  }

  &:hover::before {
    ${({ withGradient, gradientDeg, hoverColor }) =>
      withGradient
        ? `
    background-image: linear-gradient(
      ${gradientDeg}deg, #5ddcff, #3c67e3 43%, #4e00c2
    );`
        : `background-color: ${Colors[hoverColor]}`};
  }
`;

export const Text = styled.span<{
  textColor: string;
  hoverTextColor: string;
}>`
  color: ${({ textColor }) => Colors[textColor]};

  &:hover {
    color: ${({ hoverTextColor }) => Colors[hoverTextColor]};
  }
`;
