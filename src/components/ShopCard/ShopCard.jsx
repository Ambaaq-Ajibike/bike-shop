import React, { useState } from 'react'
import './ShopCard.css'
import {  Link } from "react-router-dom";
export  const ShopCard = ({data}) =>{
    const [showCart, setShowCart] = useState(false);
    return (
     <Link className='remove-anchor-default' to={`/bike/${data.id}`}>
<div className='shop-card-container' onMouseEnter={() => setShowCart(true)}
       onMouseLeave={() => setShowCart(false)}>
       <div>
             <img  className='card-image' src={data.image} alt={data.name}  />
       </div>
       <div>
       <div className='product-detail' style={{display: (showCart) ? "none" : "block"}}>
       <h5>{data.name}</h5>
            <p style={{marginBottom: "5px"}}>{data.description}</p>
       </div>
            <h5 className='add-to-card' style={{display: (showCart) ? "block" : "none"}}>Add To Cart</h5>
            <h2>${data.price}</h2>
       </div>
       </div>
     </Link>
      
    )
}