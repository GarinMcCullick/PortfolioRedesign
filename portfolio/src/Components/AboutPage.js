import React from "react";
import styled from "styled-components";
import { ImFilePdf } from "react-icons/im";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 85%;
  height: 85%;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 48px;
  letter-spacing: 0.3rem;
`;

const H3 = styled.h3`
  font-size: 24px;
  letter-spacing: 0.2rem;
  color: crimson;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const PicContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Pic = styled.img`
  height: 100%;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 1000px) {
    display: none;
  }
`;

const About = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Section = styled.div`
  width: 100%;
  margin-top: 2rem;
  line-height: 2rem;
  @media (max-width: 1000px) {
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin-top: 50px;
  :hover {
    cursor: pointer;
  }
`;

const A = styled.a`
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AboutPage() {
  return (
    <Container id="About">
      <InnerContainer>
        <Title>
          <H2>About Me</H2>
          <H3>My Introduction</H3>
        </Title>
        <Body>
          <PicContainer>
            <Pic src={process.env.PUBLIC_URL + "/profile4.jpg"}></Pic>
          </PicContainer>
          <About>
            <Section>
              <p>
                My journey into technology began in high school when I assembled
                my first computer, sparking a lifelong passion. Since then, I've
                continued to build and tinker with computers while diving into
                coding. My formal education includes studies at Bloom Institute
                of Technology, State Technical College of Missouri, and Ozarks
                Technical Community College. Over the years, I've developed
                proficiency across a diverse range of technologies, which you
                can explore below. Thank you for visiting and learning more
                about my journey!
              </p>
            </Section>
            <Section>
              <Button>
                <A
                  href={process.env.PUBLIC_URL + "/Resume.pdf"}
                  target="_blank"
                >
                  <ImFilePdf size={20} />
                  Open CV
                </A>
              </Button>
            </Section>
          </About>
        </Body>
      </InnerContainer>
    </Container>
  );
}
