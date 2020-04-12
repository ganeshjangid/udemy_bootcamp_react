import React, { useState } from "react";

function App() {



  const [headingText,setHeadingText]=useState("Hello");
  const [isMouseOver,setMouseOver]=useState(false);

  function handleChange(event){
    //console.log("Hello");
    setHeadingText("Hello "+event.target.value);
  }

  function onMouseOver(){
    setMouseOver(true);
  }

  function onMouseOut(){
    setMouseOver(false);
  }

  function handleClick(event){
    event.preventDefault();
    setHeadingText(headingText);
  }

  return (
    <form onSubmit={handleClick}>
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" onChange={handleChange} />
      <button 
      type="submit"
      style={{backgroundColor:isMouseOver ? 'black': 'white'}}
      onMouseOver={onMouseOver} onMouseOut={onMouseOut} >Submit</button>
    </div>
    </form>
  );
}

export default App;
