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

        <h1>Hey I am a React Person</h1>
        <People></People>
        <People></People>
        <People></People>

      </header>
    </div>
  );
}
function People(){
  const peopleStyle={
    borderRadius:'5px',
    padding:'10px',
    margin:'10px',
    backgroundColor:'white',
    color:'black'
  }
  return ( 
  <div style={peopleStyle}>
    <h1>name : Toktoki</h1>
    <h3>Name : My name Is khan</h3>
  </div>
  )
}



export default App;
