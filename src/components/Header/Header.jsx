import React from 'react';
import "./Header.css";
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className='header flex flex-col' id = "header">
        <Navbar />

        <div className='container flex'>
            <div className='header-content'>
                <h2 className='text-uppercase text-white op-07 fw-6 ls-2'></h2>
                <h1 className='text-white fw-6 header-title'>Jearmy<span className='text-brown'>Jwellery</span></h1>  <p className='text-white fw-2 header-title'>Highclass craftsmanship which you have always deserved</p>
                <div className='btn-groups flex'>
                  <button type = "button" className='btn-item bg-brown fw-4 ls-2'>See Collections</button>
                  <button type = "button" className='btn-item bg-dark fw-4 ls-2'>Contact US</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header