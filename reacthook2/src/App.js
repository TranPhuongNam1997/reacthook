import React, { useState ,useEffect } from 'react';
import axios from 'axios';

import './App.css'


function App() {
	// const [tab,setTab] = useState(0);

	const tabs = ['posts','comments','albums','photos','todos']

	const [dataTab,setDataTab] = useState();

	const dataPost = () => axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
		console.log(res.data);
		setDataTab(res.data)
	});

	useEffect(()=>{
		dataPost()
	})
	

	return(
		<>
			<ul>
				{
					tabs.map((tab,idx) =>(
						<li key={idx}><button>{tab}</button></li>
					))
				}
			</ul>
			<div>{this.dataTab}</div>
		</>
		
	)
}
export default App