import React from "react";
import { SelectStyle } from "./style";

function Select(props){
  return(
      <SelectStyle>
        <select name={props.placeholder}>
          <optgroup>
            <option value="">{props.content}</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
        </select>
      </SelectStyle>
    )
}

export default Select;