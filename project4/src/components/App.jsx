import React from "react";

let isDone = false;
function strike(){
  if(isDone){
    document.getElementById("buyMilk").style.textDecoration=null;
    isDone=false;
  }else{
    document.getElementById("buyMilk").style.textDecoration="line-through";
    isDone=true;
  }
  
}

function App() {
  return (
    <div>
        <p id="buyMilk">Buy Milk</p>
        <button onClick={strike}>Change</button>
    </div>

  );
}

export default App;
