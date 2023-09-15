import React from 'react';
import { Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './component/home/home';
import Navbar from './layout/navbar/navbar';
import Footer from './layout/footer/footer';
import Shopping from './component/shopping/shopping';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/shopping' element={<Shopping />} />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
