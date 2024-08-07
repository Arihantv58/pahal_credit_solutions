import React, { useState} from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(false)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <img style={{borderRadius: 60}} src="./images/logo.jpg" alt="Girl in a jacket" width="60" height="60"/>
    <a className="navbar-brand" href="/">Pahal Credit Solution</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" :"" }`} >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contacts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/FAQs">FAQs</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
