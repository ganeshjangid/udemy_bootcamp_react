import React from "react";

function Input(pros){
    return <div>
        <input type={pros.text} placeholder={pros.placeholder} />
    </div>
}


export default Input;
