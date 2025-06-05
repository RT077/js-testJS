//to create an obj threre are two ways 1. litrals 2.constructor
//  Singleton : if we create an obj using constructor then its a singleton Ex. Object.create
// object Literals
const jsUser={
    name :"rupesh",
    age :18,
    loccation:"pune",
    email:"rt@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Saturady"]
};

jsUser.greetings=function () {
    console.log(`hello ${this.name} good morning`);
    
}
console.log(jsUser.greetings());

console.log(jsUser.function);
console.log(`namaste ${jsUser.name}`);

//Object.freeze(jsUser)
jsUser.name="hitesh";
console.log(`hello ${jsUser.name}`);



