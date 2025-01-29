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
  width: 100%;
  height: 80%;
`;

const H3 = styled.h3`
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 40px;
  color: white; /* Ensure pure white color */
  margin: 0;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const H4 = styled.h4`
  border-bottom: 1px solid white;
  margin-top: 3%;
  margin-bottom: 3%;
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
  flex-flow: row wrap;
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
  /* Specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; /* Set width of the vertical scrollbar */
    height: 8px; /* Set height of the horizontal scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom,
      rgba(220, 20, 60, 0.2),
      white
    ) !important; /* Adding darkred to make the transition even smoother */
    border-radius: 10px; /* Rounded corners */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: crimson; /* Darken the thumb on hover */
    cursor: grab;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* Make the track transparent */
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

  @media (max-width: 1000px) {
    margin-bottom: 1.5rem;
  }
`;

const Middle = styled.div`
  width: 100%;
  padding: 1rem;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const ServicesDiv = styled.div`
  margin-bottom: 5rem;
`;

const Ul = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style-type: none;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  margin-left: 0;
`;

const Span = styled.span`
  margin-left: 1rem;

  p {
    filter: inherit; /* Allow blur to apply to P within Span */
  }
`;

const P = styled.p`
  font-size: 18px;
  color: crimson; /* Default color */
  letter-spacing: 0.15rem;
  margin-top: 0.5rem;

  /* Apply blur and gradient effect */
  background: linear-gradient(90deg, crimson, #ff7f7f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: blur(2px); /* Apply blur */
  transition: filter 0.3s ease-in-out;

  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export default function ITPage() {
  return (
    <Container>
      <InnerContainer>
        <Body>
          <Box>
            <Top>
              <H3>Services</H3>
            </Top>
            <Middle>
              <ServicesDiv>
                <H4>Microsoft</H4>
                <Ul>
                  <Li>
                    <GoVerified />
                    <Span>
                      Entra ID<P>Advanced</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      365 Admin Center<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Copilot<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Intune<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Windows Admin Center<P>Intermediate</P>
                    </Span>
                  </Li>
                </Ul>
              </ServicesDiv>
              <ServicesDiv>
                <H4>Google</H4>
                <Ul>
                  <Li>
                    <GoVerified />
                    <Span>
                      Admin console<P>Advanced</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Cloud Identity<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Cloud IAM<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Security Center<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Endpoint Management<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Vault<P>Intermediate</P>
                    </Span>
                  </Li>
                </Ul>
              </ServicesDiv>
              <ServicesDiv>
                <H4>Other Services</H4>
                <Ul>
                  <Li>
                    <GoVerified />
                    <Span>
                      Powerschool<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      SpiceWorks<P>Intermediate</P>
                    </Span>
                  </Li>
                </Ul>
                <Ul>
                  <Li>
                    <GoVerified />
                    <Span>
                      Canvas<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Clever<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Jenzabar<P>Intermediate</P>
                    </Span>
                  </Li>
                </Ul>
              </ServicesDiv>
            </Middle>
          </Box>
          <Box>
            <Top>
              <H3>Networking</H3>
            </Top>
            <Bottom>
              <ServicesDiv>
                <Ul>
                  <Li>
                    <GoVerified />
                    <Span>
                      Protocols <P>TCP/IP - DHCP</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Avaya IP Management<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Brands<P>Cisco, Dell, NetGear...</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Hardware<P>APs, NICs, Switches, DNS, Servers...</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Active Directory<P>Intermediate</P>
                    </Span>
                  </Li>
                  <Li>
                    <GoVerified />
                    <Span>
                      Adtran<P>Intermediate</P>
                    </Span>
                  </Li>
                </Ul>
              </ServicesDiv>
            </Bottom>
          </Box>
        </Body>
      </InnerContainer>
    </Container>
  );
}
