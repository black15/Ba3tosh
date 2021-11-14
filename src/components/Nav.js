import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Nav.css';

const NavBar = () => {

    return (
      <div className="navbar">
        <nav>
          <ul>
            <li><NavLink className="activeElement" to="/home">Home</NavLink></li>
            <li><NavLink className="navlink" to="/add">Add</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }

export default NavBar;
