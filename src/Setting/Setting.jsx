import React from 'react'
import './Setting.css';
import  Sidebar from '../Sidebar/Sidebar'
export default function Setting() {
  return (
    <div className='setting'>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src='https://media.istockphoto.com/photos/male-silhouette-with-hands-holding-headphones-picture-id907345502?k=20&m=907345502&s=612x612&w=0&h=4Rz72TWleUBc8lpJ5GX50gxwmewCkUVAWYh03nZV8ZM='/>
                    <label><i className="settingPPIcon fa-regular fa-circle-user"></i></label>
                    <input type='file' id='fileInput' style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type='text' placeholder='safak'/>
                <label>Email</label>
                <input type='email' placeholder='safak@gmail.com'/>
                <label>Password</label>
                <input type='password' />
                <button className="settingSubmit">Update</button>

            </form>
        </div>
         <Sidebar/>
    </div>
  )
}
