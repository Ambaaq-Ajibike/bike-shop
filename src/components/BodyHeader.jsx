import React from 'react'
import './BodyHeader.css'
let BodyHeader = ({title, page, color= 'black'}) =>{
    return (
        <div className='body-header'>
            <h1 style={{color: color}}>{title}</h1>
            <p>Home {'>'} {page} </p>
        </div>
    )
}
export default BodyHeader;