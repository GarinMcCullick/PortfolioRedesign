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

  const fadeInOut = keyframes`
    0% {
      background-size: 0% 2px;
    }
    100% {
      background-size: 100% 2px;
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
    border-radius: ${(props) =>
      props.left ? "25px 0 0 25px" : "0 25px 25px 0"};
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    p {
      margin: 0;
      text-decoration: none;
      position: relative;
      display: inline-block;
      overflow: visible;
      span {
        display: inline-block;
        vertical-align: middle;
      }

      .letter {
        animation: ${bounce} 2s ease infinite;
      }

      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background-color: crimson;
        background-size: 0% 2px; /* Initially no underline */
        background-repeat: no-repeat;
        animation: ${fadeInOut} 2s linear infinite; /* Animation duration */
        transition: background-size 0.3s ease; /* Smooth transition */
      }
    }

    p.active:after {
      background-size: 100% 2px; /* Full underline when active */
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
