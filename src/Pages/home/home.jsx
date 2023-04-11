import React, { useState, useEffect } from 'react';
import Header from '../../Header/header';
import Posts from '../../Posts/Posts';
import './home.css';
import axios from "axios";

export default function Home() {
  const [posts,setPosts]= useState([]);
  useEffect(() => {
    const fetchPost = async()=>{
     const res = await axios.get("/posts")
     setPosts(res.data)
    }
    fetchPost()
  }, [])
  
  return (
    <>
        <Header/>
   
    
        <div className='home'>
            
            <Posts posts={posts}/>
        </div>
    </>
  )
}
