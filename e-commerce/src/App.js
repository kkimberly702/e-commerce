import './App.css';
import React  from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      

        
        <main>
        <Routes>
          <Route path="/" element={<Header />}/>
          <Route path="/Home" element={<Home />}/>
        </Routes>
        
        
        <Home />
        </main>
       
      
    </div>
  );
}

export default App;
