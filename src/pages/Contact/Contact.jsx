import React from "react";
import Header from "../../containers/Header"
import Footer from "../../containers/Footer"
import BodyHeader  from '../../components/BodyHeader/BodyHeader';
import InfoCard from "../../components/InfoCard/InfoCard";
import { faMobile, faEnvelope, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
 const Contact = () =>{
    return (
        <>
   <BodyHeader title='Contact' page='Contact' color='black' />
   <div className='contact-container'>
        <div className="contact-first">
        <InfoCard icon={faMobile} info1="+7 (212) 654-33-35" info2="+7 (212) 287-85-22" title="Call Us"/>
                <InfoCard icon={faEnvelope} info1="info@yourdomain.com" info2="info@Phloxshop.com" title="Email"/>
                <InfoCard icon={faClock} info1="Monday – Friday   09.00 – 23.00" info2="Sunday     09.00 – 16.00" title="Opening Hours"/>
                <InfoCard icon={faLocationDot}info1="No.342 - London Oxford Street , " info2=" 012 United Kingdom" title="Address"/>
        </div>
        <div className="contact-second">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31704.793879392942!2d3.3229844347656066!3d6.634596699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1716894009070!5m2!1sen!2sng" width="100%" height="680" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contact-last">
        <div className="contact-last-separator"></div>
            <div className="contact-form-header">
                <h1>Get In Touch With Us</h1>
                <div className="descr">
                <p>Introducing a fully integrated, electric-assist mountain bike that takes the Altitude’s legendary handling and ride quality</p>
                </div>
               
            </div>
            <form className="contact-form">
                <div className="form-upper">
                    <div>
                        <input className="form-input" placeholder="Enter Your Name" type="text"/>
                    </div>
                    <div>
                        <input className="form-input" placeholder="Your E-mail" type="email"/>
                    </div>
                    <div>
                        <input className="form-input"   placeholder="Phone number"  type="text"/>
                    </div>
                </div>
                <div className="form-lower">
                    <input className="form-input" style={{width: "95%"}} placeholder="Your message here"  type="text"/>
                </div>
                <div className="form-btn">
                    <button>SEND TO US</button>
                </div>
            </form>
        </div>
      </div>
        </>
    )
}
export default Contact;