function addTowNumbers(number1,number2) {
    return number1+number2;
}

const sum=addTowNumbers(2,3);
// console.log(`total sum = ${sum}`);

//situation like if user add more item in card what will be the function 
// we are use spread operator i.e (...) also knonw as rest operator. items added in array
// function calculateCardPrice(...num1){
// return num1;
// }
// console.log(calculateCardPrice(200,3400,988));
 
//if interviewer asked you 
function calculateCardPrice(value1,value2,...num1){
return num1;
}
// console.log(calculateCardPrice(200,3400,988,77889,67));//[ 988, 77889, 67 ]

const user={

    userName:"rupesh",
    email:"abc@gmail.com"
}
function handleObjet(anyObj) {
    console.log(`Username is ${anyObj.userName} and the Email is ${anyObj.email}`);
}
handleObjet(user)
// easy way 
handleObjet({
    userName:"sam",
    email:"sm@gail.com"
})
// for array
const myNewArray=[200,300,500,400]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));



