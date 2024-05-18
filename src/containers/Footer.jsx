import React from 'react';
import './Footer.css';
let Footer = () => {
    return (
        <div className='footer'>
            <div className='upper'>
                <div className='news-letter'>
                    <h5>NEWS LETTER</h5>
                    <div></div>
                </div>
                <div className='discount'>
                        <h2>Get Discount 30% Off</h2>
                        <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</p>
                </div>
                <form className='sub-form'>
                        <input placeholder='your email' type='email'/>
                        <button>subscribe</button>
                </form>
            </div>
            <div className='mid-line'></div>
            <div className='lower'>
                <div className='footer-about'>
                <div>
            <a href="#"><img width={180} height={70} id="logo" src="https://demo.phlox.pro/bike-shop/wp-content/uploads/sites/107/2019/05/cropped-logo.png" alt="logo"/></a>                
            </div>
            <p >we ship every where! free in the us</p>
            <p>© 2024 Phlox Shop - Phlox Elementor WordPress Theme. All rights reserved.</p>
                </div>
                <div className='footer-contact'>
                <h3 className='footer-h3-margin'>Contact :</h3>
                    <p className='footer-p'>Info@yourdomain.com</p>
                    <p className='footer-p'>+1 403-253-7717</p>
                </div>
                <div className='footer-address'>
                <h3 className='footer-h3-margin'>Address :</h3>
                    <p className='footer-p'>123 Ave, Lorem City, Site Country, the World</p>
                </div>
                <div className='footer-social'>
                    <h3 className='footer-h3-margin'>Social :</h3>
                    <div>
                        <a className='footer-p' href="#">Instagram</a>
                        <a className='footer-p' href="#">Twitter</a>
                        <a className='footer-p' href="#">Facebook</a>
                        <a className='footer-p' href="#">LinkedIn</a>
                        <a className='footer-p' href="#">Youtube </a>
                        <a className='footer-p' href="#">Vimeo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;