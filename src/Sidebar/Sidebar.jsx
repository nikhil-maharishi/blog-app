import React from 'react'
import './Sidebar.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
export default function Sidebar() {
  const dispatch = useDispatch();
  const signOut = ()=>{
    dispatch({type:"logout"});
  }
  return (
    <div className='sidebar'>
        <ul className='sidebarList'>
            <li className='sidebarProfile' >
                <ul >
                <li><img className='ProfileImg' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/></li>
                <li>Name</li>
                </ul>
            </li>
            <hr/>
            <li className='sidebarCreate'><Link to='/write'>Create post</Link> </li>
            <hr/>
            <li className='sidebarSettings'><Link to='/setting'>Settings</Link></li>
            <hr/>
            <li className='sidebarFeedback' onClick={signOut}><Link to='/'>Logout</Link></li>
            <hr/>
            <li className='sidebarFeedback' ><Link to='/'>Feedback</Link></li>
        </ul>
    </div>
  )
}
