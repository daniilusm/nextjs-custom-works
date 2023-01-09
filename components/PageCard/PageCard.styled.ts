import styled from 'styled-components';
import { Colors } from 'styles/colors';
import Link from 'next/link';

export const Root = styled.div<{ isViewCard: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: ${Colors.nero};
  width: ${({ isViewCard }) => (isViewCard ? '900px' : '350px')};
  height: ${({ isViewCard }) => (isViewCard ? '400px' : '250px')};
  padding: 3px;
  position: relative;
  border-radius: 6px;
  cursor: ${({ isViewCard }) => (isViewCard ? 'default' : 'pointer')};
  transition: all 0.5s;

  &::before {
    content: '';
    width: 104%;
    height: 104%;
    border-radius: 8px;
    background-image: linear-gradient(132deg, #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -2%;
    left: -2%;
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
    background-image: linear-gradient(132deg, #5ddcff, #3c67e3 43%, #4e00c2);
  }
`;

export const Title = styled.h2`
  color: ${Colors.white};
`;

export const Description = styled.p`
  color: ${Colors.white};
`;

export const ViewMore = styled(Link)`
  z-index: 1;
`;
