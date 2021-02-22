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

   const nayoks =['rajjak','almgir','elliskanchon','manna']
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
        <People name="munna" job="webdev"></People>
        <People name="jorina" job="fb"></People>
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

function People(props){
  return (
    <div style={{border:'2px solid gray',margin:'10px'}}>
      <h3>My name :{props.name}</h3>
      <p>My profeson :{props.job}</p>
    </div>
  )
}

export default App;
