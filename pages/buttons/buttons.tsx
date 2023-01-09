import Button from 'components/Button';
import BasicLayout from 'components/Layouts/Basic';
import React from 'react';
import * as S from './buttons.styled';

const Buttons = () => {
  return (
    <BasicLayout title="Buttons">
      <S.Root>
        <Button>default</Button>
        <Button withGradient>open</Button>
        <Button color="lightRed" hoverColor="redWine" isFilled>
          delete
        </Button>
        <Button isBubble color="hotPink" hoverColor="veryHotPink">
          bubble
        </Button>
        <Button withGradient>open</Button>
        <Button
          color="radicalRed"
          hoverTextColor="radicalRed"
          hoverColor="radicalRed"
        >
          delete
        </Button>
      </S.Root>
    </BasicLayout>
  );
};

export default Buttons;
