import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('totoro.gltf');

  useEffect(() => {
    console.info(nodes);
  }, [nodes]);

  return <primitive object={nodes.Scene} />;
  // return (
  //   <group {...props} dispose={null}>
  //     <mesh
  //       geometry={nodes.Body.geometry}
  //       material={materials.skin}
  //       position={[0, 12.499375, 0]}
  //       scale={7.420064}
  //     >
  //       <mesh
  //         geometry={nodes.Arms.geometry}
  //         material={materials.skin}
  //         position={[0.894104, -0.202836, -0.116607]}
  //         rotation={[0, 0, 0.1894]}
  //         scale={0.343291}
  //       >
  //         <mesh
  //           geometry={nodes.Claws_arms.geometry}
  //           material={materials.claws}
  //           position={[-0.039112, -2.464835, -0.483041]}
  //           rotation={[0.048879, 0.249565, 0.057925]}
  //           scale={0.278131}
  //         />
  //       </mesh>
  //       <mesh geometry={nodes.Belly.geometry} material={materials.belly}>
  //         <mesh
  //           geometry={nodes.Marks_belly.geometry}
  //           material={materials.skin}
  //           position={[0, -0.112759, 0.875581]}
  //           rotation={[-0.519704, 0, 0]}
  //           scale={[0.108573, 0.044397, 0.007452]}
  //         />
  //         <mesh
  //           geometry={nodes.Marks_belly001.geometry}
  //           material={materials.skin}
  //           position={[0.426439, -0.3038, 0.86231]}
  //           rotation={[-0.424496, 0.432058, 0.184721]}
  //           scale={[0.108573, 0.044397, 0.007452]}
  //         />
  //       </mesh>
  //       <mesh
  //         geometry={nodes.Ears.geometry}
  //         material={materials.skin}
  //         position={[0.442409, 0.928108, 0]}
  //         rotation={[0, 0, -0.270256]}
  //         scale={0.046289}
  //       />
  //       <group
  //         position={[0.463767, 0.322846, 0.780576]}
  //         rotation={[-0.238723, 0.625033, -0.108169]}
  //         scale={[0.109734, 0.109734, 0.047118]}
  //       >
  //         <mesh
  //           geometry={nodes.Sphere.geometry}
  //           material={materials['eyes | sclera']}
  //         />
  //         <mesh
  //           geometry={nodes.Sphere_1.geometry}
  //           material={materials['eyes | pupil']}
  //         />
  //       </group>
  //       <mesh
  //         geometry={nodes.Feet.geometry}
  //         material={materials.skin}
  //         position={[0.257583, -1.502028, -0.116607]}
  //         rotation={[-0.000023, -1.194744, 1.630319]}
  //         scale={[0.242639, 0.175221, 0.242846]}
  //       >
  //         <mesh
  //           geometry={nodes.Claws_feet.geometry}
  //           material={materials.claws}
  //           position={[-0.722017, -2.397159, -0.035202]}
  //           rotation={[0.119317, 0.190248, -0.215076]}
  //           scale={[0.363945, 0.580227, 0.322113]}
  //         />
  //       </mesh>
  //       <mesh
  //         geometry={nodes.Leaf_hat.geometry}
  //         material={materials['leaf | body']}
  //         position={[0, 0.923404, 0]}
  //         scale={0.407403}
  //       >
  //         <mesh
  //           geometry={nodes.Stalk.geometry}
  //           material={materials['leaf | stalk']}
  //           position={[0.008616, 0.408787, -1.30108]}
  //           rotation={[0.082195, 0, 0]}
  //           scale={[0.151592, 0.083519, 0.588222]}
  //         />
  //       </mesh>
  //       <mesh
  //         geometry={nodes.Nose.geometry}
  //         material={materials.nose}
  //         position={[0, 0.375387, 0.802296]}
  //         rotation={[1.014096, 0, 0]}
  //         scale={[0.13477, 0.119838, 0.091366]}
  //       />
  //       <mesh
  //         geometry={nodes.Tail.geometry}
  //         material={materials.skin}
  //         position={[0, -1.339669, -0.863262]}
  //         scale={[0.310467, 0.310467, 0.397534]}
  //       />
  //       <mesh
  //         geometry={nodes.Whiskers.geometry}
  //         material={materials.whiskers}
  //         position={[0.423083, 0.197994, 0.403081]}
  //         rotation={[0, 0.347704, -0.046166]}
  //         scale={0.037618}
  //       />
  //     </mesh>
  //   </group>
  // );
}

useGLTF.preload('totoro.gltf');
