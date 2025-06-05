// //two types of obj we create follow
// const createObj=new Object();
// const createObj1={};
// both are empty but the diff is that 1st one is create a singleton obj and 2nd is non singleton obj 

const createObj1={};
createObj1.id=1;
createObj1.name="ravi";
createObj1.isLoggedIn=false;
// console.log(createObj1);


const regularUser={
    email:"shyam@gmail.com",
fullName:{
    userFullName:{
        firstName:"rupesh",
        lastName:"tayde"
    }
}
};
// console.log(regularUser.fullName.userFullName.lastName);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

// const obj3=Object.assign({}, obj1,obj2)
// console.log(obj3);
// but above ex we are use it mostly what we mostly use spread operator
// const obj3 ={...obj1,...obj2};
// console.log(obj3)

//when values came from db
const users=[{
    id:1,
    email:"hb@gmail.com"
},
{
    id:2,
    email:"ghh@gmail.com"
},
{
    id:3,
    email:"ff@gmail.com"
},
]
//console.log(users[1].email);

// console.log(createObj1);
// if you find all the keys and values in obj its use for applying loop over there
// console.log(Object.keys(createObj1));
// console.log(Object.values(createObj1));
// console.log(createObj1.hasOwnProperty("isLoggedIn"));

const course={
    couresName:"javaScript",
    fees:900,
    couresInstructor:"rupesh"
}
// console.log(course.couresInstructor); dont use instead of 
const {couresInstructor:instructor}=course;//destructuring
console.log(instructor);





