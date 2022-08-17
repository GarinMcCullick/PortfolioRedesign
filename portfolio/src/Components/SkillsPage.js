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
`;

const InnerContainer = styled.div`
  width: 90%;
  height: 80%;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 48px;
`;

const H3 = styled.h3`
  font-size: 18px;
  color: crimson;
`;

const H4 = styled.h4`
  margin-top: 3%;
`;

const Body = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  width: 40%;
  height: 70%;
  border: 2px solid crimson;
  border-radius: 25px;
  display: flex;
  flex-flow: row wrap;
`;

const Top = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;

const Ul = styled.ul`
  width: 50%;
  height: 100%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: left;
`;

const Li = styled.li`
  margin-left: 20%;
  display: flex;
  flex-flow: row wrap;
`;

const Span = styled.span`
  margin-left: 1rem;
`;

const P = styled.p`
  font-size: 18px;
  color: crimson;
  letter-spacing: 0.15rem;
  margin-top: 0.5rem;
`;

export default function SkillsPage() {
  return (
    <Container id="Skills">
      <InnerContainer>
        <Title>
          <H2>Skills</H2>
          <H3>My Technical Level</H3>
        </Title>
        <Body>
          <Box>
            <Top>
              <H4>Frontend Developer</H4>
            </Top>
            <Bottom>
              <Ul>
                <Li>
                  <GoVerified />
                  <Span>
                    HTML
                    <P>Advanced</P>
                  </Span>
                </Li>
                <Li>
                  <GoVerified />
                  <Span>
                    CSS<P>Advanced</P>
                  </Span>
                </Li>
                <Li>
                  <GoVerified />
                  <Span>
                    React<P>Intermediate</P>
                  </Span>
                </Li>
              </Ul>
              <Ul>
                <Li>
                  <GoVerified />
                  <Span>
                    Git<P>Intermediate</P>
                  </Span>
                </Li>
                <Li>
                  <GoVerified />
                  <Span>
                    JavaScript<P>Intermediate</P>
                  </Span>
                </Li>
              </Ul>
            </Bottom>
          </Box>
          <Box>
            <Top>
              <H4>Backend Developer</H4>
            </Top>
            <Bottom>
              <Ul>
                <Li>
                  <GoVerified />
                  <Span>
                    MongoDB<P>Basic</P>
                  </Span>
                </Li>
                <Li>
                  <GoVerified />
                  <Span>
                    Express<P>Basic</P>
                  </Span>
                </Li>
              </Ul>
              <Ul>
                <Li>
                  <GoVerified />
                  <Span>
                    Node Js<P>Intermediate</P>
                  </Span>
                </Li>
                <Li>
                  <GoVerified />
                  <Span>
                    Firebase<P>Basic</P>
                  </Span>
                </Li>
              </Ul>
            </Bottom>
          </Box>
        </Body>
      </InnerContainer>
    </Container>
  );
}
