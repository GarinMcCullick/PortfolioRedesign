import styled, { createGlobalStyle } from "styled-components";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Global Swiper styles
const GlobalStyle = createGlobalStyle`
.swiper-wrapper {
    transition-timing-function: linear !important;
  }
  .swiper-button-next, .swiper-button-prev {
    color: white !important;
    position: absolute;
    top: 50%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    border: 2px solid white;
    border-radius: 50%;
    font-size: 1.8rem;
    transform: translateY(-50%);
    padding: 12px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  }

  .swiper-button-next {
    right: 810px;
    transform: translateY(-620%) rotate(180deg);
  }

  .swiper-button-prev {
    left: 785px;
    transform: translateY(-620%) rotate(180deg);
  }

  .swiper-button-next:hover, .swiper-button-prev:hover {
    color: #fff !important;
    background-color: crimson;
    border-color: crimson;
  }

  .swiper-pagination-bullet {
    background-color: white !important;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: crimson !important;
    opacity: 1;
    transform: scale(1.2);
  }

  @media (min-width: 769px){
    .swiper-button-next, .swiper-button-prev {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .swiper-button-next, .swiper-button-prev {
      display: none;
    }

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
    }
  }
`;

const Container = styled.section`
  width: 100%;
  max-width: 1800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const H2 = styled.h2`
  font-size: 48px;
  letter-spacing: 0.2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const H3 = styled.h3`
  font-size: 24px;
  color: crimson;
  margin-top: 0.7rem;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SwiperContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 60px; // room for dots
`;

const SwiperWrapper = styled.div`
  width: 100%;
  height: 80%;
  padding: 0 30px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto;
    padding: 0;
  }
`;

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 10px; // adjust as needed
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  .custom-pagination {
    justify-content: center;
    display: flex;
    gap: 10px;
  }
`;

const GridItem = styled.div`
  position: relative;
  cursor: pointer;
  height: 350px;
  width: 90%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover img {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    height: 250px;
    margin: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  transform: scale(1);
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;

  &:hover {
    cursor: grab;
  }
`;

const IconWrapper = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  gap: 10px;

  ${GridItem}:hover & {
    display: flex;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  transition: all 0.3s ease;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #454545;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: #ccc;
    transform: scale(1.1);
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

const DescriptionOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  color: black;
  padding: 1rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  z-index: 3;

  ${GridItem}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    line-height: 1.5;
  }
`;

const DP = styled.p`
  margin: 0.5rem;
  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
`;

const projects = [
  {
    title: "Agency",
    imageSrc: process.env.PUBLIC_URL + "/AgencyPic.png",
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/NewWorldProject",
    description:
      "A gaming org site for New World built with React, Firebase, and Discord OAuth integration.",
  },
  {
    title: "Dobbs Custom",
    imageSrc: process.env.PUBLIC_URL + "/DobbsCustomsPic.png",
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/DobbsCustom",
    description:
      "A simple storefront built with basic HTML and CSS for showcasing custom products.",
  },
  {
    title: "Genesis",
    imageSrc: process.env.PUBLIC_URL + "/Genesis.png",
    liveLink: "https://genesisguild.net",
    githubLink: "",
    description:
      "A WordPress-based gaming site with custom PHP, Discord OAuth, role sync, and database integration.",
  },
  {
    title: "FBG",
    imageSrc: process.env.PUBLIC_URL + "/fbgscreenshot.png",
    liveLink: "https://fbgrust.com",
    githubLink: "https://github.com/GarinMcCullick/FBGfrontend",
    description:
      "A gaming org platform built with React, Firebase, Python backend, and Discord OAuth.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <GlobalStyle />
      <Container id="Projects">
        <Title>
          <H2>Portfolio</H2>
          <H3>Most recent work</H3>
        </Title>
        <SwiperContainer>
          <SwiperWrapper>
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              centeredSlides={true}
              modules={[Pagination, Navigation, Autoplay]}
              direction="horizontal"
              pagination={{ el: ".custom-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              speed={8000}
              autoplay={{
                delay: 1,
                disableOnInteraction: true,
                pauseOnMouseEnter: false,
              }}
              touchRatio={1}
              threshold={20}
              allowTouchMove={true}
              simulateTouch={true}
              breakpoints={{
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                480: { slidesPerView: 1 },
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <GridItem>
                    <Image src={project.imageSrc} alt={project.title} />
                    <ImageOverlay />
                    <DescriptionOverlay>
                      <DP>{project.description}</DP>
                    </DescriptionOverlay>
                    <IconWrapper>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon hoverColor="crimson">
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
                          <Icon hoverColor="crimson">
                            <GithubIcon />
                          </Icon>
                        </a>
                      )}
                    </IconWrapper>
                  </GridItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperWrapper>
          <PaginationWrapper>
            <div className="custom-pagination"></div>
          </PaginationWrapper>
        </SwiperContainer>
      </Container>
    </>
  );
}
