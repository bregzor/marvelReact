import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom:1px solid white;
  padding-bottom:5px;
`;

const MarvLink = styled.a`
 text-decoration:none;
 color:white;
 text-align:left;
 font-size:14px;
`;

export default function InnerList({ header, data }) {
  return (
	  <>
	  <h3>{header}</h3>
	{
		data.map((row) => {
			return   <List>
			<MarvLink href={row.resourceURI}>{row.name}</MarvLink>
		  </List>
		})
	}
	</>
  )
}
