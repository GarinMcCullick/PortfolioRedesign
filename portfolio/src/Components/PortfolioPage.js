import React from "react";
import styled from "styled-components";
import { FaGlobe, FaGithub } from "react-icons/fa";

const Container = styled.section`
  height: 120vh;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-template-rows: repeat(2, 300px); /* Fixed height for each row */
  gap: 20px;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on smaller screens */
    grid-template-rows: repeat(2, 300px); /* Maintain same row height */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column on mobile */
    grid-template-rows: repeat(2, 200px); /* Reduce row height on mobile */
    padding: 20px; /* Adjust padding for smaller screens */
  }
`;

const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.7s ease;
  z-index: 1;
  height: 100%; /* Ensure each GridItem takes up full height of its row */

  &:hover {
    .image-overlay {
      opacity: 1;
      border-radius: 8px;
    }
    transform: scale(1.2); /* scale GridItem on hover */
    z-index: 10; /* Higher z-index on hover */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the entire GridItem */
  border-radius: 8px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* 50% opaque white */
  opacity: 0; /* initially hidden */
  transition: opacity 0.3s ease;
  z-index: 2;
`;

const IconWrapper = styled.div`
  display: none; /* initially hidden */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  gap: 10px; /* Space between icons */

  ${GridItem}:hover & {
    display: flex; /* show on hover */
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  width: 40px; /* Adjust width to fit the icon size */
  height: 40px; /* Adjust height to fit the icon size */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc; /* Default grey color */
  transition: color 0.3s ease;
  border: 1px solid black; /* Black border */
  border-radius: 50%; /* Rounded border for circle icons */
  background-color: #454545; /* Grey background */

  &:hover {
    color: ${({ hoverColor }) => hoverColor}; /* Dynamic hover color */
    background-color: #ccc; /* Maintain grey background on hover */
  }
`;

const GlobeIcon = styled(FaGlobe)`
  width: 100%;
  height: 100%;
`;

const GithubIcon = styled(FaGithub)`
  width: 100%;
  height: 100%;
`;

const projects = [
  {
    title: "Project 1",
    imageSrc: process.env.PUBLIC_URL + "/AgencyPic.png",
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/NewWorldProject",
  },
  {
    title: "Project 2",
    imageSrc: process.env.PUBLIC_URL + "/Genesis.png",
    liveLink: "https://genesisguild.net/",
    githubLink: "", // No GitHub link
  },
  {
    title: "Project 3",
    imageSrc: process.env.PUBLIC_URL + "/DobbsCustomsPic.png",
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/DobbsCustoms",
  },
  // add more projects as needed
];

export default function PortfolioPage() {
  return (
    <Container id="Projects">
      <Title>
        <H2>Portfolio</H2>
        <H3>Most recent work</H3>
      </Title>
      <GridContainer>
        {projects.map((project, index) => (
          <GridItem key={index}>
            <Image src={project.imageSrc} alt={project.title} />
            <ImageOverlay className="image-overlay" />
            <IconWrapper>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon hoverColor="#007bff">
                    <GlobeIcon />
                  </Icon>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon hoverColor="#dc3545">
                    <GithubIcon />
                  </Icon>
                </a>
              )}
            </IconWrapper>
          </GridItem>
        ))}
      </GridContainer>
    </Container>
  );
}
