/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 par.gltf --transform
Author: Nyilonelycompany (https://sketchfab.com/Nyilonelycompany)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/snoop-dogg-rig-077d55f8e4b4443db35d26a5257b85a8
Title: Snoop Dogg Rig
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("../../public/img/par-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.snoop_dog001_Material__667001_0.geometry}
          material={materials["Material__667.001"]}
          scale={14.01}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/par-transformed.glb");