import { ScrollControls, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Model } from 'components/GunModel';
import Head from 'next/head';
import React, { Suspense } from 'react';
import * as S from 'styles/pages/3d-model.styled';

const DModels = () => {
  return (
    <>
      <Head>
        <title>Models</title>
      </Head>
      <S.Root>
        <Canvas
          shadows
          camera={{
            position: [80, 30, 40],
          }}
        >
          <ambientLight intensity={0.33} />
          <spotLight
            angle={0.44}
            penumbra={1}
            position={[30, 40, 25]}
            shadow-mapSize={[2048, 2048]}
            shadow-bias={-0.0001}
            castShadow
          />
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={4}>
              <Model scale={0.2} position={[0, 1.5, 0]} />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </S.Root>
    </>
  );
};

export default DModels;
