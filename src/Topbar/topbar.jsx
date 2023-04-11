import React from 'react';
import "./topbar.css";
import { Link } from "react-router-dom";


export default function Topbar() {
  return (
    
      <div className='top'>
        <div className="topLeft">
        <Link  to="/">blogPost</Link>
        </div>
        <div className="topRight">
        <Link  to="/">Home</Link>
        <Link  to="/write">Create</Link>
          <Link  to="/register">Register</Link>
          <Link  to="/login">Sign In</Link>
        </div>
      

      </div>
    

  )
}
