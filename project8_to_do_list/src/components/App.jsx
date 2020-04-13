import React,{useState} from "react";
import ToDoItem from './ToDoItem';
import InputItem from './InputItem';

function App() {


  const [items,setItems]=useState([]);

  function addItem(inputText){
    setItems((preIteam)=>{
      return [...preIteam,inputText];
    });

  }

  function deleteItem(id){
    setItems(preIteam=>{
      return preIteam.filter((Fid,index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputItem onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem,index)=>(
            <ToDoItem 
            key={index}
            id={index}
            data={todoItem} 
            onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
