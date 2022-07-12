import React from "react";
import { InputStyle } from "./style";

function Input(props){
  return(
      <InputStyle>
        <input type={props.type} name={props.name} placeholder={props.placeholder} id={props.id} onChange={props.func} value={props.value} onKeyPress={props.onkeypress} onBlur={props.onblur}/>
      </InputStyle>
    )
}

export default Input;