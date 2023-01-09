import styled from 'styled-components';
import { Colors } from 'styles/colors';

export const Root = styled.button`
  height: 40px;
  width: 120px;
  outline: none;
  border: 2px solid ${Colors.white};
  border-radius: 15px;
  background: ${Colors.nero};
  color: ${Colors.white};
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    border: 2px solid ${Colors.grayDark};
  }
`;

export const Text = styled.span``;
