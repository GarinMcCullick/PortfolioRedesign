import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import {
  ImFilePdf,
  ImArrowRight2,
  ImStack,
  ImUngroup,
  ImDisplay,
  ImCross,
  ImCheckmark,
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const Pic = styled.img`
  height: 60%;
  width: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 768px) {
    display: none;
  }
`;

const About = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Section1 = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Box1 = styled.div`
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

const Box2 = styled.div`
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

const Box3 = styled.div`
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

const slide = keyframes` 
0%,
100% {
  transform: translate(0, 0);
}

50% {
  transform: translate(10px, 0);
}
`;

const ArrowRight = styled(ImArrowRight2)`
  margin-left: 1rem;
`;

const ArrowRight2 = styled(ImArrowRight2)`
  margin-left: 1rem;

  animation: ${slide} 1s ease-in-out infinite;
  margin-left: 9px;
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

const InfoContainer = styled.div`
  width: 40%;
  height: 55%;
  left: 50%;
  top: 50%;
  position: fixed;
  transform: translate(-22%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  color: #282c34;
  z-index: 10;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  line-height: 2rem;
`;

const Exit = styled.div`
  width: 5%;
  height: 5%;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  position: fixed;
  top: 0;
  right: 0;
  color: grey;
  font-size: 20px;
`;

const Checkmark = styled(ImCheckmark)`
  color: green;
  font-size: 18px;
  margin-right: 1rem;
`;

export default function AboutPage() {
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  const [view3, setView3] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  function DefaultShow1() {
    return (
      <Span
        onMouseEnter={() => setHover1(true)}
        onMouseLeave={() => setHover1(false)}
      >
        <ImStack />
        <p>Full Stack Web Designer</p>
        <Span2>
          view more
          {hover1 ? <ArrowRight2 /> : <ArrowRight />}
        </Span2>
      </Span>
    );
  }

  function InfoShow1() {
    return (
      <>
        <InfoContainer>
          <Exit>
            <ImCross />
          </Exit>
          <H3>Full Stack Web Designer</H3>
          <p>Providing quality code to clients and companies!</p>
          <ul>
            <li>
              <Checkmark />
              Development of user interfaces.
            </li>
            <li>
              <Checkmark />
              web page development.
            </li>
            <li>
              <Checkmark />
              Clean and functional code.
            </li>
            <li>
              <Checkmark />
              Creation of UX interactions.
            </li>
          </ul>
        </InfoContainer>
        <Span>
          <ImStack />
          <p>Full Stack Web Designer</p>
          <Span2>
            view more
            <ArrowRight />
          </Span2>
        </Span>
      </>
    );
  }

  function DefaultShow2() {
    return (
      <Span
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        <ImUngroup />
        <p>UI/UX Engineer</p>
        <Span2>view more {hover2 ? <ArrowRight2 /> : <ArrowRight />}</Span2>
      </Span>
    );
  }

  function InfoShow2() {
    return (
      <>
        <InfoContainer>
          <Exit>
            <ImCross />
          </Exit>
          <H3>UI/UX Designer</H3>
          <p>Providing quality code to clients and companies!</p>
          <ul>
            <li>
              <Checkmark />
              Development of user interfaces.
            </li>
            <li>
              <Checkmark />
              web page development.
            </li>
            <li>
              <Checkmark />
              Clean and functional code.
            </li>
            <li>
              <Checkmark />
              Creation of UX interactions.
            </li>
          </ul>
        </InfoContainer>
        <Span>
          <ImUngroup />
          <p>UI/UX Engineer</p>
          <Span2>
            view more <ArrowRight />
          </Span2>
        </Span>
      </>
    );
  }

  function DefaultShow3() {
    return (
      <Span
        onMouseEnter={() => setHover3(true)}
        onMouseLeave={() => setHover3(false)}
      >
        <ImDisplay />
        <p>Interface Designer</p>
        <Span2>view more {hover3 ? <ArrowRight2 /> : <ArrowRight />}</Span2>
      </Span>
    );
  }

  function InfoShow3() {
    return (
      <>
        <InfoContainer>
          <Exit>
            <ImCross />
          </Exit>
          <H3>Interface Designer</H3>
          <p>Providing quality code to clients and companies!</p>
          <ul>
            <li>
              <Checkmark />
              Development of user interfaces.
            </li>
            <li>
              <Checkmark />
              web page development.
            </li>
            <li>
              <Checkmark />
              Clean and functional code.
            </li>
            <li>
              <Checkmark />
              Creation of UX interactions.
            </li>
          </ul>
        </InfoContainer>
        <Span>
          <ImDisplay />
          <p>Interface Designer</p>
          <Span2>
            view more <ArrowRight />
          </Span2>
        </Span>
      </>
    );
  }

  const handleView1 = () => {
    setView1(!view1);
  };

  const handleView2 = () => {
    setView2(!view2);
  };

  const handleView3 = () => {
    setView3(!view3);
  };

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
              <Box1 onClick={handleView1}>
                {view1 ? InfoShow1() : DefaultShow1()}
              </Box1>
              <Box2 onClick={handleView2}>
                {view2 ? InfoShow2() : DefaultShow2()}
              </Box2>
              <Box3 onClick={handleView3}>
                {view3 ? InfoShow3() : DefaultShow3()}
              </Box3>
            </Section1>
            <Section2>
              <p>
                Hi, I'm Garin. I'm a Jr Web Developer that loves programming.
                Mainly I work in PHP, Javascript, React, HTML5, and CSS3. I love
                meeting new and creative people! I play games in my freetime and
                really enjoy watching profesional esports like Valorant and
                League of Legends.
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
