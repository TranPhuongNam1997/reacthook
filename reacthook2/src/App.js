import React, { useState ,useEffect } from 'react';
import axios from 'axios';

import './App.css'


function App() {
	const [tab,setTab] = useState('posts');

	const tabs = ['posts','comments','albums','photos','todos']

	const [dataTab,setDataTab] = useState();

	

	// handleTab = () =>{

		// const dataPost = () => axios.get(`https://jsonplaceholder.typicode.com/${tab}`).then(res => {
		// 	console.log(res.data);
		// 	setDataTab(res.data)
		// });
	// }
	useEffect(()=>{
		fetch(`https://jsonplaceholder.typicode.com/${tab}`)
		.then(response => response.json())
		.then(result => {
			setDataTab(result)
		})
	})
	

	return(
		<div>
			<ul>
				{
					tabs.map(item =>(
						<li key={item}><button onClick={() => setTab(item)}>{item}</button></li>
					))
				}
			</ul>
			<div>
				<div>
					{
						dataTab?.map(data =>(
							<li key={data.id}>{data.title}</li>
						))
					}
				</div>
			</div>
		</div>
		
	)
}
export default App