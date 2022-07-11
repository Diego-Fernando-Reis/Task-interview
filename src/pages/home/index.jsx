import React from "react";
import Form from "../../molecules/form";
import Subtitle from "../../atoms/subtitle";

function Home(props){
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