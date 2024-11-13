import React from "react";
import styled, { keyframes } from "styled-components";
import { IoTrendingDownOutline } from "react-icons/io5";
import { ImMail4, ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

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
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

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
    height: 60%;
    order: 2;
  }
`;

const Title = styled.div`
  padding: 5%;
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    margin:0px;
    padding:0;
  }
`;

const H1 = styled.h1`
  font-size: 32px;
  line-height: 3rem;
`;

const Icons = styled.span`
display:flex;
justify-content:space-evenly;
width:60%;
border-bottom:2px solid crimson;
margin-bottom:1rem;
font-size: 32px;
padding-bottom:3%;
`
const Mail = styled(ImMail4)`
  background-color:transparent;
  color:white;

:visited {
    color: rgb(60, 60, 60);
  }

  :hover {
    color: #4682B4;
    cursor:pointer;
  }
`

const Linkedin = styled(ImLinkedin)`
  background-color:transparent;
  color:white;

  :visited {
    color: rgb(60, 60, 60);
  }

  :hover {
    color: #4682B4;
    cursor:pointer;
  }
`

const Github = styled(FaGithub)`
  background-color:transparent;
  color:white;

  :visited {
    color: rgb(60, 60, 60);
  }

  :hover {
    color: #4682B4;
    cursor:pointer;
  }
`

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
    width: 100%;
    height:40%;
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
    margin-top:50%;
    height: 60%;
    width: 50%;
    border-radius:50%;
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
  align-items: center;
  animation: ${keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  `} 4s ease-in-out infinite;
`;

const DoubleDown = styled(IoTrendingDownOutline)`
  margin-top: -4px;
  font-size: 70px;
  color: crimson;
  transform: rotate(45deg); /* Rotate arrow to point downwards */
`;

export default function LandingPage() {
  return (
    <Container id="/">
      <InnerContainer>
        <About>
          <Div>
            <Title>
              <H1>
                <Span>Garin McCullick</Span>
                  <br />
                Developer & IT Consultant
              </H1>
            </Title>
            <Icons>
              <a href="mailto: glmccullick@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
              <a href="https://www.linkedin.com/in/garin-mccullick-891a2320a/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="https://github.com/GarinMcCullick" rel="noreferrer" target="_blank">
                <Github />
              </a>
            </Icons>
              <br />
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
