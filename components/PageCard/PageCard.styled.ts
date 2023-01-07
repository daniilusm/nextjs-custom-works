import styled from 'styled-components';
import { Colors } from 'styles/colors';

export const Root = styled.div<{ shadow: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: ${Colors.nero};
  width: 350px;
  height: 250px;
  padding: 3px;
  position: relative;
  border-radius: 6px;
  cursor: pointer;

  @property --rotate {
    syntax: '<angle>';
    initial-value: ${({ shadow }) => shadow && `${shadow}deg`};
    inherits: false;
  }

  &:hover:before,
  &:hover:after {
    animation: none;
  }

  &::before {
    content: '';
    width: 104%;
    height: 104%;
    border-radius: 8px;
    background-image: linear-gradient(
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    position: absolute;
    z-index: -1;
    top: -2%;
    left: -2%;
    animation: spin 2.5s linear infinite;
  }

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(100px);
    background-image: linear-gradient(
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
`;

export const Title = styled.h2`
  color: ${Colors.white};
`;

export const Description = styled.p`
  color: ${Colors.white};
`;
