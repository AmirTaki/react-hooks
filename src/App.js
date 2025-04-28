
import { useRef, useState } from 'react';
import './App.css';
function App() {
  
 const [count, setCount]  = useState(0);

 const countRef = useRef(0);

//   // -------------------------------------------------
 
const handleIncrase = () =>{
    setCount(count + 1);
  }
//   // -------------------------------------------------
  const handleIncraseRef = () =>{
    countRef.current ++;
  }
  console.log("render")


    // -------------------------------------------------
//  in DOM js

  // document.getElementById("#changeColor").style.color = "red"; ERROR

  // ref 
  const tagRef = useRef(null);

  // function
  const handleChangeColor = ()=>{
    tagRef.current.style.color = "red";
  }

  // -------------------------------------------------
  const inputRef = useRef(null);

  const handleInput = () =>{
    inputRef.current.focus()
  }

  return (
    <div className="App">
 
      <h1>
        state : {count}
      </h1> 
      <button onClick={handleIncrase}>Add State</button>
          
      <br />
      <br />

      <h1> ref : {countRef.current}</h1>
      <button onClick={handleIncraseRef}>Add Ref</button>

      <hr></hr>
      <hr></hr>
      <hr></hr>

      {/* <h1 id = "changeColor">change color </h1> */}
      
      <h1 ref = {tagRef} onClick={handleChangeColor}>change color </h1>


      <hr></hr>

      <input ref = {inputRef} />

      <button onClick={handleInput}>foucs</button>
  
    </div>
  );
}

export default App;