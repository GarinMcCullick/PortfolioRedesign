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
  width: 85%;
  height: 85%;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 48px;
  letter-spacing: 0.3rem;
`;

const H3 = styled.h3`
  font-size: 24px;
  letter-spacing: 0.2rem;
  color: crimson;
`;

const Body = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-flow: column wrap;
`;

const PicContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Pic = styled.div`
  width: 50%;
  height: 50%;
  border: 1px solid red;
`;

const About = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Section1 = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  width: 30%;
  height: 80%;
  border: 1px solid red;
  border-radius: 25px;
`;

const Section2 = styled.div`
  width: 100%;
  height: 50%;
  line-height: 2rem;
  letter-spacing: 0.2rem;
`;

const Section3 = styled.div`
  width: 20%;
  height: 15%;
`;

export default function AboutPage() {
  return (
    <Container id="About">
      <InnerContainer>
        <Title>
          <H2>About Me</H2>
          <H3>My Introduction</H3>
        </Title>
        <Body>
          <PicContainer>
            <Pic></Pic>
          </PicContainer>
          <About>
            <Section1>
              <Box></Box>
              <Box></Box>
              <Box></Box>
            </Section1>
            <Section2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </Section2>
            <Section3>cv download button</Section3>
          </About>
        </Body>
      </InnerContainer>
    </Container>
  );
}
