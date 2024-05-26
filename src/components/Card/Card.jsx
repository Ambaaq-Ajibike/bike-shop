import React from 'react'
import './Card.css'
export  const Card = ({data}) =>{
    return (
        <div className='card'>
            <img src={`/assets/images/blog-${data.id}.png`}  alt={`blog ${data.id}`}/>
            <p className='date'>{data.date}</p>
            <h3 className='title'>{data.title}</h3>
            <p className='description'>{data.description}</p>
            <a href='#' className='read'>Read more</a>
        </div>
    )
}