import React from 'react';
import * as S from './Button.styled';

type Props = {
  children: any;
};

const Button = ({ children }: Props) => {
  return (
    <S.Root>
      <S.Text>{children}</S.Text>
    </S.Root>
  );
};

export default Button;
