//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
const date=new Date().getHours();

let msg;
let msgColor={
    color:""
};

if(date < 12){
    msg="Good Morning";
    msgColor.color="green";
}else if(date < 16){
    msg="Good AferNoon";
    msgColor.color="Pink";
}else if(date < 19){
    msg="Good Evening";
    msgColor.color="red";
}else {
    msg="Good Night";
    msgColor.color="blue";
}
ReactDOM.render(
    <div>
      <h1 style={msgColor}>Hello {msg}</h1>
    </div> 
    ,document.querySelector("#root")
  );

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
