import { faCalendar, faHeadphones,  faTruckFast, faWallet } from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../../components/InfoCard/InfoCard";
import "./Landing.css"
import {db, } from "../../config/firebase"
import {  collection, getDocs, } from 'firebase/firestore'; 
import { useState, useEffect } from "react";
import { ShopCard } from "../../components/ShopCard/ShopCard";
const Landing = () =>{
    const [bikes, setBikes] = useState([]);     
    const [sortCategory, setSortCategory] = useState("Default");
    const [productList, setProductList] = useState([]);
    const bikeCollection = collection(db, "bikes");
    let handleCategorySelect =(category)=>{
        if(category === "All"){
            setProductList(bikes);
            return;
        }
        setSortCategory(category);
        let list = bikes.filter(x => x.category === category);
        setProductList(list);
    }
    const getBikes = async () =>{
        const bikesResponse = await getDocs(bikeCollection, 'bikes');
        
  
        const bikeList = bikesResponse.docs.map(x => ({ ...x.data(),
            id: x.id,}));
        setBikes(bikeList);
        setProductList(bikeList)
    }
    useEffect(() => {
        getBikes();
    }, [])
   
    return (
        <div>
            <div className="landing-first">
            <div className="landing-image">
                    <img src="/assets/images/shop/shop-4.png" alt="landing-img"/>
                </div>
                <div className="landing-intro">
                    <h1>GIANT</h1>
                    <h2>Tcx Advanced</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content</p>
                    <div className="landing-view">
                        <div></div>
                        <h4>VIEW MORE</h4>
                    </div>
                   
                </div>
              
            </div>
            <div className="landing-info">
            <InfoCard icon={faTruckFast} info1="Great From FedEx"title="Free Shipping"/>
                <InfoCard icon={faHeadphones} info1="24 Hours A Day" title="Support Customer"/>
                <InfoCard icon={faWallet} info1="100 % Secure Payment" title="Secure Payment"/>
                <InfoCard icon={faCalendar}info1="Simply Return 30 Days" title="30 Day Return
"/>
            </div>
            <div className="arrivals">
                <div className="arrival-title">
                    <div className="header-line"></div>
                    <h1>New Arrivals</h1>
                    <ul className="arrival-categories">
                        <li style={{color: sortCategory === "All" ? "black" : "gainsboro"}} onClick={() => handleCategorySelect("All")}>All</li>
                        <li style={{color: sortCategory === "Popularity" ? "black" : "gainsboro"}}  onClick={() => handleCategorySelect("Popularity")}>Popularity</li>
                    <li style={{color: sortCategory === "Rating" ? "black" : "gainsboro"}}  onClick={() => handleCategorySelect("Rating")}>Rating</li>
                    <li style={{color: sortCategory === "Newness" ? "black" : "gainsboro"}}  onClick={() => handleCategorySelect("Newness")}>Newness</li>
                    <li style={{color: sortCategory === "All" ? "black" : "gainsboro"}}  onClick={() => handleCategorySelect("Low price")}>Low price</li>
                    <li style={{color: sortCategory === "High price" ? "black" : "gainsboro"}}  onClick={() => handleCategorySelect("High price")}>High price</li>
                    </ul>
                    <div className="arrival-collections">
                    {productList.map(product => <ShopCard key={Math.random()} data = {{
  ...product,
  image: `https://firebasestorage.googleapis.com/v0/b/bike-shop-e4721.appspot.com/o/${product.image}?alt=media&token=0d86f75b-80b8-4ebc-bc54-9a2d76c3e69f`
        }}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing;