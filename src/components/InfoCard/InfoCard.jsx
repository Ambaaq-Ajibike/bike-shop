import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css'
const InfoCard = ({icon, title, info1, info2}) =>{
    return(
        <div className="info-card">
          <div>
          <FontAwesomeIcon className='icon' icon={icon}/>
          </div>   
          <div className='info-details'>
                <h3>{title}</h3>
                <p>{info1}</p>
                <p>{info2}</p>
          </div>
              
          </div>
    )
}
export default InfoCard;