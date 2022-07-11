import React from "react";
import Title from '../../atoms/title'
import Input from '../../atoms/input'
import Footnotes from "../../atoms/footnotes";
import Button from "../../atoms/button";
import Subtitle from '../../atoms/subtitle'
import Select from "../../atoms/select";

function Form(props){
  return(
    <form>
      <Title content={`Let's set up your account`}/>
      <Subtitle content={`Already have an account `} diferent='Sign in'></Subtitle>
      <Input  type="text" placeholder="Your Name" />
      <Input type="text" placeholder="Email Address"/>
      <Select content="I would describe my user type as"/>
      <Input type="password" placeholder="Password"/>
      <Footnotes content="Minimum 8 caracteres"/>
      <Button name="Next"/>
      <Subtitle content={`By clicking the "Next" button, you agree to creating a free account, and to ${<span>Terms of Service</span>} and ${<span>Privacy Policy</span>}`}/>
    </form>
  )
}

export default Form;