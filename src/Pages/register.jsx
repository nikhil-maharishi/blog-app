import React from 'react'
import './register.css';
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom";
export default function Register() {
  const dispatch = useDispatch();
 
  const signIn = ()=>{
    dispatch({type:"login"});
  }
  
  return (
    <div className='register'>
       <div className="text">
            <span className="bigtext">What is your story ? </span>
            <span className="smltext">Write in your way. </span>
                
        </div> 
        <div className="formContent">
            <span className="extbigtxt">Register </span>
            <form onSubmit={signIn} action="" className="registerForm">
                <label  className='registerLabel'>Username*</label>
                <input required className='input' type="text" placeholder='Enter your username...'/>
                <label className='registerLabel'>Url</label>
                <input className='input' type="text" placeholder='Enter unique url...'/>
                <label  className='registerLabel'>Email*</label>
                <input required className='input' type="email" placeholder='Enter your email...'/>
                <label  className='registerLabel'>Password*</label>
                <input  required className='input' type="password" placeholder='Enter your password...'/>
            </form>
            <button className="signupBtn" onClick={signIn} ><Link to={"/write"} >Sign Up</Link></button>
        </div>
        
    </div>
  )
}
