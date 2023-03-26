import React, { useRef, useState } from "react";
import styled from "styled-components";
import gif from "../../public/img/gbmantep.gif";

import emailjs from "@emailjs/browser";

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  } ;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  } ;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  border: none;
  border-radius: 5px;
  padding: 20px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #b45dbb;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Gif = styled.img`
  width: 520px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  padding-top: 200px;

  animation: animate 1.5s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(22px);
    }
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4iclepn",
        "template_88o2t6b",
        ref.current,
        "lJdPBRULwuPvd639s"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Kritik & Saran </Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write Your Message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Pesan kamu sudah terkirim ya sayang 😚, tungguin aja nanti direspon kalau bisa 💜 "}
          </Form>
        </Left>
        <Right>
          <Gif src={gif} alt="loading..." />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
