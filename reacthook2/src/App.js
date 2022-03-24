import React, { useState ,useEffect } from 'react';
import axios from 'axios';

import './App.css'


function App() {
	const [tab,setTab] = useState('posts');

	const tabs = ['posts','comments','albums','photos','todos']

	const [dataTab,setDataTab] = useState();

	const dataPost = () => axios.get(`https://jsonplaceholder.typicode.com/${tab}`).then(res => {
		console.log(res.data);
		setDataTab(res.data)
	});

	// handleTab = () =>{

	// }
	useEffect(()=>{
		dataPost()
	})
	

	return(
		<div>
			<ul>
				{
					tabs.map((tab,idx) =>(
						<li key={idx}><button onClick={() => setTab(tab)}>{tab}</button></li>
					))
				}
			</ul>
			<div>
				<div>
					{
						dataTab?.map((data,idx) =>(
							<li key={idx}>{data.title}</li>
						))
					}
				</div>
			</div>
		</div>
		
	)
}
export default App