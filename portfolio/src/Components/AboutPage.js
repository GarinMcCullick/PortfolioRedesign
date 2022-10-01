import React from "react";
import styled from "styled-components";
import {
  ImFilePdf,
  ImArrowRight2,
  ImStack,
  ImUngroup,
  ImDisplay,
} from "react-icons/im";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 85%;
  height: 85%;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
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
  height: 90%;
  display: flex;
  flex-flow: column wrap;
`;

const PicContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Pic = styled.img`
  height: 60%;
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const About = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Section1 = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  width: 30%;
  height: 80%;
  border: 1px solid red;
  border-radius: 25px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: start;
  :hover {
    border: 1px solid white;
    cursor: pointer;
  }
`;

const Span = styled.span`
  width: auto;
  height: 100%;
  margin-left: 2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: start;
  font-size: 24px;
`;

const Span2 = styled.span`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const ArrowRight = styled(ImArrowRight2)`
  margin-left: 1rem;
`;

const Section2 = styled.div`
  width: 100%;
  height: 50%;
  line-height: 2rem;
  letter-spacing: 0.2rem;
`;

const Section3 = styled.div`
  width: 20%;
  height: 15%;
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
  flex-flow: row nowrap;
  justify-content: space-evenly;
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
            <Section1>
              <Box>
                <Span>
                  <ImStack />
                  <p>full stack web designer</p>
                  <Span2>
                    view more
                    <ArrowRight />
                  </Span2>
                </Span>
              </Box>
              <Box>
                <Span>
                  <ImUngroup />
                  <p>ui/ux engineer</p>{" "}
                  <Span2>
                    view more <ArrowRight />
                  </Span2>
                </Span>
              </Box>
              <Box>
                <Span>
                  <ImDisplay />
                  <p>Interface Design</p>{" "}
                  <Span2>
                    view more <ArrowRight />
                  </Span2>
                </Span>
              </Box>
            </Section1>
            <Section2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </Section2>
            <Section3>
              <Button>
                <A
                  href={process.env.PUBLIC_URL + "/Resume.pdf"}
                  target="_blank"
                >
                  <ImFilePdf size={20} />
                  Open CV
                </A>
              </Button>
            </Section3>
          </About>
        </Body>
      </InnerContainer>
    </Container>
  );
}
