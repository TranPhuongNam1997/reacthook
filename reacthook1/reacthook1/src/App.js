import React, { useState } from 'react';

function App() {

	
	const [valueadd, setvalueadd] = useState('');

	const [listJob, setlistJob] = useState(() =>{
		const namjob = JSON.parse(localStorage.getItem('newlist'))
		return namjob ?? []
	});

	const handleAdd = () =>{
		setlistJob(arOld => {
			const newlist = [...arOld,valueadd]
			
			//add vao localstorage
			const newlistJSON = JSON.stringify(newlist)

			localStorage.setItem('newlist',newlistJSON);

			return newlist

		})
		setvalueadd('')
	}
	

	return (
		<div>
			<div >
				<input type="text" value={valueadd} onChange={(e) => setvalueadd(e.target.value)} />
				<button onClick={handleAdd}>Thêm mới</button>
			</div>
			<h3>Danh sách công việc</h3>
			<ul>
				{
					listJob.map((item,index) =>
						<li key={index}>{item}</li>
					)
				}
			</ul>
		</div>
	);
}

export default App;