import React from "react";
import Form from "../../molecules/form";
import Subtitle from "../../atoms/subtitle";
import Title from "../../atoms/title";

function Home(){
  return(
    <div>
      <div className="left">
        <div className="title">
          <Subtitle />
        </div>
        <Form />
      </div>
      <div className="right">
        <Title />
        <Subtitle />
      </div>
    </div>
    
  )
}

export default Home;