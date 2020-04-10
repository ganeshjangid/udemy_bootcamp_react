import React from "react";
import ReactDOM from "react-dom";

const fname = "ganesh";
const lname="Suthar";
const luckMum=7;

const H1Style={
  color:"red",
  fontSize:"12px",
  border:"1px solid blue"
}


ReactDOM.render(
  <div>
    <h1 style={H1Style}>Hello {`${fname} ${lname}`}</h1>
    <p>Your Lucky number is {luckMum}</p>
    <p>Your Lucky number is {Math.floor(Math.random()*10)}</p>
  </div>,
  document.querySelector("#root")
);

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello Word";
// document.getElementById("root").appendChild(h1);
