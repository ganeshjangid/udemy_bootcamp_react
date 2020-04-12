import React from "react";
import Login from "./login";

let isLogin=false;

function App() {
  return (
    <div className="container">
      {
        (isLogin) ? <h1>Hello</h1> : <Login />
      }
    </div>
  );
}

export default App;
