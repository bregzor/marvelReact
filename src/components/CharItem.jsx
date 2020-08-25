import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CharCard = styled.article`
  display: flex;
  flex-direction: column;
  width: min-content;
  border-radius: 5px;
  ${"" /* border: 1px solid black; */}
  padding:10px;
  filter: drop-shadow(2px 4px 6px gray);
  &:hover {
    transition: all 250ms ease-in;
    filter: drop-shadow(2px 4px 6px black);
  }
`;

const CharImage = styled.div`
  clip-path: circle(50% at 50% 50%);
  height: 180px;
  cursor: pointer;
`;

const MarvImg = styled.img`
  height:100%;
  opacity:0.5;
  transition:all 250ms ease-in;
  &:hover {
    opacity:1;
    transition:all 250ms ease-in:
  }
`;

const CharHeading = styled.h2`
  color: white;
  position: relative;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  text-shadow: 3px 3px 3px gray;
  text-decoration: none;
  top: -80px;
`;

export default function CharItem({ name, desc = "Lorem", thumbnail, id }) {
  return (
    <>
      <CharCard>
        <CharImage as={Link} to={`/char/${id}`}>
          <MarvImg src={thumbnail}></MarvImg>
        </CharImage>
        <CharHeading as={Link} to={`/char/${id}`}>
          {name}
        </CharHeading>
      </CharCard>
    </>
  );
}
