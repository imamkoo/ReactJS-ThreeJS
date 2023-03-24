/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 melody.gltf --transform
Author: Mifu Saja (https://sketchfab.com/mifusaja)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/female-type-2-pose-1-greeting-72c79fa92a8f41b3b75d7283d7499b3d
Title: Female - Type 2 (Pose 1: Greeting)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    "../../public/img/melody-transformed.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Body} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Cloth} />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.material}
        />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Jilbab} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Shoes} />
      </group>
    </group>
  );
}

useGLTF.preload("/melody-transformed.glb");