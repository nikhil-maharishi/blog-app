import React from 'react'
import './header.css';
import { Link } from "react-router-dom";

export default function Header() {
  
  return (
    <div className='header'>
        
            <span className="bigtxt">What is your story ? </span>
            <span className="smltxt">Write in your way. </span>
            <span className="smltxt2">"Let Your Passion Burn Brighter Than Your Fear" </span>
    
            <button className='create'>
              <Link to="/write">CREATE BLOG</Link>
            </button>
    </div>
  )
}
