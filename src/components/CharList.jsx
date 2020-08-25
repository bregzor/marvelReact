import React, { useState, useEffect } from 'react'
import CharItem from './CharItem';
import styled from 'styled-components';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

const CardlistWrapper = styled.section`
display:flex;
width:90%;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap;
padding:20px;
`

const PageButton = styled.button`
appearance:none;
outline:none;
border:0;
height:30px;
opacity:0.7;
color:white;
width:100px;
background:black;
cursor:pointer;
position:fixed;
top:45vh;
left: ${props => props.position || 0};


&:hover {
	opacity:1;
}

`

export default function CharList() {
	
	let [charData, setCharData] = useState([]);
	let [paginate, setPageinate] = useState(0);
  //  let [loading, setLoading] = useState(true);

	const getMarvelData = (offset) => {

		const publicKEY = "52660f98699992c175bbb6d6496ae3a6";
		// const privateKEY = "0e910274b827f4277a96e4bfc35ce3ed37a05129";

		fetch(`http://gateway.marvel.com/v1/public/characters?offset=${offset}&apikey=${publicKEY}`)
		.then((res => res.json()))
		.then((data) => {
			let currentChars = data["data"]["results"];
			setCharData(currentChars);
			//setLoading(false);
		})
		.catch(error =>  {
			console.log(error);
		});
	}

	useEffect(() => {
		getMarvelData(paginate);
	}, [paginate]);

	return (
		<>
		
		{/* <LoadingMask loading={loading} text={""}> */}
		<CardlistWrapper>
		<PageButton position="0" onClick={() => setPageinate(paginate - 20)}>{'<'}</PageButton>
			{
			charData.map((item,index) => {
				return <CharItem
				key = { index }
				name = { item. name }
				id = { item.id }
				desc = { item.description }
				thumbnail= { item.thumbnail.path + ".jpg"}/>
			})
		} 
		<PageButton position="94%" onClick={() => setPageinate(paginate + 20)}>{'>'}</PageButton>
		</CardlistWrapper>
		{/* </LoadingMask> */}
		</>
	);
}
