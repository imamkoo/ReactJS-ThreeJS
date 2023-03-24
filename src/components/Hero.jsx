import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 68px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
`;

const Line = styled.img`
  height: 4px;
`;

const Subtitle = styled.h2`
  color: #b45dbb;
`;

// const Desc = styled.p`
//   font-size: 20px;
//   color: lightgray;
//   padding: 10px 0;
// `;

// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   font-weight: 500;
//   width: 100px;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

const Img = styled.img`
  width: 660px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;

  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(22px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>GANG BOCAH MANTEP</Title>
          <WhatWeDo>
            <Line src="../../public/img/line.png" />
            <Subtitle>GBM 💜</Subtitle>
          </WhatWeDo>
          {/* <Desc>Kok Tau ?? </Desc> */}
          {/* <Button>More...</Button> */}
        </Left>
        <Right>
          {/* 3D Model */}
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.4}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          {/* 3D Model */}
          <Img src="../../public/img/gbm.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
