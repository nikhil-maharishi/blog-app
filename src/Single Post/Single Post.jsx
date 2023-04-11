import React from 'react'
import './Single Post.css';

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img className='sPImg' src="https://media.istockphoto.com/photos/male-silhouette-with-hands-holding-headphones-picture-id907345502?k=20&m=907345502&s=612x612&w=0&h=4Rz72TWleUBc8lpJ5GX50gxwmewCkUVAWYh03nZV8ZM="/>
            <h1 className='sPTitle'>
            MUSIC THAT HEALS
                <div className="spEdit">
                   

                </div>
                </h1>
            <div className="sPInfo">
                <span className="sPAuthor">Author: <b>Nikhil</b></span>
                <span className="sPDate">28 September 2020</span>
            </div>
            <p className='sPDisc'>
            Music is generally defined as the art of arranging sound to create some combination of form, harmony, melody, rhythm or otherwise expressive content. Exact definitions of music vary considerably around the world, though it is an aspect of all human societies. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ducimus, enim recusandae est veniam excepturi voluptates adipisci rerum cupiditate, a libero delectus ipsum eos blanditiis? Quia eos inventore earum sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, excepturi? Nihil, dolore, quas rem pariatur a atque excepturi magni cupiditate nesciunt deleniti voluptatibus, eaque velit illo aut eveniet sapiente quo.
            </p>
        </div>
     </div>
  )
}
