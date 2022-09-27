import React from "react";
import styled from "styled-components";
import { FaGlobe, FaGithub } from "react-icons/fa";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
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
`;

const H3 = styled.h3`
  font-size: 24px;
  color: crimson;
  margin-top: 0.7rem;
`;

const Body = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  width: 25%;
  height: 60%;
  border-radius: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: white;
`;

const Pic = styled.div`
  width: 90%;
  height: 70%;
  border: 1px solid red;
  margin-top: 5%;
  border-radius: 25px;
`;

const Label = styled.div`
  width: 100%;
  height: 5%;
  padding-left: 5%;
  color: #282c34;
`;

const Icons = styled.div`
  width: 100%;
  height: 20%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  color: #282c34;
`;

export default function ProjectsPage() {
  return (
    <Container id="Projects">
      <InnerContainer>
        <Title>
          <H2>Portfolio</H2>
          <H3>Most recent work</H3>
        </Title>
        <Body>
          <Box>
            <Pic></Pic>
            <Label>Project</Label>
            <Icons>
              <FaGlobe size={60} />
              <FaGithub size={60} />
            </Icons>
          </Box>
          <Box>
            <Pic></Pic>
            <Label>Project</Label>
            <Icons>
              <FaGlobe size={60} />
              <FaGithub size={60} />
            </Icons>
          </Box>
          <Box>
            <Pic></Pic>
            <Label>Project</Label>
            <Icons>
              <FaGlobe size={60} />
              <FaGithub size={60} />
            </Icons>
          </Box>
        </Body>
      </InnerContainer>
    </Container>
  );
}
