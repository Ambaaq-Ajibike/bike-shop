import React, { useState, useEffect } from 'react';
import BodyHeader  from '../../components/BodyHeader/BodyHeader';
import './BikeDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faShare, faHeart } from '@fortawesome/free-solid-svg-icons';
import {db, } from "../../config/firebase"
import {  collection, getDoc, doc } from 'firebase/firestore'; 
import { useParams } from 'react-router';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts';
let BikeDetail = () =>{
    const [brand, setBrand] = useState('');
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const params= useParams()
    const [data, setData] = useState({});
    const getBike = async () =>{
        const docRef = doc(collection(db, "bikes"), params.id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            setData(snapshot.data());
        } else {
            console.log("No such document!");
        }
    }
    useEffect(() => {
        getBike();
    }, [])
const addToCart = () =>{
    if(brand == '' || size == '')
        {
            alert("Please select some product options before adding this product to your cart.")
        }
        else{
            const newItem = {
                name: data.name,
                price: data.price,
                quantity: quantity,
                size: size,
                image: data.image,
                brand: brand
            }
            const cartItems = localStorage.getItem("cartItems");
            let items = [];
            if(cartItems){
                items = JSON.parse(cartItems);
            }            
            items.push(newItem);
            localStorage.setItem("cartItems", JSON.stringify(items));
        }
}
  
    return (
        <>
   <BodyHeader title='The Shop' page='Products > Bike Giant' color='black' />
  <div className="bike-detail-container">
        <div className='bike-detail'>
            <div className='bike-image'>
                <img style={{width: '90%'}} src={`https://firebasestorage.googleapis.com/v0/b/bike-shop-e4721.appspot.com/o/${data.image}?alt=media&token=0d86f75b-80b8-4ebc-bc54-9a2d76c3e69f`} alt='bike' />
            </div>
            <div className='bike-info'>
            <div className='primary-detail'>
            <h1>{data.name}</h1>
                <div className='reviews'></div>
                <h3>$ {data.price}</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</p>
            </div>
            <div className='bike-brand primary-inner-conts'>
            <h4 className='primary-section-title'>Brand</h4>
            <ul className='bike-brands primary-list-flex'>
            <li title='Liv' className={brand === "Liv" ? "bold-brand-text" : ""} onClick={() => setBrand(brand === 'Liv' ? '' : 'Liv')}>Liv</li>
                <li className={brand === "Opus" ? "bold-brand-text" : ""} onClick={() => setBrand(brand === 'Opus' ? '' : 'Opus')}>Opus</li>
                <li className={brand === "Specialized" ? "bold-brand-text" : ""} onClick={() => setBrand(brand === 'Specialized' ? '' : 'Specialized')}>Specialized</li>
                <li className={brand === "Trek" ? "bold-brand-text" : ""} onClick={() => setBrand(brand === 'Trek' ? '' : 'Trek')}>Trek</li>
            </ul>                
            </div> 
            <div className='bike-size primary-inner-conts'>
            <h4 className='primary-section-title'>Size</h4>
            <ul className='bike-sizes primary-list-flex'>
                    <li className={size === "XS" ? "size-bg" : ""} onClick={() => setSize(size === 'XS' ? '' : 'XS')}>XS</li>
                    <li className={size === "S" ? "size-bg" : ""} onClick={() => setSize(size === 'S' ? '' : 'S')}>S</li>
                    <li className={size === "M" ? "size-bg" : ""} onClick={() => setSize(size === 'M' ? '' : 'M')}>M</li>
                    <li className={size === "L" ? "size-bg" : ""} onClick={() => setSize(size === 'L' ? '' : 'L')}>L</li>
                    <li className={size === "XL" ? "size-bg" : ""} onClick={() => setSize(size === 'XL' ? '' : 'XL')}>XL</li>
                    <li className={size === "XXL" ? "size-bg" : ""} onClick={() => setSize(size === 'XXL' ? '' : 'XXL')}>XXL</li>
                    <div className='size-clear'>
                    <h5 style={{color: 'blue', cursor: 'pointer', display: `${size === '' ? 'none' : 'block'}`}}className='clear-size' onClick={() => setSize('')}>Clear</h5>
                    </div>
           
            </ul>
            </div>
            <div className='bike-actions'>
                <div className='quantity'>
                <FontAwesomeIcon style={{cursor: "pointer"}} icon={faMinus} onClick={() => setQuantity(quantity > 1 ? quantity- 1 :  1)}/>
                    <input  value={quantity}/>
                    <FontAwesomeIcon style={{cursor: "pointer"}} icon={faPlus} onClick={() => setQuantity(quantity+1 )} />
                </div>
                <button style={{cursor: brand == '' || size == '' ? "not-allowed" : 'pointer'}} onClick={addToCart}>ADD TO CART</button>
                    <FontAwesomeIcon className='icon-font' icon={faHeart} />
                    <FontAwesomeIcon className='icon-font' icon={faShare} />
            </div>
            </div>
        </div>
        <div></div>
        <div className='last-div'>
        <div className='relative-product-header'>
        <div className='related-product-line'>          
        </div>
        <h1>Related Products</h1>  
        </div>             
        <div className='related-products'>
        
            <RelatedProducts/>
        </div>
        </div>
  </div>
        </>
    )
}
export default BikeDetail;