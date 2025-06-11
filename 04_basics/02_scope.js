let a=10;
const b=20;
// var c=30;
// console.log(`${a} ${b} ${c}`);
//{} => that is scope

function one (){
    const usernaame="rupesh";
    function two(){
        const website="youtube";
        //console.log(usernaame);
      //  console.log(website);
    }
    // console.log(website);
   
    two();
}
one()

//###################################################

function addOne(num){
return num +1;
}
console.log(addOne(5)); // this is a basic function 

//###################################################
 const addTwo =function (num){
  return num +2
 }
console.log(addTwo(3));// this is we called a expression 
// in js variables can store anything that's why in js variables are very strong it can store ex: json values ,function

