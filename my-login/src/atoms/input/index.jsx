import React from "react";
import { InputStyle } from "./style";

function Input(props){
  return(
      <InputStyle>
        <input type={props.type} placeholder={props.placeholder}/>
      </InputStyle>
    )
}

export default Input;