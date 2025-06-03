const accountId=12;
let accountEmail ="rupesh@gmail.com";
var accountPassword =12345;
accountCity="jabalpur";
let accountName;
console.log(accountId +""+accountEmail+" "+accountPassword+" "+accountCity);
console.table([accountEmail,accountId,accountPassword,accountCity]);
console.log("---------------------------------------");

//accountId=21 // NOt allowed
 
/*
- prefer not to use var because of blocke scope and functional scope
- if we declear variable without providing value js consider it as undefine 
 */
accountEmail="aaa@gmail.com"
accountPassword=111111
accountCity="udaynagar"
console.table([accountEmail,accountId,accountPassword,accountCity,accountName]);