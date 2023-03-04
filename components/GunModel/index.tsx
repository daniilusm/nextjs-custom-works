import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export function Model(props) {
  const scroll = useScroll();
  const { scene } = useGLTF('/gun.gltf');
  const tl = useRef<ReturnType<typeof gsap.timeline>>();
  const ref = useRef<ThreeElements['primitive']>();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(ref.current.rotation, { duration: 1, x: 0, y: 1.5, z: 0 }, 0);

    tl.current.to(ref.current.rotation, { duration: 1, x: 0, y: 4, z: 0 }, 1);

    tl.current.to(ref.current.rotation, { duration: 1, x: 0, y: 6, z: 0 }, 2);

    tl.current.to(
      ref.current.scale,
      { duration: 1, x: 0.2, y: 0.2, z: 0.2 },
      0
    );

    tl.current.to(
      ref.current.scale,
      { duration: 1, x: 0.4, y: 0.4, z: 0.4 },
      1
    );

    tl.current.to(
      ref.current.scale,
      { duration: 1, x: 0.4, y: 0.4, z: 0.4 },
      2
    );
    console.info(ref);
  }, []);

  return <primitive ref={ref} object={scene} {...props} />;
}

useGLTF.preload('/gun.gltf');
