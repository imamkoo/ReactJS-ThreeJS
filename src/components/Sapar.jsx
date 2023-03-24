import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Par from "./Par";

const Sapar = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Par />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Sapar;
