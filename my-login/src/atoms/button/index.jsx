import React from "react";
import { ButtonStyle } from "./style";

function Button(props){
  return(
    <ButtonStyle>
      <button id={props.id}>{props.name}</button>
    </ButtonStyle>
  )
}

export default Button;