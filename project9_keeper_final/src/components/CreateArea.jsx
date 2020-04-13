import React,{useState} from "react";

function CreateArea(props) {
  const [note,setNote]=useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {value,name}=event.target;
    setNote(preVal=>{
      return {
        ...preVal,
        [name]:value
      }
    });
  }

  function submitForm(event){
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title:"",
      content:""
    });
  }



  return (
    <div>
      <form onSubmit={submitForm} className="create-note">
        <input name="title" 
        value={note.title} 
        placeholder="Title" 
        onChange={handleChange} />

        <textarea name="content" 
        value={note.content} 
        placeholder="Take a note..." 
        rows="3" 
        onChange={handleChange} />
        
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
