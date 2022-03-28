import React, { useState,useEffect,useMemo ,useRef} from 'react';

import './App.css';

// function App() {
// 	const [avatar,setAvatar] = useState();

// 	const handleChangeAvt = (e) => {
// 		var file = e.target.files[0];
		
// 		file.properties = URL.createObjectURL(file);


// 		setAvatar(file)
// 		console.log('file',file);
// 	};

// 	useEffect(() => {
// 		return () =>{
// 			avatar && URL.revokeObjectURL(avatar.properties);
// 		}
// 	},[avatar])
	

// 	return (
// 		<div>
// 			<input onChange={handleChangeAvt} type="file"/>

// 			{avatar&& (
// 				<img src={avatar.properties} className="img-fluid" alt="img" width='80%'/>
// 			)}
// 		</div>
// 	);
// }

//use memo

// function App() {
// 	const [name,setName] = useState('');
// 	const [price,setPrice] = useState('');
// 	const [product,setProduct] = useState([]);

// 	const nameRef = useRef();


// 	const handleAdd = () =>{
// 		// +price là chuyển từ string về number
// 		setProduct([ ...product,{ name, price: +price }]);
// 		setName('');
// 		setPrice('');

// 		// khi nhập xong sẽ tự chuyển về ô nhập đầu

// 		nameRef.current.focus()
// 	} ;
// 	//(a,b)=> a + b.price
// 	// 0 : giá trị khởi tạo ban đầu
// 	// reduce((a,b)=> a + b.price,0) 
// 	// totalValue
// 	// reduce thực hiện từ trái sang phải  ,0 là giá trị mặc định
// 	const total = useMemo(()=>{

// 		console.log('price', typeof price);
		
		
// 		const result = product.reduce((totalValue,b)=> totalValue + b.price,0)
// 		return result

// 	},[product]);



// 	return(
// 		<div>
// 			<input name="name" 
// 				type="text" placeholder="Nhập tên"
// 				ref={nameRef}
// 				value={name} 
// 				onChange = {e => setName(e.target.value)}
// 			/>
// 			<br/>
// 			<input name="price" 
// 				type="text" placeholder="Nhập giá"
// 				value={price} 
// 				onChange = {e => setPrice(e.target.value)}
// 			/>
// 			<br/>
// 			<button onClick={handleAdd}>Thêm</button>

// 			<br/>

// 			Total: {total}

// 			{product.map((item,idx) => (
// 				<div key={idx}>

// 					<div>{item.name}</div>
// 					<div>{item.price}</div>

// 					<br/>

// 				</div>
// 			))}


// 		</div>
// 	)
// }


export default App;
