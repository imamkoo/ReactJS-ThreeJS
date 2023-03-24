import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 350px;
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  padding-left: 40px;
`;

const ListItem = styled.li`
  cursor: pointer;
`;
const Logo = styled.img``;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="../../public/img/logocwe.png" width={60} />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Merchandise</ListItem>
            <ListItem>About</ListItem>
          </List>
        </Links>
        <Links>
          <Logo src="../../public/img/logocwk.png" width={70} />
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
