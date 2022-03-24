import React, { useState,useEffect } from 'react';

import axios from 'axios';

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";


// function App() {

	
// 	const [valueadd, setvalueadd] = useState('');

// 	const [listJob, setlistJob] = useState(() =>{
// 		const namjob = JSON.parse(localStorage.getItem('newlist'))
// 		return namjob ?? []
// 	});

// 	const handleAdd = () =>{
// 		setlistJob(arOld => {
// 			const newlist = [...arOld,valueadd]
			
// 			//add vao localstorage
// 			const newlistJSON = JSON.stringify(newlist)

// 			localStorage.setItem('newlist',newlistJSON);

// 			return newlist

// 		})
// 		setvalueadd('')
// 	}
	

// 	return (
// 		<div>
// 			<div >
// 				<input type="text" value={valueadd} onChange={(e) => setvalueadd(e.target.value)} />
// 				<button onClick={handleAdd}>Thêm mới</button>
// 			</div>
// 			<h3>Danh sách công việc</h3>
// 			<ul>
// 				{
// 					listJob.map((item,index) =>
// 						<li key={index}>{item}</li>
// 					)
// 				}
// 			</ul>
// 		</div>
// 	);
// }




function App() {

	// let tab = ['posts','comments','albums','photos'];
	const [datas, setDatas] = useState([]);
	// const [tabs,setTabs] = useState('posts')
	const fectchdata  = () => {
		// data
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			// console.log('datas = ',response.data);
			setDatas(response.data)

		})
		.catch(error => console.log(error));
	}

	useEffect(() => {
		fectchdata();
	},[]);

	// const Row = ({ index, style }) => {

	// 	let _obj = data[index];
	// 	return(
	// 		<div style={style}>{_obj.title}</div>
	// 	)
	// };
	// const Setsize = () => (
	// 	<AutoSizer>
	// 		{({ height, width }) => (
	// 			<List
	// 				className="List"
	// 				height={height}
	// 				itemCount={data.length}
	// 				itemSize={40}
	// 				width={width}
	// 			>
	// 				{Row}
	// 			</List>
	// 		)}
	// 	</AutoSizer>
	// );

	return (
		<>
			<div>{datas && datas.map((data,index)=>(

				<span>{data.title} ====== {data.id}</span>
				
			))}</div>


			{/* {
				tab.map((tab,idx) =>
					<div key={idx} className={tab === tabs ? 'nam': 'ly'} style={{display: 'inline-block',marginRight: '10px'}} onClick={() => setTabs(tab)}>{tab}</div>
				)
				
			}
			<ul>
				
				{datas && datas.map((data,index)=> <li key={index}>{data.title || data.name}</li>)}

			</ul> */}
		</>
	)
}

export default App;