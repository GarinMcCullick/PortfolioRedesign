import React from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: transparent;
  color: white;

  @media (max-width: 1000px) {
    height: auto;
    padding-top: 5rem;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1600px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;

const Box = styled.div`
  flex: 1 1 45%;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(220, 20, 60, 0.1);
  backdrop-filter: blur(10px);
  overflow: auto;
  max-height: 70vh;
  padding: 1.5rem;

  @media (max-width: 1000px) {
    flex: 1 1 90%;
    max-height: none;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, crimson, #ff7f7f);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const Top = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const H3 = styled.h3`
  font-size: 2rem;
  margin: 0;
  color: white;
  border-bottom: 1px solid crimson;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding: 0;
  list-style: none;
  margin: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;

const Span = styled.span`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-size: 1.15rem;
  color: crimson;
  margin: 0.2rem 0 0 0;
  background: linear-gradient(90deg, crimson, #ff7f7f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.08rem;
  transition: filter 0.3s ease-in-out;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

// Skill arrays
const frontendSkills = [
  ["HTML", "Advanced"],
  ["CSS", "Advanced"],
  ["React", "Intermediate"],
  ["Wordpress", "Intermediate"],
  ["Git", "Intermediate"],
  ["JavaScript", "Advanced"],
];

const backendSkills = [
  ["PHP", "Advanced"],
  ["Java", "Intermediate"],
  ["Python", "Intermediate"],
  ["mySQL", "Advanced"],
  ["MongoDB", "Basic"],
  ["Express JS", "Basic"],
  ["Laravel 8", "Advanced"],
  ["Powershell", "Intermediate"],
  ["SQL Server Management", "Intermediate"],
];

export default function ProgrammingPage() {
  return (
    <Container>
      <InnerContainer>
        <Body>
          {/* Frontend Box */}
          <Box>
            <Top>
              <H3>Frontend</H3>
            </Top>
            <Ul>
              {frontendSkills.map(([skill, level]) => (
                <Li key={skill}>
                  <GoVerified size="1.2em" color="crimson" />
                  <Span>
                    {skill}
                    <P>{level}</P>
                  </Span>
                </Li>
              ))}
            </Ul>
          </Box>

          {/* Backend Box */}
          <Box>
            <Top>
              <H3>Backend</H3>
            </Top>
            <Ul>
              {backendSkills.map(([skill, level]) => (
                <Li key={skill}>
                  <GoVerified size="1.2em" color="crimson" />
                  <Span>
                    {skill}
                    <P>{level}</P>
                  </Span>
                </Li>
              ))}
            </Ul>
          </Box>
        </Body>
      </InnerContainer>
    </Container>
  );
}
