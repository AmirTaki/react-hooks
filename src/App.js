
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from "./components/pages/home/Home"
import Article from "./components/pages/articles/Articles"


function App() {
  return (
    <div className="App">
      <Routes>
    
        <Route path = "/" element = {<Home />} /> 
        <Route path = "/articles" element = {<Article />} />
      </Routes>
      
    
    

    </div>
  );
}

export default App;