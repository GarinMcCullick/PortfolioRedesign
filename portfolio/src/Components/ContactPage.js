import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ImCheckmark } from "react-icons/im";

const Container = styled.section`
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

const anime = keyframes`
0% {
      -webkit-transform: translateY(50%);
      opacity: 0;
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
    }
`;

const Button = styled.button`
  :hover {
    cursor: pointer;
  }

  background-color: white;

  :after {
    content: "Submit!";
  }
  width: 20%;
  height: 7%;
`;

const SuccessButton = styled.button`
  :hover {
    cursor: pointer;
  }
  background-color: lightgreen;
  :before {
    animation: ${anime} 2s linear;
  }
  width: 20%;
  height: 7%;
`;

const Checkmark = styled(ImCheckmark)`
  animation: ${anime} 1s linear;
`;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const submitClick = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  var submitBtn;
  if (submitted === false)
    submitBtn = (
      <Button type="submit" value="Submit" onClick={submitClick}></Button>
    );
  else {
    submitBtn = (
      <SuccessButton type="submit" value="Submit" onClick={submitClick}>
        {<Checkmark />}
      </SuccessButton>
    );
  }

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
          {submitBtn}
        </RightContainer>
      </InnerContainer>
    </Container>
  );
}
