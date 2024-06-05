import React, { useEffect, useState, useRef } from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {  Link } from "react-router-dom";
import CartSummary from "../components/CartSummary/CartSummary";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
let Header = () => {
    const divRef = useRef(null);
    const[itemsInCart, setItemsInCart] = useState(0);
    const[showCart, setShowCart] = useState(false);
    const[totalPrice, setTotalPrice] = useState(0);
    const[cartItems, setCartItems] = useState([]);
    const getCart = async () => {
        const cartRef = collection(db, "cart");

        const cartItemsFromStorage = await getDocs(cartRef, "cart");
        let items = cartItemsFromStorage.docs.map(c =>( {
            ...c.data(), 
            id: c.id        
        }))
        setItemsInCart(items.reduce((sum, item) => sum + item.quantity, 0));
        setCartItems(items);
        setTotalPrice(items.reduce((sum, item) => sum +  item.price * item.quantity, 0));
    }
    useEffect(() =>{
        getCart();
    }, [])
    const [isOpen, setIsOpen] = useState(false);
    let handleClick = () =>{
        setIsOpen(!isOpen);
    }

    const removeCartItem = async (id) =>{
        await deleteDoc(doc(db, "cart", id));
        getCart();
    }

    useEffect(() =>{
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                console.log('Clicked outside of the div!');
             setShowCart(false);
            }
            document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
          };
    }, [])
    return(
        <>
         <nav className="header">
        <div className="smaller-screen" style={{display: isOpen ? "flex" :  "none"}}>
        <FontAwesomeIcon style={{fontSize: 50, cursor: "pointer"}} onClick={handleClick} icon={faCircleXmark} />
        <ul>
                
                <li> <Link className="remove-anchor-default" to="/">Home</Link></li>
                    <li><Link className="remove-anchor-default" to="/shop">Bike</Link></li>
                    <li><Link className="remove-anchor-default" to="/blogs">Blog</Link></li>
                    <li><Link className="remove-anchor-default" to="/contact">Contact</Link></li>
                </ul>
        </div>
            <div className="big-screen">
            <div className="header-right">
            <div>
            <a href="#"><img width={180} height={70} id="logo" src="https://demo.phlox.pro/bike-shop/wp-content/uploads/sites/107/2019/05/cropped-logo.png" alt="logo"/></a>                
            </div>
            <div className="middle-line"></div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-logo"/>
            </div>
           
            <div  className="header-links">
            <div className="menu-button" onClick={handleClick}>
          &#9776;
        </div>
            <ul>
            <li> <Link className="remove-anchor-default" to="/">Home</Link></li>
                    <li><Link className="remove-anchor-default" to="/shop">Bike</Link></li>
                    <li><Link className="remove-anchor-default"  to="/blogs">Blog</Link></li>
                    <li><Link className="remove-anchor-default" to="/contact">Contact</Link></li>
                </ul>
                <div className="cart" onClick={() => setShowCart(!showCart)}>
                <span>{itemsInCart}</span>
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
                
            </div>
            </div>
        </nav>
        {showCart &&
            <div className="cart-summary" ref={divRef}>
            {cartItems.map(x => <CartSummary key={Math.random()} removeItem={removeCartItem}  data = {{
                ...x, 
                image: `https://firebasestorage.googleapis.com/v0/b/bike-shop-e4721.appspot.com/o/${x.image}?alt=media&token=0d86f75b-80b8-4ebc-bc54-9a2d76c3e69f`
            }}/>)}
            <div className="cart-other-details">
                <p>items</p>
                <div className="total-price">
                    <h5>Sub Total</h5>
                    <h5 style={{color: "#f54949", fontFamily: "Raleway, sans-serif", fontSize: "25px"}}>$ { totalPrice}</h5>
                </div>
                <div className="cart-item-action">
                    <button className="cart-btn">VIEW CART</button>
                    <button className="cart-btn">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
        }
     
        </>
       
    )
}
export default Header;