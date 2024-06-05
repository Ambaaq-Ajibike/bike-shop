import React, { useEffect, useState } from 'react';
import Header from "../../containers/Header"
import Footer from "../../containers/Footer"
import BodyHeader  from '../../components/BodyHeader/BodyHeader';
import Slider from '../../components/Slider/Slider';
import { ShopCard } from '../../components/ShopCard/ShopCard';
import './Shop.css'
import {db, } from "../../config/firebase"
import {  collection, getDocs, } from 'firebase/firestore'; 
import {elements} from '../data';
let Shop = () =>{
    const [productsCount, setProductsCount] = useState(0);
    const [displaySort, setDisplaySort] = useState("none");
    const [sortCategory, setSortCategory] = useState("Default");
    const [productList, setProductList] = useState([]);
    const [bikes, setBikes] = useState([]); 
    const bikeCollection = collection(db, "bikes");
    let handleCategorySelect =(category)=>{
        setSortCategory(category);
        let list = bikes.filter(x => x.category === category);
        setProductList(list);
        setProductsCount(list.length)
        setDisplaySort(displaySort === "block" ? "none" : "block");
    }
    const getBikes = async () =>{
        const bikesResponse = await getDocs(bikeCollection, 'bikes');
        const bikeList = bikesResponse.docs.map(x => ({ ...x.data(),
            id: x.id,}));
        setBikes(bikeList);
        setProductList(bikeList)
        setProductsCount(bikeList.length);
    }
    useEffect(() => {
        getBikes();
    }, [])
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
        {productList.map(product => <ShopCard key={Math.random()} data = {{
  ...product,
  image: `https://firebasestorage.googleapis.com/v0/b/bike-shop-e4721.appspot.com/o/${product.image}?alt=media&token=0d86f75b-80b8-4ebc-bc54-9a2d76c3e69f`
        }}/>)}
        </div>
   </div>
   </div>
        </>
    )
}
export default Shop;