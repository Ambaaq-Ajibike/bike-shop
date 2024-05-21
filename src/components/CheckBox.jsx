import React from 'react'
import './CheckBox.css'
let CheckBox = ({text, count}) => {
    return (
        <div className='check-box-container'>
            <div className='box-left'>
                <input type='checkbox' />
                <p>{text}</p>
            </div>
                <p className='box-right'>{count}</p>
        </div>
    );
}
export default CheckBox