import Button from 'components/Button';
import BasicLayout from 'components/Layouts/Basic';
import React from 'react';
import * as S from './ui.styled';

const UI = () => {
  return (
    <BasicLayout>
      <S.Root>
        <Button />
        <Button />
        <Button />
      </S.Root>
    </BasicLayout>
  );
};

export default UI;
