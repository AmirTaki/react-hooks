
import { useMemo, useRef, useState } from 'react';
import './App.css';





function App() {
  
  const [number , setNumber] = useState (0);
  // const addNumber = slowFunction(number)


  const [theme, setTheme] = useState(false);

  
  // useMemo
  const addNumber  = useMemo(() => slowFunction(number),[number])

  // useMemo (function, [dependenci])

  
  return (
    <div className="App" style={{backgroundColor : theme ? "blue" : "white"}}>
    
    <h1>{addNumber}</h1>
    <input type = 'text' onChange={(event) => {setNumber(event.target.value)}}/>
  

    <br />
    <br />

    {/* <button onClick={()=>(setTheme(theme ? false : true))}>Change them</button> */}
    <button onClick={()=>(setTheme(!theme))}>Change them</button>
    </div>
  );
}

export default App;


const slowFunction = (number) =>{
  for (let i = 0;  i < 1000000000 ; i++){}
  return number * 2
}