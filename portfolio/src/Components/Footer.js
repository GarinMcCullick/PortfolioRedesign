import React from "react";
import styled from "styled-components";

const Foot = styled.section`
  width: 100%;
  height: 50px;
  background-color: transparent;
  box-shadow: 0 0 30px 10px rgba(220, 20, 60, 0.6); /* Crimson glow */
`;

export default function Footer() {
  return (
    <>
      <Foot id="footer" />
    </>
  );
}
