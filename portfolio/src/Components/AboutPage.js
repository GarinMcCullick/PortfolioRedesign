import React from "react";
import styled, { keyframes } from "styled-components";
import { ImFilePdf } from "react-icons/im";

const moveAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(15px, 25px);
  }
  50% {
    transform: translate(1px, -20px);
  }
  75% {
    transform: translate(20px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Container = styled.section`
  height: 105vh;
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
  margin-bottom: 3rem;
  text-align: center;
  width: 38%;
  justify-self: end;
  @media (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  letter-spacing: 0.05rem;
  font-weight: bold;
  margin-bottom: 1rem;
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
  height: 100%;
  overflow: hidden;
  @media (max-width: 1000px) {
    height: 100%;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  inset 0 6px 6px rgba(0, 0, 0, 0.23);
  animation: ${moveAnimation} 12s ease-in-out infinite;
`;

const About = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 2rem;
  overflow-y: auto; /* Enables scrolling */
  max-height: 90vh;
  @media (max-width: 1000px) {
    padding-right: 0;
    max-height: none;
  }
`;

const Section = styled.div`
  margin-bottom: 1.6rem;
  line-height: 1.8;
  display: flex;
  flex-wrap: row wrap;

  h2 {
    font-size: 2rem;
    color: crimson;
    margin-bottom: 0.5rem;
    flex-basis: 100%;
  }

  p {
    flex-basis: 100%;
    font-size: 1.35rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: left;
    h2 {
      font-size: 1.5rem;
    }
    p {
      flex-basis: 100%;
      font-size: 1.2rem;
    }
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

  &:hover {
    background: #ff3b5a;
    box-shadow: 0 0 15px rgba(220, 20, 60, 0.7);
    color: white;
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
            <H2>Professional Focus</H2>
            <H3>Driving Impact Through Technology</H3>
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
                  Building <strong>dynamic, scalable web applications </strong>
                  that turn complex problems into intuitive, functional
                  experiences. delivering business solutions that drive results,
                  streamline processes, and create measurable value.
                </p>
              </Section>

              <Section>
                <h2>IT & Cloud Administration</h2>
                <p>
                  Ensuring organizations operate securely and efficiently in the
                  cloud. Expertise in{" "}
                  <strong>
                    Microsoft Entra ID, Google Admin Console, and SQL&nbsp;
                  </strong>
                  enables smooth identity, security, and infrastructure
                  management.
                </p>
              </Section>

              <Section>
                <h2>Networking & Systems Management</h2>
                <p>
                  Connecting people and systems seamlessly. Overseeing networks,
                  servers, and virtualized environments ensures operations
                  remain reliable, scalable, and secure—supporting business
                  continuity and growth.
                </p>
              </Section>

              <Section>
                <h2>EdTech & Enterprise Software</h2>
                <p>
                  Streamlining education and organizational operations.
                  Leveraging platforms like{" "}
                  <strong>
                    PowerSchool, SpiceWorks, Canvas, Clever, and Jenzabar
                  </strong>
                  &nbsp; turns complex workflows into intuitive, efficient
                  systems that empower staff and students alike.
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
