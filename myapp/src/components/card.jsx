import React from 'react'
import "./card.css"
import { FcRating } from 'react-icons/fc';
import { FaImdb } from 'react-icons/fa';


export default function Card({image,rating,title,genre}) {
  return (
    <div className="box">
       <h3 className='title'>{title}</h3>
        <img
        src={image}
        // style={{width:"250px", height:"350px"}}
        />
        
        <p className='rating'><FaImdb/> {rating} <FcRating/></p>
        <p className='genre'>{genre}</p>
    </div>
  )
}
