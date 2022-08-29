import './App.css';
import React  from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './Components/Header';

function App() {
  return (
    <div className="App">

        
        <main>
        <Routes>
          <Route path="/" element={<Header />}/>
        </Routes>
        
        
        
        </main>
       
      
    </div>
  );
}

export default App;
