import React, { useState } from 'react';
import Header from "../../containers/Header"
import Footer from "../../containers/Footer"
import BodyHeader  from '../../components/BodyHeader/BodyHeader';
import Slider from '../../components/Slider/Slider';
import { ShopCard } from '../../components/ShopCard/ShopCard';
import './Shop.css'
import {elements, products} from '../data';
let Shop = () =>{
    const [productsCount, setProductsCount] = useState(products.length);
    const [displaySort, setDisplaySort] = useState("none");
    const [sortCategory, setSortCategory] = useState("Default");
    const [productList, setProductList] = useState([...products]);
    let handleCategorySelect =(category)=>{
        setSortCategory(category);
        let list = products.filter(x => x.category === category);
        setProductList(list);
        setProductsCount(list.length)
        setDisplaySort(displaySort === "block" ? "none" : "block");
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
            <p className='product-number'> <span style={{color: 'red'}}> {productsCount}</span> Products Found</p>
            <div className='sort'>
                <p onClick={() => setDisplaySort(displaySort === "block" ? "none" : "block")}><span style={{color: "gainsboro"}}>Sort By:</span>      {sortCategory}</p>   
                <ul className='sort-list' style={{display: displaySort}}>
                    <li onClick={() => handleCategorySelect("Popularity")}>Popularity</li>
                    <li onClick={() => handleCategorySelect("Rating")}>Rating</li>
                    <li onClick={() => handleCategorySelect("Newness")}>Newness</li>
                    <li onClick={() => handleCategorySelect("Low price")}>Low price</li>
                    <li onClick={() => handleCategorySelect("High price")}>High price</li>
                </ul>
            </div>
        </div>
        <div className='shop-products'>
        {productList.map(product => <ShopCard data={product}/>)}
        </div>
   </div>
   </div>
        </>
    )
}
export default Shop;