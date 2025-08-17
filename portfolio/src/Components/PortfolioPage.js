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
  width: 75vw;
  max-width: 90vw;
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
  gap: 42px;
  justify-content: left;
  width: 100%;
  max-width: 100%;
`;

const Card = styled.div`
  border-radius: 12px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* 3 cards per row */
  width: calc((100% - 64px) / 3);
  max-width: 420px;

  &:hover {
    transform: translateY(-5px);
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

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const TechItem = styled.span`
  display: inline-block;
  background: ${(props) => props.bgColor || "#333"};
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 0.85rem;
  font-weight: 500;
  color: white;
  white-space: nowrap;
  transition: transform 0.2s ease, background 0.3s ease;
  transform-origin: center center;
  will-change: transform;

  &:hover {
    transform: scale(1.05);
    cursor: default;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 5px 10px;
  }
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
      "Centralized management for a gaming organization by creating a platform that tracks members, events, and game stats. Built with React frontend and Flask backend, integrated Firebase for real-time updates, and Discord OAuth for secure member login.",
    stack: ["React.js", "Python", "Flask", "Firebase", "Discord API"],
  },
  {
    category: "website",
    title: "Genesis",
    imageSrc: process.env.PUBLIC_URL + "/Genesis.png" || placeholderImg,
    liveLink: "https://genesisguild.net",
    githubLink: "",
    description:
      "Supported a community of over 300 active members on a WordPress gaming site by implementing custom PHP features, database integration, and Discord OAuth for automated role synchronization and user management.",
    stack: ["PHP", "Python", "MySQL", "Discord API", "WordPress"],
  },
  {
    category: "website",
    title: "Agency",
    imageSrc: process.env.PUBLIC_URL + "/AgencyPic.png" || placeholderImg,
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/NewWorldProject",
    description:
      "Streamlined a gaming organization's website by creating a React frontend with Firebase backend, integrating Discord OAuth for automated member authentication.",
    stack: ["React.js", "Firebase", "Discord API"],
  },
  {
    category: "website",
    title: "Dobbs Customs",
    imageSrc: process.env.PUBLIC_URL + "/DobbsCustomsPic.png" || placeholderImg,
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/DobbsCustoms",
    description:
      "Built a simple, responsive storefront to showcase custom products, using HTML, CSS, and JavaScript to provide a clean, user-friendly browsing experience.",
    stack: ["HTML5", "CSS3", "JavaScript"],
  },
  // Software Projects
  {
    category: "software",
    title: "FollowUp.ai",
    imageSrc: process.env.PUBLIC_URL + "/followupaipic.png" || placeholderImg,
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/followup.ai",
    description:
      "Automated follow-up email generation by scraping job postings and using OpenAI's API. Built as a Chrome extension with a React frontend and Flask backend to streamline job application workflows.",
    stack: ["React.js", "Python", "Flask", "OpenAI"],
  },
  {
    category: "software",
    title: "Active Directory Tooling",
    imageSrc: process.env.PUBLIC_URL + "/adtoolingpic.png" || placeholderImg,
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/Public-AD-Tooling",
    description:
      "Simplified user management in Microsoft environments by creating a PowerShell GUI tool that adds users individually or in bulk, logs actions, and drafts automated welcome emails.",
    stack: ["PowerShell"],
  },
  // Apps
  {
    category: "app",
    title: "LawnFinder",
    imageSrc: process.env.PUBLIC_URL + "/LawnFinderpic.png" || placeholderImg,
    liveLink: "",
    githubLink: "",
    description:
      "Connecting local users with lawn care providers via a mobile app built in Swift. Integrated Firebase and Google Cloud Storage to manage user data and provider listings efficiently.",
    stack: ["Swift", "Firebase", "Google Cloud Storage"],
  },
];

// Helper to determine if only one row (<=3 projects)
const isSingleRow = (count) => count > 0 && count <= 3;

export default function PortfolioPage() {
  const getProjectsByCategory = (category) =>
    projects.filter((p) => p.category === category);

  function getTechColor(tech) {
    const frontend = ["React.js", "JavaScript", "CSS3", "HTML5", "Swift"];
    const backend = ["Node.js", "Python", "Flask", "PHP", "MySQL", "SQL"];
    const services = ["Discord API", "OAuth", "REST", "OpenAI"];
    const cloud = [
      "Firebase",
      "PowerShell",
      "WordPress",
      "Google Cloud Storage",
      "Azure",
    ];

    if (frontend.includes(tech)) return "#c23355"; // lighter crimson for frontend
    if (backend.includes(tech)) return "#b00020"; // deep crimson for backend
    if (services.includes(tech)) return "#5865F2"; // Discord blurple for services
    if (cloud.includes(tech)) return "#4361ee"; // steel blue for cloud/infra
    return "#444"; // fallback gray
  }

  return (
    <>
      <GlobalStyle />
      <Container id="Portfolio">
        <PageTitle>
          <h1>Portfolio</h1>
          <p>Most Recent Work</p>
        </PageTitle>

        {["software", "website", "app"].map((category) => {
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
                      <Stack>
                        {project.stack &&
                          project.stack.map((tech, index) => (
                            <TechItem key={index} bgColor={getTechColor(tech)}>
                              {tech}
                            </TechItem>
                          ))}
                      </Stack>
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
