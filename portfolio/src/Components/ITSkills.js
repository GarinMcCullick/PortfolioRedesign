import React from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";

const Container = styled.div`
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
  max-height: 80vh;
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

const H4 = styled.h4`
  font-size: 1.25rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #ff7f7f;
  border-bottom: 1px solid #444;
  padding-bottom: 0.25rem;
`;

const ServicesDiv = styled.div`
  margin-bottom: 0rem;
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

const Middle = styled.div`
  width: 100%;
`;

const Bottom = styled.div`
  width: 100%;
`;

const services = {
  Microsoft: [
    ["Entra ID", "Advanced"],
    ["365 Admin Center", "Intermediate"],
    ["Copilot", "Intermediate"],
    ["Intune", "Intermediate"],
    ["Windows Admin Center", "Intermediate"],
  ],
  Google: [
    ["Admin console", "Advanced"],
    ["Cloud Identity", "Intermediate"],
    ["Cloud IAM", "Intermediate"],
    ["Security Center", "Intermediate"],
    ["Endpoint Management", "Intermediate"],
    ["Vault", "Intermediate"],
  ],
  OtherServices: [
    ["Powerschool", "Intermediate"],
    ["SpiceWorks", "Intermediate"],
    ["Canvas", "Intermediate"],
    ["Clever", "Intermediate"],
    ["Jenzabar", "Intermediate"],
  ],
};

const networking = [
  ["Protocols", "TCP/IP - DHCP"],
  ["Avaya IP Management", "Intermediate"],
  ["Brands", "Cisco, Dell, NetGear..."],
  ["Hardware", "APs, NICs, Switches, DNS, Servers..."],
  ["Active Directory", "Intermediate"],
  ["Adtran", "Intermediate"],
];

export default function ITPage() {
  return (
    <Container>
      <InnerContainer>
        <Body>
          {/* Services Box */}
          <Box>
            <Top>
              <H3>Services</H3>
            </Top>
            <Middle>
              <ServicesDiv>
                <H4>Microsoft</H4>
                <Ul>
                  {services.Microsoft.map(([title, level]) => (
                    <Li key={title}>
                      <GoVerified size="1.1em" color="crimson" />
                      <Span>
                        {title}
                        <P>{level}</P>
                      </Span>
                    </Li>
                  ))}
                </Ul>
              </ServicesDiv>
              <ServicesDiv>
                <H4>Google</H4>
                <Ul>
                  {services.Google.map(([title, level]) => (
                    <Li key={title}>
                      <GoVerified size="1.1em" color="crimson" />
                      <Span>
                        {title}
                        <P>{level}</P>
                      </Span>
                    </Li>
                  ))}
                </Ul>
              </ServicesDiv>
              <ServicesDiv>
                <H4>Other Services</H4>
                <Ul>
                  {services.OtherServices.map(([title, level]) => (
                    <Li key={title}>
                      <GoVerified size="1.2em" color="crimson" />
                      <Span>
                        {title}
                        <P>{level}</P>
                      </Span>
                    </Li>
                  ))}
                </Ul>
              </ServicesDiv>
            </Middle>
          </Box>

          {/* Networking Box */}
          <Box>
            <Top>
              <H3>Networking</H3>
            </Top>
            <Bottom>
              <ServicesDiv>
                <Ul>
                  {networking.map(([title, level]) => (
                    <Li key={title}>
                      <GoVerified size="1.2em" color="crimson" />
                      <Span>
                        {title}
                        <P>{level}</P>
                      </Span>
                    </Li>
                  ))}
                </Ul>
              </ServicesDiv>
            </Bottom>
          </Box>
        </Body>
      </InnerContainer>
    </Container>
  );
}
