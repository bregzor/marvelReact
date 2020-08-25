import React from "react";
import styled from "styled-components";
import Logo from "../media/logo.png";
import { Link } from "react-router-dom";

const MarvMain = styled.div`
  height: 100%;

  ${"" /* background-image:url('../src/media/bg.jpg'); */}
`;

const MarvHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background: black;
`;

const MarvFooter = styled.footer`
  background: white;
  width: 100%;
  height: 50px;
  position: fixed;
  opacity: 0.5;
  bottom: 0;
`;

const MarvChildren = styled.main`
  display: flex;
  justify-content: center;
  background: rgb(163, 163, 163);
  background: linear-gradient(
    180deg,
    rgba(163, 163, 163, 1) 5%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 100%;
`;

export default function BaseLayout({ children }) {
  return (
    <MarvMain>
      <MarvHeader>
        <Link to="/">
          <img as={Link} width="100px" src={Logo} />
        </Link>
      </MarvHeader>
      <MarvChildren> {children}</MarvChildren>
      <MarvFooter>
        <p>Created by Christopher Berge</p>
      </MarvFooter>
    </MarvMain>
  );
}
