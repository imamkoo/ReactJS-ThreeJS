import React from "react";
import Ryder from "./Ryder";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const Reddy = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Ryder />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Reddy;
