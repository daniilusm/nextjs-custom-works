import Button from 'components/Button';
import BasicLayout from 'components/Layouts/Basic';
import Head from 'next/head';
import React from 'react';
import * as S from 'styles/pages/buttons.styled';

const Buttons = () => {
  return (
    <>
      <Head>
        <title>Buttons</title>
      </Head>
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
    </>
  );
};

export default Buttons;
