import { Canvas } from '@react-three/fiber';
import Button from 'components/Button';
import { Model } from 'components/Canvas/Totoro';
import { Robot } from 'components/Canvas/Robot';
import BasicLayout from 'components/Layouts/Basic';
import Head from 'next/head';
import React, { Suspense } from 'react';
import * as S from 'styles/pages/animations.styled';
import { OrbitControls } from '@react-three/drei';

const Animations = () => {
  return (
    <>
      <Head>
        <title>Animations</title>
      </Head>
      {/* <BasicLayout title="Animations">
        <S.Root>
          <Button withGradient>open</Button>
        </S.Root> */}
      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <Suspense fallback={null}>
          <Model />
          <Robot />
        </Suspense>
      </Canvas>
      {/* </BasicLayout> */}
    </>
  );
};

export default Animations;
