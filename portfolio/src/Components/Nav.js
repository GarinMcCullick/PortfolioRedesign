import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
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
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const handleClick1 = () =>
    setActive1(true) &
    setActive2(false) &
    setActive3(false) &
    setActive4(false) &
    setActive5(false);
  const handleClick2 = () =>
    setActive1(false) &
    setActive2(true) &
    setActive3(false) &
    setActive4(false) &
    setActive5(false);
  const handleClick3 = () =>
    setActive3(true) &
    setActive1(false) &
    setActive2(false) &
    setActive4(false) &
    setActive5(false);
  const handleClick4 = () =>
    setActive1(false) &
    setActive2(false) &
    setActive3(false) &
    setActive4(true) &
    setActive5(false);
  const handleClick5 = () =>
    setActive1(false) &
    setActive2(false) &
    setActive3(false) &
    setActive4(false) &
    setActive5(true);
  console.log(active1);

  return (
    <Container>
      <Ul>
        <Li>
          <Link
            to="Landing"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <GoPerson
              size={30}
              onClick={handleClick1}
              style={{ color: active1 ? "red" : "white" }}
            />
          </Link>
        </Li>
        <Li>
          <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
            <GoBook
              size={30}
              onClick={handleClick2}
              style={{ color: active2 ? "red" : "white" }}
            />
          </Link>
        </Li>
        <Li>
          <Link to="Skills" spy={true} smooth={true} offset={50} duration={500}>
            <GoGraph
              size={30}
              onClick={handleClick3}
              style={{ color: active3 ? "red" : "white" }}
            />
          </Link>
        </Li>
        <Li>
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <GoFileCode
              size={30}
              onClick={handleClick4}
              style={{ color: active4 ? "red" : "white" }}
            />
          </Link>
        </Li>
        <Li>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <GoCommentDiscussion
              size={30}
              onClick={handleClick5}
              style={{ color: active5 ? "red" : "white" }}
            />
          </Link>
        </Li>
      </Ul>
    </Container>
  );
}
