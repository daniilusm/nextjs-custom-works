import Button from 'components/Button';
import BasicLayout from 'components/Layouts/Basic';
import Head from 'next/head';
import React from 'react';
import * as S from 'styles/pages/animations.styled';

const Animations = () => {
  return (
    <>
      <Head>
        <title>Animations</title>
      </Head>
      <BasicLayout title="Animations">
        <S.Root>
          <Button withGradient>open</Button>
        </S.Root>
      </BasicLayout>
    </>
  );
};

export default Animations;
