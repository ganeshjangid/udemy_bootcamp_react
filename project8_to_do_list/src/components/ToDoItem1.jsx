import React,{useState} from "react";

function ToDoItem(props){

    const [isDone,setIsDone]=useState(false);
    function strike(){
        setIsDone(preVal=> !preVal);
    }
    return <li style={{textDecoration : isDone ? "line-through" : "none" }} onClick={strike}>{props.data}</li>;

}

export default ToDoItem;
