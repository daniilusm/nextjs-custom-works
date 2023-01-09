import React from 'react';
import * as S from './InputText.styled';

type Props = {
  name: string;
  isRequired?: boolean;
};

const InputText = ({ name, isRequired = false }: Props) => {
  return (
    <S.Root>
      <S.Input
        type="input"
        placeholder={name}
        name={name}
        id={name}
        required={isRequired}
      />
      <S.Label>{name}</S.Label>
    </S.Root>
  );
};

export default InputText;
