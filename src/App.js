import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // var person ={
  //   name:"Imran Mahmud",
  //   age:22,
  // } 
  // var person_gf ={
  //   name:"Jorina Khaton",
  //   age:19,
  // }
  // var style ={
  //   color:'green',
  //   backgroundColor:'gray',
  //   padding:'10px'
    
  // }

   const nayoks =['rajjak','dipjol','elliskanchon','manna','shovo','heroalam']
  const products =[
    {name:'Photography', price:'$19.99',article:'Lightroom, Lightroom Classic)'},
    {name:'Photoshop', price:'$22.99', article:'Create beautiful graphics'},
    {name:'PDF Reader', price:'$18.44', article:'Design and develop modern'},
    {name: 'Illustrator', price:'$17.44', article:'Page design and layout'}
  ]
  // const productName = products.map(product=>product)
  // console.log(productName);
  const nayokName = nayoks.map(nayok=>nayok)
  console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={{backgroundColor:'orange',padding:'10px'}}>My Heading React : {person.name +" "+ person.age}</h1>
        <h3 className="" style={style}>My Heading React : {person_gf.name +" "+ person_gf.age}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus.</p> */}

        {/* <h1>Hey I am a React Person</h1>
        <People name={nayoks[0]} naika="mousumi"></People>
        <People name={nayoks[1]}></People>
        <People name={nayoks[2]}></People>
        <People></People> */}
        {/* <People name="munna" job="webdev"></People>
        <People name="jorina" job="fb"></People> */}

        {/* <Product name={products[0].name} price={products[0].price} article ={products[0].article}></Product>
        <Product name={products[1].name} price={products[1].price}  article ={products[1].article}></Product>
        <Product name={products[2].name} price ={products[2].price} article ={products[2].article}></Product>
        <Product name={products[3].name} price ={products[3].price}  article ={products[3].article}></Product> */}

        <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product>
        <Product product={products[2]} ></Product>
        <Product product={products[3]} ></Product>
       
        <ul>
          {
            nayoks.map(nayok=><li>{nayok}</li>)
          }
          <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li>

          {
            products.map(product=><li>{product.name} {product.price}</li>)
          }
        </ul>
          <Counter></Counter>
          <Users></Users>
      </header>
    </div>
  );
}

// props mane hosse property er shortverson
// function People(props){
//   const peopleStyle={
//     borderRadius:'5px',
//     padding:'10px',
//     margin:'10px',
//     backgroundColor:'white',
//     color:'black'
//   }
//   console.log(props)
//   return ( 
//   <div style={peopleStyle}>
//     <h1>naYok : {props.name} </h1>
//     <h3>Naika : {props.naika}</h3>
//   </div>
//   )
// }

// function People(props){
//   return (
//     <div style={{border:'2px solid gray',margin:'10px'}}>
//       <h3>My name :{props.name}</h3>
//       <p>My profeson :{props.job}</p>
//     </div>
//   )
// }


function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data))
  },[])
  return(
    <div>
      <h3>dynamic Users{users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.name}</li>)
       }
     </ul>
    </div>
  )
}



function Product(props){
  const productStyle ={
    backgroundColor:'#F5F5F5',
    border:'1px solid gray',
    height:'300px',
    width:'300px',
    color:'black',
    margin:'8px'
    
  }
  const {name , price,article} = props.product;
  console.log(name , price)

  return(
    <div style={productStyle}>
      <h3>{name} </h3>
      <h4>Price :{price}</h4>
      <p>{article}</p>
      <button>Buy Now</button>
    </div>
  )
}



function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount( count + 1);
 

  return(
    <div>
      <h1>counter:{count}</h1>
      <button onClick={() => setCount(count - 1)}>decrise</button>
      <button onClick={() => setCount( count + 1)}>Increase</button>
    </div>
  )
}

export default App;
