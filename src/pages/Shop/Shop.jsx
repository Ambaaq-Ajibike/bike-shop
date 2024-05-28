import React, { useState } from 'react';
import Header from "../../containers/Header"
import Footer from "../../containers/Footer"
import BodyHeader  from '../../components/BodyHeader/BodyHeader';
import Slider from '../../components/Slider/Slider';
import './Shop.css'
import {elements} from '../data';
let Shop = () =>{
    const [productsCount, setProductsCount] = useState(0);
    const [sortCategory, setSortCategory] = useState("Default");
    let handleCategorySelect =(category)=>{
        setSortCategory(category);
    }
    return (
        <>        
   <BodyHeader title='The Shop' page='Products' color='red' />
   <div className='shop-container'>
   <div className='shop-left'>
   { elements.map(e => <Slider elements={e}/>)}
        
   </div>
   <div className='shop-right'>
   <div className='shop-detail'>
            <p>{productsCount} Products Found</p>
            <div className='sort'>
                <p><span>Sort By:</span>{sortCategory}</p>
                <ul>
                    <li onClick={() => handleCategorySelect("Popularity")}>Popularity</li>
                    <li onClick={() => handleCategorySelect("Rating")}>Rating</li>
                    <li onClick={() => handleCategorySelect("Newness")}>Newness</li>
                    <li onClick={() => handleCategorySelect("Low price")}>Low price</li>
                    <li onClick={() => handleCategorySelect("High price")}>High price</li>
                </ul>
            </div>
        </div>
   </div>
   </div>
        </>
    )
}
export default Shop;