import React from 'react'
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">React Router</Link>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                      <NavLink className={({ isActive }) => {return classNames('nav-link', {'active': isActive})}} to="/home" aria-current="page">Home</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className={({ isActive }) => {return classNames('nav-link', {'active': isActive})}} to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className={({ isActive }) => {return classNames('nav-link', {'active': isActive})}} to="/contact">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className={({ isActive }) => {return classNames('nav-link', {'active': isActive})}} to="/blog/1/learn-react-js-2023">Blog</NavLink>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar