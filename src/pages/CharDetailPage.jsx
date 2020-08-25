import React from 'react'
import CharItemInner from '../components/CharItemInner'
import MarvFetch from '../fetch';
import {useEffect, useState} from "react";

export default function CharDetailPage(props) {

	let [character, setCharacter] = useState([]);
	let [series, setSeries] = useState([]);
	let [stories, setStories] = useState([]);
	const id = props.match.params.id;

	const fetchChar = (url) => {
		const publicKEY = "52660f98699992c175bbb6d6496ae3a6";
		fetch(`${url}apikey=${publicKEY}`)
		  .then((res) => res.json())
		  .then((data) => {
			 const currentChar = data["data"]["results"];
			 setStories(getSpecificCharData("stories", currentChar[0]));
			 setSeries(getSpecificCharData("series", currentChar[0]));
			 setCharacter(currentChar);
		  });
	}

	const getSpecificCharData = (type, data) => {
		const arr = [];
		data[type]["items"].map((item) => {
			arr.push(item);
		})
		return arr;
	}

	useEffect(() => {
		fetchChar(`http://gateway.marvel.com/v1/public/characters/${id}?`)
	}, []);

	return (
		<>
		 {
			character.map((char, index) => {
				console.log(stories);
			 return	<CharItemInner 
			 	key = {index}
				name={char.name} 
				img={char.thumbnail.path + ".jpg"}
				description={char.description}
				storys= {stories}
				series= {series}
				/>
			})
		 }
		 </>
	)
}
