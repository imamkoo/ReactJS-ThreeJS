import Hero from "./components/Hero";
import Who from "./components/Who";
import Gbm from "./components/Gbm";
import Contact from "./components/Contact";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("../public/img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      {/* <Who /> */}
      <Gbm />
      <Contact />
    </Container>
  );
}

export default App;
