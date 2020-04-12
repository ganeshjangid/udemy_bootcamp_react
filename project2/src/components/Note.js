import React from "react";


function Note(prop) {
  return (
    <div>
      <div className="note">
        <h1>{prop.title}</h1>
        <p>{prop.content}</p>
      </div>
  
    </div>
  );
}

export default Note;
