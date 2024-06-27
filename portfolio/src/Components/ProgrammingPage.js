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
  margin-top: -2rem;
`;

const InnerContainer = styled.div`
  width: 90%;
  height: 80%;
`;

const H4 = styled.h4`
  margin-top: 3%;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 80%;
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
  margin: 1rem 0;
  @media (max-width: 1000px) {
    width: 80%;
    border: none;
  }
  @media (max-width: 768px) {
    width: 50%;
    height: auto;
    border: none;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
  @media (max-width: 1000px) {
    margin-bottom: 1.5rem;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
`;

const Ul = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Li = styled.li`
  margin-left: 20%;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    margin-left: 0;
    margin-bottom: 1.5rem;
  }
`;

const Span = styled.span`
  margin-left: 1rem;
`;

const P = styled.p`
  font-size: 18px;
  color: crimson;
  letter-spacing: 0.15rem;
  margin-top: 0.5rem;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export default function ProgrammingPage() {
  return (
    <Container>
      <InnerContainer>
        <Body>
          <Box>
            <Top>
              <H4>Frontend</H4>
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
                    Wordpress<P>Intermediate</P>
                  </Span>
                </Li>
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
              <H4>Backend</H4>
            </Top>
            <Bottom>
              <Ul>
                <Li>
                  <GoVerified />
                  <Span>
                    PHP<P>Advanced</P>
                  </Span>
                </Li>
                <Li>
                  <GoVerified />
                  <Span>
                    Java<P>Intermediate</P>
                  </Span>
                </Li>
                <Li>
                  <GoVerified />
                  <Span>
                    mySQL<P>Intermediate</P>
                  </Span>
                </Li>
              </Ul>
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
                    Express JS<P>Basic</P>
                  </Span>
                </Li>
                <Li>
                  <GoVerified />
                  <Span>
                    Laravel 8<P>Advanced</P>
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
