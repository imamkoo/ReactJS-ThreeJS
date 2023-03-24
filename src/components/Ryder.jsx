/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ryder.gltf --transform
Author: Carl Jhonson (https://sketchfab.com/Carl_Jhonson)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ryder-5819c81a7ee942deac939ed7c63b792f
Title: Ryder
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    "../../public/img/ryder-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_50.geometry}
            material={materials.Ryder}
            skeleton={nodes.Object_50.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ryder-transformed.glb");