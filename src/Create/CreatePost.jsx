import React from 'react'
import './CreatePost.css';
export default function CreatePost() {
  return (
    <div className='createPost'>
        <img className='writeImg'  src="https://media.istockphoto.com/photos/male-silhouette-with-hands-holding-headphones-picture-id907345502?k=20&m=907345502&s=612x612&w=0&h=4Rz72TWleUBc8lpJ5GX50gxwmewCkUVAWYh03nZV8ZM=" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                <i className="writeIcon fa-regular fa-plus"></i>
                </label>
                <input type="file" id = "fileInput " style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus=
                {true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell Your story'
                className='writeinput writeText'></textarea>
            </div>
            <button className='writesubmit'>Publish</button>
        </form>
    </div>
  )
}
