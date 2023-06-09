/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 CJ.gltf --transform
Author: nikitaserov92 (https://sketchfab.com/nikitaserov92)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cj-gta-380de8cd05d64dccbe0131cb1290c017
Title: Cj Gta
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("../../public/img/CJ-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_7.geometry} material={materials.head} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.legs} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.shoes} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.torso} />
      </group>
    </group>
  );
}

useGLTF.preload("/CJ-transformed.glb");
