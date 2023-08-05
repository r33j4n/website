import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Jwellery from './pages/Jwellery';
import Thaali from './pages/thaali';
import Chain from './pages/chain';
import Bracelet from './pages/bracelet';
import Aram from './pages/aram';
import Necklace from './pages/necklace';
import Earing from './pages/earing';
import Bangle from './pages/bangle';
import Ring from './pages/ring';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />}></Route>
      <Route path = "/jwellery" element = {<Jwellery/>}></Route>
      <Route path="/jwellery/chains" element={<Chain/>}></Route>
      <Route path="/jwellery/thaali" element={<Thaali/>}></Route>
      <Route path="/jwellery/bracelet" element={<Bracelet/>}></Route>
      <Route path="/jwellery/aram" element={<Aram/>}></Route>
      <Route path="/jwellery/necklace" element={<Necklace/>}></Route>
      <Route path="/jwellery/earing" element={<Earing/>}></Route>
      <Route path="/jwellery/bangle" element={<Bangle/>}></Route>
      <Route path="/jwellery/ring" element={<Ring/>}></Route>

     
    </Routes>
  </BrowserRouter>
);