import React from 'react'
import './Write.css';
import Sidebar from '../Sidebar/Sidebar';
import CreatePost from './CreatePost';
export default function Write() {
  return (
    <div className='write'>
        <Sidebar/>
        <CreatePost/>
    </div>
  )
}
