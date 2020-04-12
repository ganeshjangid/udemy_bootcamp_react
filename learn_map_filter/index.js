var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function doubleMap(val){
    return val*2;
}
//const mapArr=numbers.map(doubleMap);
const mapArr=numbers.map((val) => val*2);
console.log(mapArr);


//Filter - Create a new array by keeping the items that return true.

const filterArr=numbers.filter(val => val > 4);
console.log(filterArr);

//Reduce - Accumulate a value by doing something to each item in an array.

const reductArr=numbers.reduce((accu,currNum) => accu+currNum);
console.log(reductArr);



//Find - find the first item that matches from an array.

const findData=numbers.find(ele => ele >4);
console.log(findData);


//FindIndex - find the index of the first item that matches.

const findIndexData=numbers.findIndex(ele => ele >4);
console.log(findIndexData);
