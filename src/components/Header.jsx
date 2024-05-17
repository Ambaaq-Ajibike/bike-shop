import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';
let Header = () => {
    return(
        <nav className="header">
            <div className="header-right">
            <div>
            <a href="#"><img width={180} height={70} id="logo" src="https://demo.phlox.pro/bike-shop/wp-content/uploads/sites/107/2019/05/cropped-logo.png" alt="logo"/></a>                
            </div>
            <div className="middle-line"></div>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-logo"/>
            </div>
            <ul className="header-links">
                    <li>Home</li>
                    <li>Bike</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>
                    <span>0</span>
                    <FontAwesomeIcon icon={faBagShopping} />
                    </li>
                </ul>
        </nav>
    )
}
export default Header;