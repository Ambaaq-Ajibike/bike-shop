import React from "react";
import CheckBox from "./CheckBox";
let SliderCheckBox = ({elements}) => {

    return (
        <>
        {elements.map(x => 
            (
                <CheckBox text={x.text} count ={x.count}/>            
            ))}
      </>
    )
}
export default SliderCheckBox;