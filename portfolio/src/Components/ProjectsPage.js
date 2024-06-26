import React from "react";
import styled from "styled-components";
import { FaGlobe, FaGithub } from "react-icons/fa";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 48px;
  letter-spacing: 0.2rem;
`;

const H3 = styled.h3`
  font-size: 24px;
  color: crimson;
  margin-top: 0.7rem;
`;

const Body = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1000px) {
    flex-flow: row wrap;
  }
`;

const Box = styled.div`
  width: 25%;
  height: 60%;
  border-radius: 25px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: transparent;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 1000px) {
    height: 50%;
    width: 30%;
  }
`;

const Pic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-repeat: no-repeat;
`;

const Label = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  height: 5%;
  padding-left: 5%;
  color: #282c34;
  font-size: 20px;
`;

const Icons = styled.div`
  width: 100%;
  height: 20%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  font-size: 60px;
  @media (max-width: 1000px) {
    font-size: 50px;
  }
`;

const Globe = styled(FaGlobe)`
  color: whitesmoke;
  :hover {
    color: steelblue;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    color: whitesmoke;
  }
`;

const Github = styled(FaGithub)`
  color: whitesmoke;
  :hover {
    color: crimson;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    color: whitesmoke;
  }
`;

const A = styled.a`
  color: #282c34;
`;

const A1 = styled.a`
  color: #282c34;
  width: 90%;
  height: 70%;
  margin-top: 5%;
  border-radius: 25px;
`;

export default function ProjectsPage() {
  return (
    <Container id="Projects">
      <InnerContainer>
        <Title>
          <H2>Portfolio</H2>
          <H3>Most recent work</H3>
        </Title>
        <Body>
          <Box>
            <A1
              href="https://dobbscustoms.com"
              rel="noreferrer"
              target="_blank"
            >
              <Pic src={process.env.PUBLIC_URL + "/DobbsCustomsPic.png"}></Pic>
            </A1>
            <Label>Dobbs Customs</Label>
            <Icons>
              <A
                href="https://dobbscustoms.com"
                rel="noreferrer"
                target="_blank"
              >
                <Globe />
              </A>
              <A
                href="https://github.com/GarinMcCullick/DobbsCustoms"
                rel="noreferrer"
                target="_blank"
              >
                <Github />
              </A>
            </Icons>
          </Box>
          <Box>
            <A1
              href="https://www.newworld-theagency.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Pic src={process.env.PUBLIC_URL + "/AgencyPic.png"}></Pic>
            </A1>
            <Label>The Agency</Label>
            <Icons>
              <A
                href="https://www.newworld-theagency.com/"
                rel="noreferrer"
                target="_blank"
              >
                <Globe />
              </A>
              <A
                href="https://github.com/GarinMcCullick/NewWorldProject"
                rel="noreferrer"
                target="_blank"
              >
                <Github />
              </A>
            </Icons>
          </Box>
          <Box>
            <A1
              href="https://secret-recipes-gold.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <Pic src={process.env.PUBLIC_URL + "/Recipeazy.png"}></Pic>
            </A1>
            <Label>Recipeazy</Label>
            <Icons>
              <A
                href="https://secret-recipes-gold.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <Globe />
              </A>
              <A
                href="https://github.com/secretFamiltRecipiesCookbook/frontEnd"
                rel="noreferrer"
                target="_blank"
              >
                <Github />
              </A>
            </Icons>
          </Box>
        </Body>
      </InnerContainer>
    </Container>
  );
}
