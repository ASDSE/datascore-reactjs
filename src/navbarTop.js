import React from 'react'
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'

function NavbarTop() {
  return(
    <ul>
        <li>
          <NavLink to="/" exact activeStyle={
            {color:'red'}
          }>Home</NavLink>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
    </ul>
  );
}

export default NavbarTop
