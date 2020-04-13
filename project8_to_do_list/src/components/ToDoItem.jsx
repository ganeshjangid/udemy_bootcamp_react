import React from "react";

function ToDoItem(props){
    return <div><li>{props.data} &nbsp; &nbsp; &nbsp;<i className="fas fa-window-close"  onClick={()=>{
        return props.onChecked(props.id)
    }}></i></li> </div>;
}

export default ToDoItem;
