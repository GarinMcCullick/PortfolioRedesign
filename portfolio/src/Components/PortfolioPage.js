import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/autoplay"; // Import Swiper autoplay styles
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Swiper modules

// Global styles for Swiper navigation buttons and pagination dots
const GlobalStyle = createGlobalStyle`
  .swiper-button-next, .swiper-button-prev {
    color: white !important;
    position: absolute;
    top: 50%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    border: 2px solid white; /* Add border */
    border-radius: 50%; /* Make it circular */
    font-size: 1.8rem; /* Adjust size */
    transform: translateY(-50%);
    padding: 12px; /* Add padding */
    width: 60px; /* Fixed width */
    height: 60px; /* Fixed height */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease; /* Smooth transition */
  }

  .swiper-button-next {
    right: 810px; /* Adjust the distance from the right */
    transform: translateY(-620%) rotate(180deg); /* Rotate the next button 180 degrees */
  }

  .swiper-button-prev {
    left: 785px; /* Adjust the distance from the left */
    transform: translateY(-620%) rotate(180deg); /* Keep the previous button facing left */
  }

  .swiper-button-next:hover, .swiper-button-prev:hover {
    color: #fff !important;
    background-color: crimson; /* Change background on hover */
    border-color: crimson; /* Change border color on hover */
  }

  .swiper-pagination-bullet {
    background-color: crimson !important;  /* Set the color of the pagination dots */
    opacity: 0.7; /* Semi-transparent */
    transition: all 0.3s ease; /* Smooth transition */
  }

  .swiper-pagination-bullet-active {
    background-color: crimson !important;  /* Ensure active dots are crimson */
    opacity: 1; /* Fully visible */
    transform: scale(1.2); /* Slightly larger */
  }
  @media (min-width: 769px){
    .swiper-button-next, .swiper-button-prev {
      display: none; /* Show navigation buttons on desktop */
      }
    }
  @media (max-width: 768px) {
    .swiper-button-next, .swiper-button-prev {
      display: none; /* Hide navigation buttons on mobile */
    }

    .swiper-pagination-bullet {
      width: 10px; /* Smaller dots for mobile */
      height: 10px; /* Smaller dots for mobile */
    }
  }
`;

// Styled components (unchanged)
const Container = styled.section`
  width: 100%;
  max-width: 1800px; /* Limit max width */
  height: 100vh;
  display: flex;
  flex-direction: column; /* Stack title and swiper vertically */
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 20px; /* Add padding for spacing */
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto; /* Adjust height for mobile */
    padding: 10px; /* Reduce padding for mobile */
  }
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 30px; /* Add margin below the title */

  @media (max-width: 768px) {
    margin-bottom: 20px; /* Reduce margin for mobile */
  }
`;

const H2 = styled.h2`
  font-size: 48px;
  letter-spacing: 0.2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 36px; /* Smaller font size for mobile */
  }
`;

const H3 = styled.h3`
  font-size: 24px;
  color: crimson;
  margin-top: 0.7rem;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 18px; /* Smaller font size for mobile */
  }
`;

const SwiperWrapper = styled.div`
  width: 100%;
  height: 80%; /* Adjusted to ensure proper swiper visibility */
  position: relative;
  padding-left: 30px; /* Space for the left arrow */
  padding-right: 30px; /* Space for the right arrow */
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: auto; /* Adjust height for mobile */
    padding: 0; /* Remove padding for mobile */
  }
`;

const GridItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.7s ease;
  z-index: 1;
  height: 350px; /* Adjusted for uniformity */
  width: 90%; /* Full width */
  max-width: 600px; /* Max width per item */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
  margin: 15px; /* Add margin between items */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Hide overflow for rounded corners */

  @media (max-width: 768px) {
    height: 250px; /* Adjust height for mobile */
    margin: 10px; /* Reduce margin for mobile */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
  transform: scale(1); /* Initial scale */
  &:hover {
    transform: scale(1.1); /* Slight zoom effect on hover */
  }
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
    transform: scale(1.1); /* Slight zoom effect on hover */
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
    githubLink: "",
  },
  {
    title: "Project 3",
    imageSrc: process.env.PUBLIC_URL + "/DobbsCustomsPic.png",
    liveLink: "",
    githubLink: "https://github.com/GarinMcCullick/DobbsCustoms",
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
        <SwiperWrapper>
          <Swiper
            spaceBetween={20} // Space between slides
            slidesPerView={2} // Display 2 slides at once
            loop={true} // Enable looping
            modules={[Pagination, Navigation, Autoplay]} // Add Pagination, Navigation, and Autoplay modules
            effect="slide" // Optional, for smoother sliding effect
            direction="horizontal" // Default direction (for desktop)
            navigation={{
              nextEl: ".swiper-button-next", // Custom navigation next button
              prevEl: ".swiper-button-prev", // Custom navigation prev button
            }}
            autoplay={{
              delay: 3000, // Delay between slides in milliseconds (3 seconds)
              disableOnInteraction: true, // Continue autoplay after user interaction
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3, // Show 3 slides on desktop
              },
              768: {
                slidesPerView: 2, // Show 2 slides on tablets
              },
              480: {
                slidesPerView: 1, // Show 1 slide on mobile
              },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <GridItem>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>

        {/* Navigation and Pagination below the carousel */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "20px",
            position: "relative",
          }}
        >
          {/* Pagination */}
          <div className="swiper-pagination" />
          {/* Navigation Buttons */}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </Container>
    </>
  );
}
