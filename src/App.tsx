import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import Layout from './Layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
         
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
