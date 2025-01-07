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
  margin-bottom: 1rem;
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
  align-items: flex-start;
`;

const Box = styled.div`
  overflow: auto;
  width: 45%;
  height: auto;
  max-height: 70vh;
  border: 2px solid rgba(220, 20, 60, 0.2);
  border-radius: 25px;
  display: flex;
  flex-flow: column wrap;
  box-sizing: border-box;
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
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px); /* Safari support */
  background: rgba(220, 20, 60, 0.2); /* Crimson with transparency */
  text-align: center;
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const Bottom = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const Ul = styled.ul`
  width: 45%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Li = styled.li`
  margin-left: 0;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
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
