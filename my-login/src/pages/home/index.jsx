import React from "react";
import Form from "../../molecules/form";
import Subtitle from "../../atoms/subtitle";
import Title from "../../atoms/title";
import {HomeStyle} from './styles';


function Home(){
  return( 
    
    <HomeStyle>
      <div className="left">
        <div className="title">
          <Subtitle content="Step 1 of 3"/>
        </div>
        <Form />
      </div>
      <div className="right">
        <Title content="Dummy Heading"/>
        <Subtitle content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."/>
      </div>
    </HomeStyle>
    
  )
  
}



export default Home;