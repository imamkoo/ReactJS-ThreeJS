import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Sap from "./Sap";
import styled from "styled-components";

const Desc = styled.div`
  position: absolute;
  top: 240px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const handleYoutube = () => {
  window.open("https://www.youtube.com/channel/UCDwBPepFulWPsV1w-5BFWSQ");
};
const handleInstagram = () => {
  window.open("https://www.instagram.com/mz.brew/");
};
const handleTiktok = () => {
  window.open("https://www.tiktok.com/@rezadirga");
};

const Sapri = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Sap />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        <a onClick={handleYoutube}>
          <img src="../../public/img/youtube.png" alt="youtube" width={48} />
        </a>
        <a onClick={handleInstagram}>
          <img
            src="../../public/img/instagram.png"
            alt="instagram"
            width={50}
          />
        </a>
        <a onClick={handleTiktok}>
          <img src="../../public/img/tiktok.png" alt="tiktok" width={48} />
        </a>
      </Desc>
    </>
  );
};

export default Sapri;
