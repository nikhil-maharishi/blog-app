
import React from 'react'
import styled from 'styled-components'
import Post from '../Post/Post'

import './Posts.css';

export default function Posts({posts}) {
  return (
    <>
     <span className="contHead">Recommended Blogs</span>
     <hr></hr>
    <div className='container'>
        {posts.map((p)=>(
            <Post post={p}/>
        ))}
        
        
    </div>
    
    </>
  )
}


