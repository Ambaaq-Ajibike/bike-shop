import React from "react";
import './SliderDrop.css'
let SliderDrop = ({ elements}) =>{
    return(
        <>
        {elements.elements.map(item => (
          <ul key={item.head}>
            <li className='outer-list'>{item.head}</li>
            <ul>
            {item.innerElements.map((el, i) => (        
              <li key={`${item.head}-${el}-${i}`} className='inner-list'>{el}</li>       
            ))   }</ul>
          </ul>
        ))}
      </>
    )
}
export default SliderDrop;