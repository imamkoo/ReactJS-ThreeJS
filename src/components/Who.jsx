import React from "react";
import styled from "styled-components";

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
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
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
  color: #da4ea2;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3D Model */}
          {/* <Img src="../../public/img/gbm.png" /> */}
        </Left>
        <Right>
          <Title>GANG BOCAH MANTEP</Title>
          <WhatWeDo>
            <Line src="../../public/img/line.png" />
            <Subtitle>GBM</Subtitle>
          </WhatWeDo>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
