
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from "./components/pages/home/Home"
import Article from "./components/pages/articles/Articles"
import { createContext, useState } from 'react';


export const AppContext = createContext(null)

function App() {
  
   const [isLogin, setIsLogin] = useState (false);

  return (
    <div className="App">
      <AppContext.Provider value = {{isLogin}}>
        <Routes>
      
          <Route path = "/" element = {<Home />} /> 
          <Route path = "/articles" element = {<Article />} />
        </Routes>

      </AppContext.Provider>
    
      
    
    

    </div>
  );
}

export default App;