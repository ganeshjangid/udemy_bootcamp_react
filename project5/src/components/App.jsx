import React , {useState} from "react";
  

function App() {


  const [count,setCount]=useState(0);
  
  function increaseCnt(){
    setCount(count + 1);
  }
  
  function decrementCnt(){
    setCount(count - 1);
  }
  

  return (<div className="container">
    <h1>{count}</h1>
    <button onClick={increaseCnt}>+</button>
    <button onClick={decrementCnt}>-</button>
  </div>);

}

export default App;
