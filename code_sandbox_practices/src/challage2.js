import React from "react";
import ReactDOM from "react-dom";

const name = "Ganesh";
const currYr = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>opyright @ {currYr} </p>
  </div>,
  document.querySelector("#root")
);
