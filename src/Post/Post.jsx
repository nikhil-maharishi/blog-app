import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

import './Post.css';
export default function Post({post}) {
  
  
  return (
    

<Link to="/post/:id">
<div  className='post' >
      {post.photo &&
        <img  className="blogImg" src={post.photo} alt="" />
    
      }
      
    <div className="postInfo">
      <div className="postDateandCats">
        {post.categories.map((c)=>(
          <span className="postCat">{c.name}</span>
        ))}
        
        <span className='postDate'>{new Date(post.createdAt).toDateString}</span> 
        
      </div>
    <span className='postTitle'>{post.title}</span>
     
     
     <p className="postDesc">{post.desc}</p> 
    </div>
    
  </div>
</Link>
   
  )
}
