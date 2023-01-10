import React from 'react';
import * as S from './InputText.styled';

type Props = {
  name: string;
  isRequired?: boolean;
  value: string;
  handleChange?: (value: string) => void;
  onKeyEvent?: (event: KeyboardEvent) => void;
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
        required={isRequired}
        onChange={handleChange ? (e) => handleChange(e.target.value) : () => {}}
        onKeyPress={onKeyEvent}
        value={value}
      />
      <S.Label>{name}</S.Label>
    </S.Root>
  );
};

export default InputText;
