import React, { useState } from "react";
import styled from "styled-components";
import Reddy from "./Reddy";
import Sapar from "./Sapar";
import Wahyu from "./Wahyu";
import Sapri from "./Sapri";
import Melody from "./Melody";

const data = ["Reddy", "Sapar", "Wahyu", "Sapri", "Melody"];

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  } ;
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  /* color: black; */
`;

const Left = styled.div`
  flex: 1;
  position: relative;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 20px;
  } ;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const ListItem = styled.div`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: #ffaacf;
    -webkit-text-stroke: 0;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    overflow: hidden;
    width: 0px;
    top: 0;
    left: 0;
    color: #ffaacf;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.25s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Gbm = () => {
  const [gbm, setGbm] = useState("Reddy");

  return (
    <Section>
      <Container>
        <Left>
          {gbm === "Reddy" ? (
            <Reddy />
          ) : gbm === "Sapar" ? (
            <Sapar />
          ) : gbm === "Wahyu" ? (
            <Wahyu />
          ) : gbm === "Sapri" ? (
            <Sapri />
          ) : (
            <Melody />
          )}
        </Left>
        <Right>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setGbm(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Right>
      </Container>
    </Section>
  );
};

export default Gbm;
