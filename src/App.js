
import './App.css';

import {  useState } from 'react';



function App() {

  const [state, setState] = useState("test");

  // console.log(`state : ${state}` )

  let name = "amir";


  // -----------------------------------------------------

  const [stateObjest, setStateObject] = useState ({
    name : "amir",
    age : 28
  })

 
  // console.log(`stateObjest : ${stateObjest.name} ${stateObjest.age}` )

 
 
  const handleChangeName = ()=>{
    name = "alpha"  
    setState ("alpha")  
  
  }


  const handelObject = () =>{
    setStateObject ((prevState)=>({
      ...prevState,
      age : 30
    }))
    
  }

// -------------------------------------------------------


  const [satateF, setStateF] = useState(1)

  console.log(`stataF_1 :  ${satateF}`)

  const handle = () =>{
    setStateF(2)
    console.log(`stataF_2:  ${satateF}`)

  }

  return (
    <div className="App">
  
        <button onClick={handleChangeName}>
          Click
        </button>
    
        <br></br>
        
        {state}
        
        <br></br>
        
        {name}
    
        <hr></hr>
        
        <p>object</p>
        
        <button onClick={handelObject}>Click</button>

        <br></br>
        
        {stateObjest.age}
      
        <hr></hr>
        
        <p>console log satat</p>
        
        <button onClick={handle}>Click</button>

        <br></br>
        
        {satateF}
      

    </div>
  );
}

export default App;