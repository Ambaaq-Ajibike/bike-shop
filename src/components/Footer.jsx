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
        </div>
    );
}
export default Footer;