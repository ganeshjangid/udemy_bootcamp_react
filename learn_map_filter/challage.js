//import emojipedia from "./emojipedia";
const {emojipedia}=require("./emojipedia");

const newRes=emojipedia.map(val => {

    return val.meaning.substring(0,100);
});

console.log(newRes);
