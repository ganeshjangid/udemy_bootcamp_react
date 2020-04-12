import React,{useState} from "react";

function App() {

  //const [fName,setFname]=useState("");
  //const [lName,setLname]=useState("");

  // function handleFname(event){
  //   setFname(event.target.value);
  // }


  // function handleLname(event){
  //   setLname(event.target.value);
  // }
  
  // function handleSubmit(event){
  //   event.preventDefault();
  //   setFname(fName);
  //   setLname(lName);
  // }

  const [fullName,setFullName]=useState({
    fName:"",
    lName:""
  });

  function handleFullName(event){
    const { value,name }=event.target;

    setFullName(preVal =>{
      //console.log(preVal);
      if(name === 'fName'){
        return {
          fName:value,
          lName:preVal.lName
        }
      }else{
        return {
          fName:preVal.fName,
          lName:value
        }
      }
    });


  }


  return (


      <div className="container">
      <h1>Hello {fullName.fName + " "+fullName.lName}</h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleFullName} />
        <input name="lName" placeholder="Last Name" onChange={handleFullName}/>
        <button type="submit">Submit</button>
      </form>
      </div>

  );
}

export default App;
