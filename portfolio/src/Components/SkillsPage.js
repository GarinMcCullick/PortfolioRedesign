import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ITPage from "./ITSkills";
import ProgrammingPage from "./ProgrammingPage";

export default function SkillsPage() {
  const [showProgramming, setShowProgramming] = useState(false);

  const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    @media (max-width: 1000px) {
      height: auto;
    }
  `;

  const Title = styled.div`
    text-align: center;
    margin-bottom: 2rem;
  `;

  const H2 = styled.h2`
    font-size: 48px;
    margin-bottom: 0.5rem;
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
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  `;

  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  `;

  const Switch = styled.div`
    position: relative;
    display: flex;
    width: 70%;
    max-width: 600px;
    height: 70px;
    background: #f0f0f0;
    border-radius: 35px;
    box-shadow: 0 12px 30px 2px rgba(0, 0, 0, 0.35);
    overflow: hidden;
    @media (max-width: 768px) {
      width: 90%;
      height: 60px;
    }
  `;

  const fillAnimation = keyframes`
    0% { width: 0; left: 0; }
    50% { width: 100%; left: 0; }
    100% { width: 50%; left: ${showProgramming ? "50%" : "0"}; }
  `;

  const ActiveIndicator = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    background: linear-gradient(135deg, crimson, #ff4d6d);
    border-radius: 35px;
    left: ${(props) => (props.active ? "50%" : "0")};
    animation: ${fillAnimation} 0.6s ease forwards;
    z-index: 0;
  `;

  const SwitchButton = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${(props) => (props.active ? "white" : "crimson")};
    cursor: pointer;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    @media (max-width: 768px) {
      font-size: 18px;
    }

    .letter {
      animation: ${(props) => (!props.active ? bounce : "none")} 1.8s ease
        infinite;
    }
  `;

  const FadeWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
    justify-content: center;
    align-items: flex-start;
    animation: ${fadeIn} 0.5s ease;
  `;

  return (
    <Container id="Skills">
      <Title>
        <H2>Skills</H2>
        <H3>My Technical Experience</H3>
      </Title>

      <Switch>
        <ActiveIndicator active={showProgramming} />
        <SwitchButton
          onClick={() => setShowProgramming(false)}
          active={!showProgramming}
        >
          {Array.from("IT").map((c, i) => (
            <span key={i} className="letter">
              {c}
            </span>
          ))}
        </SwitchButton>
        <SwitchButton
          onClick={() => setShowProgramming(true)}
          active={showProgramming}
        >
          {Array.from("Programming").map((c, i) => (
            <span key={i} className="letter">
              {c}
            </span>
          ))}
        </SwitchButton>
      </Switch>

      <FadeWrapper key={showProgramming}>
        {showProgramming ? <ProgrammingPage /> : <ITPage />}
      </FadeWrapper>
    </Container>
  );
}
