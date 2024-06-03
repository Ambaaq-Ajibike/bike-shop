import React, { useState, useEffect } from 'react';

import {db, } from "../../config/firebase"
import {  collection,  getDocs } from 'firebase/firestore'; 

import { ShopCard } from '../ShopCard/ShopCard';
let RelatedProducts = ({category}) =>{
    const [relatedBikes, setRelatedBikes] = useState([]);
    const getRelatedBikes = async () =>{
        let docRef = collection(db, "bikes");
        let bikesResponse = await getDocs(docRef, " bikes");
        const bikeList = bikesResponse.docs.slice(0, 4).map(x => ({ ...x.data(),
            id: x.id,}));
            setRelatedBikes(bikeList);
    }
    useEffect(() => {
        getRelatedBikes();
    }, [])

  
    return (
        <>
              {relatedBikes.map(product => <ShopCard key={Math.random()} data = {{
  ...product,
  image: `https://firebasestorage.googleapis.com/v0/b/bike-shop-e4721.appspot.com/o/${product.image}?alt=media&token=0d86f75b-80b8-4ebc-bc54-9a2d76c3e69f`
        }}/>)}
        </>
    )
}
export default RelatedProducts;