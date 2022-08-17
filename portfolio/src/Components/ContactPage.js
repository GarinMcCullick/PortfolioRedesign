import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 80%;
  height: 75%;

  display: flex;
  flex-flow: column wrap;
`;

const LeftContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 30%;
  background-color: white;
  border-radius: 25px;
`;

const RightContainer = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  height: 80%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const NameInput = styled.input`
  width: 60%;
  height: 10%;
  font-size: 24px;
  border: none;
`;

const EmailInput = styled.input`
  width: 60%;
  height: 10%;
  font-size: 24px;
`;

const ProjectInput = styled.textarea`
  width: 60%;
  height: 40%;
  max-height: 60%;
  max-width: 90%;
  font-size: 12px;
`;

const Button = styled.button`
  width: 20%;
  height: 7%;
`;

export default function ContactPage() {
  return (
    <Container id="Contact">
      <InnerContainer>
        <LeftContainer>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </LeftContainer>
        <RightContainer>
          <Title>Write me your project</Title>
          <Form>
            <NameInput placeholder="Insert Your Name"></NameInput>
            <EmailInput placeholder="Insert Your Email"></EmailInput>
            <ProjectInput placeholder="Write Your Project"></ProjectInput>
          </Form>
          <Button type="submit" value="submit">
            Send Message
          </Button>
        </RightContainer>
      </InnerContainer>
    </Container>
  );
}
