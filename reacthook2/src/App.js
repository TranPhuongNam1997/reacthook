import React, { useState ,useEffect } from 'react';
import axios from 'axios';

import './App.css'


function App() {
	const [tab,setTab] = useState('posts');

	const tabs = ['posts','comments','albums','photos','todos']

	const [dataTab,setDataTab] = useState([]);

	// cac canh su dụng
	// useEffect(callback);  ==> it dung va khong bao gio su dung
	// useEffect(callback,[]) ==> goi 1 lan dau khi vao trang
	// useEffect(callback,[depen]) ==>

	useEffect(()=>{
		// fetch(`https://jsonplaceholder.typicode.com/${tab}`)
		// .then(response => response.json())
		// .then(result => {
		// 	setDataTab(result)
		// })
	    axios.get(`https://jsonplaceholder.typicode.com/${tab}`).then(res => {
			setDataTab(res.data)
		});

	},[tab])
	


	return(
		<div>
			<ul>
				{
					tabs.map(item =>(
						<li key={item} className={item === tab ? 'active':''}><button onClick={()=>setTab(item)}>{item}</button></li>
					))
				}
			</ul>
			<div>
				<div>
					{
						dataTab.map(data =>(
							<li key={data.id}>{data.title}</li>
						))
					}
				</div>
			</div>
		</div>
	)
}
export default App