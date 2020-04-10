//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const img="https://picsum.photos/200/300";

//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Paneer Handi</li>
      <li>Burger</li>
      <li>Pizza</li>
    </ul>

    <img src={img +"?grayscale" } className="imgSize" />
    <img src="https://picsum.photos/seed/picsum/200/300" className="imgSize" />
    <img src="https://picsum.photos/200/300/?blur=2" className="imgSize" />
  </div>,
  document.querySelector("#root")
);

//It should display an unordered list (bullet points).
//It should contain 3 list elements.
