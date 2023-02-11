import React from "react";
import styled from "styled-components";
import { IoTrendingDownOutline } from "react-icons/io5";

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
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

const About = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  padding: 5%;
  width: 100%;
  height: 20%;
  text-align: center;
  font-size: 48px;
  border-bottom: 5px solid crimson;
  border-top: 5px solid crimson;
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Pic = styled.img`
  height: 60%;
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 1000px) {
    height: 80%;
    width: 80%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const Span2 = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const DoubleDown = styled(IoTrendingDownOutline)`
  margin-top: -4px;
  font-size: 70px;
  color: crimson;
  transform: rotate(45deg);
`;

export default function LandingPage() {
  return (
    <Container id="/">
      <InnerContainer>
        <About>
          <Div>
            <Title>
              <h1>
                My name is <Span>Garin McCullick</Span>.<br />
                <br />
                Welcome to my portfolio!
              </h1>
            </Title>
            <Span2>
              <DoubleDown />
            </Span2>
          </Div>
        </About>
        <PictureContainer>
          <Pic src={process.env.PUBLIC_URL + "/profile6.jpeg"}></Pic>
        </PictureContainer>
      </InnerContainer>
    </Container>
  );
}
