import React, { useState } from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
let Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    let handleClick = () =>{
        setIsOpen(!isOpen);
    }
    return(
        <nav className="header">
        <div className="smaller-screen" style={{display: isOpen ? "flex" :  "none"}}>
        <FontAwesomeIcon style={{fontSize: 50, cursor: "pointer"}} onClick={handleClick} icon={faCircleXmark} />
        <ul>
                
                <li>Home</li>
                    <li>Bike</li>
                    <li>Blog</li>
                    <li>Contact</li>
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
                    <li>Home</li>
                    <li>Bike</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <div className="cart">
                <span>0</span>
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
                
            </div>
            </div>
          
            
        </nav>
    )
}
export default Header;