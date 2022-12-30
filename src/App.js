import React, { useState } from "react";

import { data } from "./data"
import prevBtn from "./images/icon-prev.svg"
import nextBtn from "./images/icon-next.svg"

function App() {
  const [state, setState] = useState(0);
  const { id, image, name, job, text } = data[state]
  console.log(state)
  const checkIndex = (prop) => {
    if (prop > data.length-1) {
      return 0
    } if (prop < 0) {
      return data.length - 1;
    }
    return prop
  }
  const nextButton = () => {
    setState((index) => {
      return checkIndex(index+1)
    })
  }
  const previousBtn = () => {
    setState((index) => {
      return checkIndex(index - 1);
    })
  }
  return (
    <div className="containerr">
      <div className="word">
        <p className="text">{text}</p>
        <div className="text-sec">
          <h4>{name}</h4>
          <p className="job">{job}</p>    
        </div>
      </div>
      <div className="img-container">
        <img className="picture" src={image} alt="" />
        <div className="btn">
         <img src={prevBtn} onClick={previousBtn} alt="" className="next-btn"/>
        <img src={nextBtn} alt="" onClick={nextButton} />
       </div>
       
      </div>
      
    </div>
  );
}

export default App;
