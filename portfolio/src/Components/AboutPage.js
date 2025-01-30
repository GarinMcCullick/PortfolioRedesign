import React from "react";
import styled from "styled-components";
import { ImFilePdf } from "react-icons/im";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff; /* Light text */
  padding-top: 2rem;
  overflow: hidden; /* Prevents overflow */
  @media (max-width: 1000px) {
    height: auto;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  height: 100%;
  padding: 2rem 1rem;
`;

const Title = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 0.05rem;
  font-weight: bold;
`;

const H3 = styled.h3`
  font-size: 1.4rem;
  color: crimson;
  margin-top: 0.5rem;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 150px); /* Adjust height to fit within 100vh */
  overflow: hidden;
  @media (max-width: 1000px) {
    height: auto;
  }
`;

const PicContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  position: relative;

  margin-right: 6rem;

  @media (max-width: 1000px) {
    display: none; /* Hides image on mobile */
  }
`;

const Pic = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const About = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 2rem;
  overflow-y: auto; /* Enables scrolling */
  max-height: 100vh;
  @media (max-width: 1000px) {
    padding-right: 0;
    max-height: none;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
  line-height: 1.8;
  display: flex;
  flex-wrap: row wrap;

  h2 {
    font-size: 1.5rem;
    color: crimson;
    margin-bottom: 0.5rem;
    flex-basis: 100%;
  }

  p {
    flex-basis: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: left;
  }
`;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: crimson;
  color: white;
  font-size: 1rem;
  padding: 12px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(220, 20, 60, 0.5);
  margin-top: 2rem;

  &:hover {
    background: #ff3b5a;
    box-shadow: 0 0 15px rgba(220, 20, 60, 0.7);
  }

  svg {
    margin-right: 8px;
  }
`;

export default function AboutPage() {
  return (
    <Container id="About">
      <InnerContainer>
        <div>
          <Title>
            <H2>About Me</H2>
            <H3>My Introduction</H3>
          </Title>

          <Body>
            <PicContainer>
              <Pic
                src={process.env.PUBLIC_URL + "/profile4.jpg"}
                alt="Profile"
              />
            </PicContainer>

            <About>
              <Section>
                <h2>Development Expertise</h2>
                <p>
                  I specialize in <strong>HTML, CSS, and JavaScript</strong>{" "}
                  with advanced knowledge of <strong>PHP and MySQL</strong>,
                  allowing me to build{" "}
                  <strong>dynamic, scalable web applications</strong>. I also
                  have intermediate proficiency in{" "}
                  <strong>React, WordPress, Laravel, Java, and Python</strong>,
                  ensuring versatility across the stack.
                </p>
              </Section>

              <Section>
                <h2>IT & Cloud Administration</h2>
                <p>
                  With <strong>advanced expertise</strong> in{" "}
                  <strong>
                    Microsoft Entra ID, Google Admin Console, and SQL databases
                  </strong>
                  , I help businesses manage{" "}
                  <strong>identity, security, and infrastructure</strong>. My
                  experience in{" "}
                  <strong>
                    Microsoft 365 Admin, Copilot, Intune, Windows Admin Center,
                    and Google Cloud IAM
                  </strong>{" "}
                  ensures seamless cloud operations.
                </p>
              </Section>

              <Section>
                <h2>Networking & Systems Management</h2>
                <p>
                  I have experience with{" "}
                  <strong>
                    TCP/IP, DHCP, Avaya IP, Cisco, Dell, and NetGear systems
                  </strong>
                  . My work with{" "}
                  <strong>
                    Active Directory, Adtran, and enterprise networking hardware
                  </strong>{" "}
                  optimizes{" "}
                  <strong>performance, security, and scalability</strong>.
                </p>
              </Section>

              <Section>
                <h2>EdTech & Enterprise Software</h2>
                <p>
                  I have <strong>expertise</strong> in managing{" "}
                  <strong>
                    PowerSchool, SpiceWorks, Canvas, Clever, and Jenzabar
                  </strong>
                  , helping institutions streamline{" "}
                  <strong>IT, education, and enterprise operations</strong>.
                </p>
              </Section>

              <Section>
                <StyledButton
                  href={process.env.PUBLIC_URL + "/Resume.pdf"}
                  target="_blank"
                >
                  <ImFilePdf size={20} />
                  Open CV
                </StyledButton>
              </Section>
            </About>
          </Body>
        </div>
      </InnerContainer>
    </Container>
  );
}
