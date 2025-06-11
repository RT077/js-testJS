// Immediately Involed Function Expression(IIFE)
// defination : (IIFE) are JavaScript functions that are executed immediately after they are defined.
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

//() function defination 
//() function execution call

// prb : when app start at that time db connection is ready 

// function one(){
//     console.log(`DB connected...`);
// }
// one();

// solu :
(function one(){
    // this is a named iife
    console.log(`DB connected...`);
})
();

// this is simple iife or unnamed iife
( (name) =>{
    console.log(`my name is ${name}`);
})
(`rupesh`)