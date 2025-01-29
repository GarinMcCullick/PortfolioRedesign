import React from "react";
import styled, { keyframes } from "styled-components";
import { ImPhone, ImMail4, ImLinkedin } from "react-icons/im";

// Background color animation on hover
const backgroundAnimation = keyframes`
  0% {
    background-color: white;
  }
  100% {
    background-color: #4682B4; /* Steel blue */
  }
`;

// Glow effect on hover
const glowAnimation = keyframes`
  0% {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: 0px 0px 40px rgba(70, 130, 180, 0.8); /* Stronger glow */
  }
`;

// Container setup
const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 0px;
`;

const H2 = styled.h2`
  font-size: 48px;
  letter-spacing: 0.2rem;
  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const H3 = styled.h3`
  font-size: 24px;
  color: crimson;
  margin-top: 0.7rem;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

// Diamond-shaped box with responsive sizing
const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: rotate(45deg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 10%;
  &:hover {
    animation: ${backgroundAnimation} 0.5s ease forwards,
      ${glowAnimation} 0.5s ease forwards;
    transform: rotate(45deg) scale(1.1);
  }

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

// Inner content rotated back to normal, ensuring link is clickable
const InnerContent = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(60, 60, 60);
  position: absolute;
  transform: rotate(-45deg);
  text-align: center;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;

  &:visited {
    color: rgb(60, 60, 60);
  }

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const P = styled.p`
  margin-top: 5%;
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
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
        <InnerContent
          href="tel:15736808460"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImPhone size={48} />
          <P>Phone</P>
          <P>(573) 680-8460</P>
        </InnerContent>
      </Box>
      <Box>
        <InnerContent
          href="mailto:glmccullick@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImMail4 size={48} />
          <P>Email</P>
          <P>glmccullick@gmail.com</P>
        </InnerContent>
      </Box>
      <Box>
        <InnerContent
          href="https://www.linkedin.com/in/garin-mccullick-891a2320a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImLinkedin size={48} />
          <P>LinkedIn</P>
          <P>Garin McCullick</P>
        </InnerContent>
      </Box>
    </Container>
  );
}
