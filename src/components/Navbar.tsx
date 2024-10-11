import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"> Home </Link>
      <Link to="/projects"> Projects </Link>
      <Link to="/blog"> Blog </Link>
      <Link to="/contact"> Contact Me </Link>
    </div>
  )
}

export default Navbar