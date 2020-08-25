import React from "react";
import styled from "styled-components";
import InnerList from "./char_inner/InnerList";

const CharWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  background: gray;
  align-item: center;
  padding: 40px;
  coolor: white;
`;
const ImgWrapper = styled.div`
  width: 40vw;
`;

const CharAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 30%;
  padding: 20px;
`;

const CharNameHeader = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
  text-align: left;
  color: white;
`;

const CharParagraph = styled.p`
  text-align: left;
  color: white;
`;

export default function CharItemInner({
  img,
  name,
  series,
  storys,
  description = "No description...",
}) {
  return (
    <CharWrapper>
      <ImgWrapper>
        <img width="100%" src={img} />
      </ImgWrapper>
      <CharAside>
        <CharNameHeader>{name}</CharNameHeader>
        <CharParagraph>{description}</CharParagraph>
		<InnerList header="Series" data={series}/>
		<InnerList header="Stories" data={storys}/>
      </CharAside>
    </CharWrapper>
  );
}
