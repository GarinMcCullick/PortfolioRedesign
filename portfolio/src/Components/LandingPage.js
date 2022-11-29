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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-top: 10%;
  width: 100%;
  height: 20%;
  text-align: center;
  font-size: 48px;
  border: 5px double crimson;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

const Span = styled.span`
  color: crimson;
  border-bottom: 2px solid crimson;
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
        </About>
        <PictureContainer>
          <Pic src={process.env.PUBLIC_URL + "/profile6.jpeg"}></Pic>
        </PictureContainer>
      </InnerContainer>
    </Container>
  );
}
