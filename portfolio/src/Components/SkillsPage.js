import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ITPage from "./ITSkills";
import ProgrammingPage from "./ProgrammingPage";

export default function SkillsPage() {
  const [showProgramming, setShowProgramming] = useState(true);

  const Container = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Title = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const H2 = styled.h2`
    font-size: 48px;
    @media (max-width: 768px) {
      font-size: 36px;
    }
  `;

  const H3 = styled.h3`
    font-size: 18px;
    color: crimson;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  `;

  const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-7px);
    }
  `;

  const Switch = styled.div`
    margin-top: 2rem;
    display: flex;
    width: 40%;
    height: 60px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 25px;
    background-color: white;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      width: 80%;
      height: 50px;
    }
  `;

  const SwitchButton = styled.div`
    font-size: 40px;
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${(props) => (props.active ? "crimson" : "white")};
    color: ${(props) => (props.active ? "white" : "crimson")};
    position: relative;
    z-index: 2;
    overflow: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;

    /* Slanted middle using clip-path */
    clip-path: ${(props) =>
      props.left
        ? "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)"
        : "polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0% 50%)"};

    @media (max-width: 768px) {
      font-size: 24px;
    }

    p {
      margin: 0;
      text-decoration: none;
      position: relative;
      display: inline-block;
      z-index: 2;

      span {
        display: inline-block;
        vertical-align: middle;
      }

      .letter {
        animation: ${(props) => (props.active ? bounce : "none")} 2s ease
          infinite;
      }

      /* Default underline */
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: -2px;
        width: 0%;
        height: 2px;
        background-color: crimson;
        transition: width 0.3s ease-in-out, left 0.3s ease-in-out,
          background-color 0.3s ease-in-out;
      }
    }

    /* Hover effect for background expansion */
    &.not-active::before {
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #4682b4;
      transform: scaleX(0);
      transform-origin: ${(props) => (props.left ? "right" : "left")};
      transition: transform 0.3s ease-in-out;
      z-index: 1;
    }

    &.not-active:hover::before {
      transform: scaleX(1);
    }

    &.not-active:hover {
      color: white;
    }

    /* Change underline to blue on hover & expand outward */
    &.not-active:hover p:after {
      width: 100%;
      left: 0;
      background-color: #4682b4; /* Change underline to blue */
    }
  `;

  return (
    <Container id="Skills">
      <Title>
        <H2>Skills</H2>
        <H3>My Technical Experience</H3>
      </Title>
      <Switch>
        <SwitchButton
          onClick={() => setShowProgramming(true)}
          active={showProgramming}
          left
          className={showProgramming ? "active" : "not-active"}
        >
          <p className={showProgramming ? "active" : ""}>
            {showProgramming ? (
              <>
                {Array.from("Programming").map((char, index) => (
                  <span key={index} className="letter">
                    {char}
                  </span>
                ))}
              </>
            ) : (
              "Programming"
            )}
          </p>
        </SwitchButton>
        <SwitchButton
          onClick={() => setShowProgramming(false)}
          active={!showProgramming}
          className={!showProgramming ? "active" : "not-active"}
        >
          <p className={!showProgramming ? "active" : ""}>
            {!showProgramming ? (
              <>
                {Array.from("IT").map((char, index) => (
                  <span key={index} className="letter">
                    {char}
                  </span>
                ))}
              </>
            ) : (
              "IT"
            )}
          </p>
        </SwitchButton>
      </Switch>
      {showProgramming ? <ProgrammingPage /> : <ITPage />}
    </Container>
  );
}
