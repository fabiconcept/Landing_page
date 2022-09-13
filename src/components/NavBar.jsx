import React, { Component } from 'react';

const Navbar = ({totalCounter}) =>{
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">
                NavBar 
                <span className='badge badge-pill badge-secondary m-1'>{totalCounter}</span>
            </a>
        </nav>
    );
}
 
export default Navbar;