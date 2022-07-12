import React from "react";

function Subtitle(props){
  return(<p className={props.classe}>{props.content}<span>{props.diferent}</span></p>)
}

export default Subtitle;