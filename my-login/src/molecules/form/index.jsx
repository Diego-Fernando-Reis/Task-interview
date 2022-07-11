import React from "react";
import Title from '../../atoms/title'
import Input from '../../atoms/input'
import Footnotes from "../../atoms/footnotes";
import Button from "../../atoms/button";
import Subtitle from '../../atoms/subtitle'

function Form(props){
  return(
    <form>
      <Title />
      <Subtitle />
      <Input />
      <Input />
      <Input />
      <Input />
      <Footnotes />
      <Button />
      <Subtitle />
    </form>
  )
}

export default Form;