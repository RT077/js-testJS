const one={
    username:"rupesh",
    address:"pune",
    welcomeMassage:function(){
        console.log(`${this.username} ,Welcome to website..`);
        console.log(this);
        
        
    }
}
// one.welcomeMassage();
        // one.username="Sam";
        // one.welcomeMassage();
/* o/p


rupesh ,Welcome to website..
{
  username: 'rupesh',
  address: 'pune',
  welcomeMassage: [Function: welcomeMassage]
}
Sam ,Welcome to website..
{
  username: 'Sam',
  address: 'pune',
  welcomeMassage: [Function: welcomeMassage]
}

console.log(this); // o/p {}
*/

// function abc(){
//     console.log(this);
// }
// abc();

// const addNum =(num1,num2)=>{
// return num1+num2;
// }
// console.log(addNum(3,2)); // normal arrow function

//implisitly return arrow function
// const addTwo=(num1,num2)=>(num1+num2) //if we wirte bracket then we dont need to wirte return keyword, 
// but if we write curly braceses then we must have to write return keyword
// console.log(addTwo(3,4));

//how to return Object
//const addTwo=(num1,num2)=>{username:"rupesh"}// undefined

//const addTwo=(num1,num2)=>({username:"rupesh"})
// console.log(addTwo(3,4));