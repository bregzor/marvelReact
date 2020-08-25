import React from 'react'
import {useEffect, useState } from 'react';
import MarvFetch from '../fetch';

export default function ComicList() {

	let [comics, setComics] = useState([]);
	//let data = MarvFetch("http://gateway.marvel.com/v1/public/characters?");
	useEffect(() => {
	//	MarvFetch("http://gateway.marvel.com/v1/public/comics?");
	}, [])

	return (
		<div>

		</div>
	)
}
