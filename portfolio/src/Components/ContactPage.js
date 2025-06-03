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

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative;
  margin: 0;
  background: transparent;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 50vw solid transparent; /* half viewport width */
    border-right: 50vw solid transparent; /* half viewport width */
    border-bottom: 20px solid rgba(220, 20, 60, 0.8); /* crimson triangle pointing up */

    filter: drop-shadow(0 0 10px rgba(220, 20, 60, 0.8));
  }
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

// *** FIRST declare InnerContent so you can reference it inside Box ***
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
  transition: transform 0.3s ease;

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
    transform: rotate(0deg) scale(1.1);
  }

  &:hover ${InnerContent} {
    transform: rotate(0deg);
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
