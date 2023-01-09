import React from 'react';
import * as S from './InputText.styled';

type Props = {
  name: string;
  isRequired?: boolean;
  value: string;
  handleChange?: (value: string) => void;
  onKeyEvent: (event: KeyboardEvent) => void;
};

const InputText = ({
  name,
  isRequired = false,
  value,
  handleChange,
  onKeyEvent,
}: Props) => {
  return (
    <S.Root>
      <S.Input
        type="input"
        placeholder={name}
        name={name}
        id={name}
        required={isRequired}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={onKeyEvent}
        value={value}
      />
      <S.Label>{name}</S.Label>
    </S.Root>
  );
};

export default InputText;
