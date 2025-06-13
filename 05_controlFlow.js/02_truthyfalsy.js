/*
##  falsy values
    false, 0, -0, BigInt, "", null, undefined, NaN

##  truthy values
    "0", 'false', " ",[], {}, function(){}
*/
// nullish colescing operator (??) it is for null and undefined
let val1;
//val1=5??10;
// val1 =null ?? 10;
// val1 =undefined ?? 15;
console.log(val1);


// ternar opertaor

// condition ? true :false;

const iceTeaPrice=120;
iceTeaPrice<=80?console.log("less than 80") :console.log("greather than 80");

