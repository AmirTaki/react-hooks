
import './App.css';
import {Routes, Route} from "react-router-dom"
import About from "./components/pages/About"
import Home from "./components/pages/Home"

function App() {


  return (
    <div className="App">
 
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;