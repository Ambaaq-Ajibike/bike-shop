import React, { useState } from 'react';
import './Slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SliderDrop from './SliderDrop';
import SliderCheckBox from './SliderCheckBox';
let Slider = ({elements,}) => {
    const [chevronState, setChevronState] = useState(faChevronRight);
    const [slideElementClass, setSlideElementClass] = useState("hide");
    let handleSliderShow = () =>{
        setChevronState(chevronState === faChevronRight ? faChevronDown : faChevronRight);
        setSlideElementClass(slideElementClass === "hide" ? "show" : "hide")
    } 
    return (
        <div>
            <div className='slide-head' onClick={handleSliderShow}  style={{borderTop: (elements.type !== "drop" ? "2px solid" : '' ), padding: (elements.type !== "drop" ? "35px 0" : '' )}}>
                <h3>{elements.title}</h3>
                <div>
                <FontAwesomeIcon style={{fontSize: "20px"}}  icon={chevronState}/>
                </div>               
            </div>
            <div className={`slide-elements ${slideElementClass}`}>
            {
               elements.type === "drop" ? 
             <SliderDrop elements={elements} />
           
               : <SliderCheckBox elements={elements.elements}/>
            }
            </div>
        </div>
    )
}
export default Slider;