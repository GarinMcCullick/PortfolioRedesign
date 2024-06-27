import React from "react";
import "../App.css";
import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import {
  GoPerson,
  GoCommentDiscussion,
  GoBook,
  GoGraph,
  GoFileCode,
} from "react-icons/go";

const Container = styled.div`
  height: 60px;
  width: 15%;
  border: 2px solid crimson;
  position: fixed;
  left: 1;
  bottom: 50px;
  border-radius: 50px;
  background-color: #282c34;
  @media (max-width: 1000px) {
    display: none;
  }
  z-index: 100;
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
`;

const Li = styled.li`
  padding-top: 10px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export default function Nav() {
  return (
    <>
      <Container className="navContainer">
        <Ul>
          <Li>
            <LinkScroll
              to="/"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <GoPerson size={30} />
            </LinkScroll>
          </Li>
          <Li>
            <LinkScroll
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <GoBook size={30} />
            </LinkScroll>
          </Li>
          <Li>
            <LinkScroll
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              <GoGraph size={30} />
            </LinkScroll>
          </Li>
          <Li>
            <LinkScroll
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              <GoFileCode size={30} />
            </LinkScroll>
          </Li>
          <Li>
            <LinkScroll
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
            >
              <GoCommentDiscussion size={30} />
            </LinkScroll>
          </Li>
        </Ul>
      </Container>
    </>
  );
}
