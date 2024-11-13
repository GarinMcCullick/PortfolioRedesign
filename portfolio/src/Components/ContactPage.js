import React from "react";
import styled, { keyframes } from 'styled-components';
import { ImPhone, ImMail4, ImLinkedin, ImArrowRight2 } from "react-icons/im";


// Container setup
const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 48px;
  letter-spacing: 0.2rem;
  @media (max-width: 480px) {
    font-size: 34px;
  }
`;

const H3 = styled.h3`
  font-size: 24px;
  color: crimson;
  margin-top: 0.7rem;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const backgroundAnimation = keyframes`
  0% {
    background-color: white;
  }
  100% {
    background-color: #4682B4; /* Steel blue */
  }
`;

const Box = styled.div`
  color: #282c34;
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 25px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  @media (max-width: 768px) {
    width: 250px;
    height: 450px;
  }

  @media (max-width: 480px) {
    width: 90%;
    max-width: 300px;
    height: 150px;
    flex-grow: 1;
  }

  /* Hover effect - background color change with animation */
  :hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    animation: ${backgroundAnimation} 0.5s ease forwards;
  }
`;

const A = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: rgb(60, 60, 60);

  :visited {
    color: rgb(60, 60, 60);
  }

  :hover {
    color: white;
  }
`;

export default function ContactPage() {
  return (
    <Container id="Contact">
      <Title>
        <H2>Contact</H2>
        <H3>Feel free to reach out via channels below!</H3>
      </Title>
      <Box>
        <A href="tel:5736808460" target="_blank" rel="noopener noreferrer">
          <ImPhone size={64} />
          <p>573-680-8460</p>
          <p>Phone</p>
          <ImArrowRight2 />
        </A>
      </Box>
      <Box>
        <A href="mailto: glmccullick@gmail.com" target="_blank" rel="noopener noreferrer">
          <ImMail4 size={64} />
          <p>glmccullick@gmail.com</p>
          <p>Email</p>
          <ImArrowRight2 />
        </A>
      </Box>
      <Box>
        <A
          href="https://www.linkedin.com/in/garin-mccullick-891a2320a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImLinkedin size={64} />
          <p>LinkedIn</p>
          <ImArrowRight2 />
        </A>
      </Box>
    </Container>
  );
}
