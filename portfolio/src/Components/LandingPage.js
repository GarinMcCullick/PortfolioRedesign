import React from "react";
import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
`;
const InnerContainer = styled.div`
  margin-top: 3%;
  height: 80%;
  width: 85%;
  display: flex;
  flex-flow: column wrap;
`;

const About = styled.div`
  width: 60%;
  height: 100%;
`;

const Title = styled.div`
  margin-top: 10%;
  width: 100%;
  height: 10%;
  text-align: center;
  font-size: 48px;
`;

const Span = styled.span`
  color: crimson;
  border-bottom: 2px solid crimson;
`;

const Body = styled.div`
  width: 90%;
  height: auto;
  font-size: 24px;
  line-height: 2.5rem;
`;

const PictureContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pic = styled.img`
  height: 60%;
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export default function LandingPage() {
  return (
    <Container id="/">
      <InnerContainer>
        <About>
          <Title>
            <h1>
              Hi My name is <Span>Garin McCullick</Span>
            </h1>
          </Title>
          <Body>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </Body>
        </About>
        <PictureContainer>
          <Pic src={process.env.PUBLIC_URL + "/profile2.jpg"}></Pic>
        </PictureContainer>
      </InnerContainer>
    </Container>
  );
}
