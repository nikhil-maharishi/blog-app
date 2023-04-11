
import { Link } from "react-router-dom";
import './login.css';
import { useDispatch } from 'react-redux';
export default function Login() {
  const dispatch = useDispatch();
  const signIn = ()=>{
    dispatch({type:"login"});
  }
  
  return (
    
    <div className='login'>
       <div className="text">
            <span className="bigtext">What is your story ? </span>
            <span className="smltext">Write in your way. </span>
                
        </div> 
        <div className="formContent">
            <span className="extbigtxt">Login </span>
            <form onSubmit={signIn} action="" className="loginForm">
                <label className='loginLabel'>Email*</label>
                <input required className='input' type="email" placeholder='Enter your email...'/>
                <label  className='loginLabel'>Password*</label>
                <input required className='input' type="password" placeholder='Enter your password...'/>
            </form>
            <button className="signinBtn" onClick={signIn} ><Link to={"/write"} >Sign In</Link></button>
        </div>
        
    </div>
  )
}
