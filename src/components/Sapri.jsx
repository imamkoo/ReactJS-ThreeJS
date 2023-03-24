import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Sap from "./Sap";

const Sapri = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Sap />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Sapri;
