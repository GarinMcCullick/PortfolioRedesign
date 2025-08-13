import styled, { createGlobalStyle } from "styled-components";
import { FaGlobe, FaGithub } from "react-icons/fa";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #121212;
    color: #eee;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: crimson;
  }
`;

const Container = styled.section`
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  overflow: visible;
`;

const PageTitle = styled.header`
  text-align: center;
  margin-bottom: 80px;

  h1 {
    font-size: 3.5rem;
    letter-spacing: 0.3rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1.3rem;
    color: crimson;
    font-weight: 600;
  }
`;

const Section = styled.section`
  height: auto;
  min-height: 100%;
  width: 100%;
  margin-bottom: ${(props) => (props.singleRow ? "40px" : "100px")};
  overflow: visible;
  @media (max-width: 768px) {
    margin-bottom: ${(props) => (props.singleRow ? "30px" : "70px")};
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.3rem;
  color: crimson;
  border-bottom: 3px solid crimson;
  padding-bottom: 10px;
  margin-bottom: 50px;
  letter-spacing: 0.1rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 35px;
  }
`;

const CardContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: visible;
  gap: 32px;
  justify-content: left;
  width: 100%;
  max-width: 100%;
`;

const Card = styled.div`
  background: #1f1f1f;
  border-radius: 12px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* 3 cards per row */
  width: calc((100% - 64px) / 3);
  max-width: 380px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgb(255 0 0 / 0.45);
  }

  @media (max-width: 992px) {
    /* 2 cards per row */
    width: calc((100% - 32px) / 2);
  }

  @media (max-width: 768px) {
    /* full width */
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  height: 200px;
  overflow: hidden;
  border-bottom: 3px solid crimson;

  @media (max-width: 768px) {
    height: 160px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

const CardContent = styled.div`
  padding: 28px 24px 32px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 1.7rem;
`;

const Description = styled.p`
  flex-grow: 1;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ccc;
`;

const Links = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 20px;
`;

const LinkButton = styled.a`
  flex: 1;
  background: crimson;
  color: white;
  font-weight: 700;
  text-align: center;
  padding: 14px 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #b00020;
    color: white;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// Placeholder image in case of missing assets
const placeholderImg = "https://via.placeholder.com/600x400?text=Project+Image";

const projects = [
  // Website Projects
  {
    category: "website",
    title: "FBG",
    imageSrc: process.env.PUBLIC_URL + "/fbgscreenshot.png" || placeholderImg,
    liveLink: "https://fbgrust.com",
    githubLink: "https://github.com/GarinMcCullick/FBGfrontend",
    description:
      "A gaming org platform built with React, Firebase, Python backend, and Discord OAuth.",
  },
  {
    category: "website",
    title: "Genesis",
    imageSrc: process.env.PUBLIC_URL + "/Genesis.png" || placeholderImg,
    liveLink: "https://genesisguild.net",
    githubLink: "",
    description:
      "A WordPress-based gaming site with custom PHP, Discord OAuth, role sync, and database integration.",
  },
  {
    category: "website",
    title: "Agency",
    imageSrc: process.env.PUBLIC_URL + "/AgencyPic.png" || placeholderImg,
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/NewWorldProject",
    description:
      "A gaming org site for New World built with React, Firebase, and Discord OAuth integration.",
  },
  {
    category: "website",
    title: "Dobbs Customs",
    imageSrc: process.env.PUBLIC_URL + "/DobbsCustomsPic.png" || placeholderImg,
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/DobbsCustoms",
    description:
      "A simple storefront built with basic HTML and CSS for showcasing custom products.",
  },
  // Software Projects
  {
    category: "software",
    title: "FollowUp.ai",
    imageSrc: process.env.PUBLIC_URL + "/followupaipic.png" || placeholderImg,
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/followup.ai",
    description:
      "This is a chrome extension with a localhost site and python flask backend that uses OpenAI's API to generate follow-up emails by scraping jobsite job postings.",
  },
  {
    category: "software",
    title: "Active Directory Tooling",
    imageSrc: process.env.PUBLIC_URL + "/adtoolingpic.png" || placeholderImg,
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/Public-AD-Tooling",
    description:
      "A Microsoft-only PowerShell tool with GUI that adds users to specific OUs individually or in bulk, logs actions, and drafts welcome emails automatically.",
  },
  // Apps
  {
    category: "app",
    title: "LawnFinder",
    imageSrc: process.env.PUBLIC_URL + "/LawnFinderpic.png" || placeholderImg,
    liveLink: "",
    githubLink: "",
    description:
      "A mobile app, built with Swift, Firebase, and Google Cloud Storage, that connects users with local lawn care providers. Currently in development.",
  },
];

// Helper to determine if only one row (<=3 projects)
const isSingleRow = (count) => count > 0 && count <= 3;

export default function PortfolioPage() {
  const getProjectsByCategory = (category) =>
    projects.filter((p) => p.category === category);

  return (
    <>
      <GlobalStyle />
      <Container id="Portfolio">
        <PageTitle>
          <h1>Portfolio</h1>
          <p>Most Recent Work</p>
        </PageTitle>

        {["website", "software", "app"].map((category) => {
          const categoryProjects = getProjectsByCategory(category);
          const singleRow = isSingleRow(categoryProjects.length);

          const sectionTitle =
            category === "app"
              ? "Apps"
              : category.charAt(0).toUpperCase() +
                category.slice(1) +
                " Projects";

          return (
            <Section key={category} singleRow={singleRow}>
              <SectionTitle>{sectionTitle}</SectionTitle>
              <CardContainerDiv>
                {categoryProjects.map((project, i) => (
                  <Card key={i}>
                    <ImageWrapper>
                      <ProjectImage
                        src={project.imageSrc}
                        alt={project.title}
                      />
                    </ImageWrapper>
                    <CardContent>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <Description>{project.description}</Description>
                      <Links>
                        {project.liveLink && (
                          <LinkButton
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo of ${project.title}`}
                          >
                            <FaGlobe /> Live Page
                          </LinkButton>
                        )}
                        {project.githubLink && (
                          <LinkButton
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repo of ${project.title}`}
                          >
                            <FaGithub /> GitHub
                          </LinkButton>
                        )}
                      </Links>
                    </CardContent>
                  </Card>
                ))}
              </CardContainerDiv>
            </Section>
          );
        })}
      </Container>
    </>
  );
}
