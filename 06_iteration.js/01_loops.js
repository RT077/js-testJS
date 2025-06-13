// ##### for loop

// for (let index = 1; index < 10; index++) {
//     const element = index;
//     if (element==5) {
//         console.log("5 is best Number");
//         continue
//     }
//     console.log(element);
// }

//----------------------------------------------------------------------------
// let myArray=["abc","def","ghi","jkl"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

//----------------------------------------------------------------------------

// ##### while loop & do whille loop
// while (true) {
//     console.log("yes");
//     break
// }

//----------------------------------------------------------------------------

// let index=0;
// while (index<=10) {
//     console.log(`value of index is ${index}`);
    
//     index=index+2;
// }

//----------------------------------------------------------------------------

// let myarr=["abc","bcb","sksk","polo","hyhuh"]
// let arr=0;
// while (arr<myarr.length) {
//     console.log(myarr[arr]);
//     arr++
// }

//----------------------------------------------------------------------------
//  ## do while loop

//let score=11;
// let score=10;
// do {
//     console.log(`score is ${score}`);
//     score++
    
// } while (score<=10);

//----------------------------------------------------------------------------


//      ##for of loop

// const namee=["rohan","soham","nitesh","sam"];
// for (const eachName of namee) {
//     console.log(eachName);  
// }

//----------------------------------------------------------------------------

// const greeteing="hello world...!";
// for (const greet of greeteing) {
//     //console.log(`each value is :- ${greet}`)
//     if (greet!==" ") {
//         console.log(`each value is :- ${greet}`)
//     }
//     }

//----------------------------------------------------------------------------

    // const map = new Map();
    // map.set('city1','pune')
    // map.set('city2','akola')
    // map.set('city3','mumbai')
    // map.set('city4','satara')
    // map.set('city5','sangli')
    // //console.log(map);
    // // Map are iterable
    // //for (const [key,value] of map) {
    
    //----------------------------------------------------------------------------

    // for (const [a,b] of map) {
    //    // console.log(eachEle);
    //    //console.log(a,' :- ',b);    
    // }

    //----------------------------------------------------------------------------

    // const myObj={ 
    //     "city1":"pune",
    //     "city2":"akola",
    //     "city3":"mumbai",
    //     "city4":"satara",
    //     "city5":"sangli"
    // }
    // for (const [key, value] of myObj) {
    //     // console.log(key,' :- ',value);// TypeError: myObj is not iterable
        
    // }

//----------------------------------------------------------------------------

//     const myObject={
//         js:"javascript",
//         java:"Java",
//         cpp:"c++",
//         rb:"ruby"
//     }
//    for (const key in myObject) {
//     console.log(`${key} full form ${myObject[key]} `);
//     }


//----------------------------------------------------------------------------

// const coding=["js","java","ruby",".net","c++"];
// coding.forEach( function (item){
// console.log(item);
// } )

// coding.forEach((item)=>{
// console.log(item);

// })

//----------------------------------------------------------------------------

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

//----------------------------------------------------------------------------

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })

//----------------------------------------------------------------------------

// its a comman practie for iteration object in array
// mostly use for DB 

// const myCoding=[{
//     languageName: "javaSript",
//     fileName:"js"
// },
// {
//     languageName:"java",
//     fileName:"javafile"
// }
// ]
// myCoding.forEach( (item)=>{
//     console.log(item.languageName );
    
// })
//----------------------------------------------------------------------------

// const coding=["js","java","ruby",".net","c++"];

// const values =coding.forEach( (item)=>{
//     console.log(item);
    
// })
// console.log(values);
// in that case foreach loop doesnt return anything

//----------------------------------------------------------------------------

// const myNum=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNum.filter((num)=>num>4);
// console.log(newNums);   //  o/p : [ 5, 6, 7, 8, 9, 10 ]

// const newNums=myNum.filter( (num)=>{
//    // num>4;      // o/p : [] for that we ave to expleitly return the value
//    return num >4;
// });
// console.log(newNums); //  o/p : [ 5, 6, 7, 8, 9, 10 ] 

//----------------------------------------------------------------------------

//for using foreach loop
// const newNum=[];
// myNum.forEach ((item)=>{
// if (item>5) {
// newNum.push(item);    
// }
// }) 
// console.log(newNum); // [ 6, 7, 8, 9, 10 ]

//----------------------------------------------------------------------------

//ex.in db there is a lots of obj,user apply filters on web page so whatever the user wants we show
// const Books=[
//     {title: 'Book One', genre: 'Friction', publish: 1981, edition: 2004},
//     {title: 'Book Two', genre: 'Science', publish: 1997, edition: 2006},
//     {title: 'Book Three', genre: 'Non-Friction', publish: 1789, edition: 2002},
//     {title: 'Book Four', genre: 'Science', publish: 2004, edition: 2005},
//     {title: 'Book Five', genre: 'Non-Friction', publish: 1987, edition: 2003},
//     {title: 'Book Six', genre: 'History', publish: 1887, edition: 2003}
// ];
// // const userBooks=Books.filter( (bk)=>bk.genre==="Science");
//  const userBooks=Books.filter( (bk)=> {
//     return bk.edition===2003 && bk.genre==="History"}) ;
// console.log(userBooks);

//----------------------------------------------------------------------------
//#########  Array.map()
// const myNumbers=[1,2,3,4,5,6,7,8,9,10];
// //const newNumms=myNumbers.map( (num)=> num+10)

// const newNumss=myNumbers
//                         .map( (num)=> num *10)
//                         .map( (num)=> num +1)
//                         .filter( (num=> num>=50))
// console.log(newNumss);

//----------------------------------------------------------------------------
//#########  Array.reduce()

// accumulator is empty variable
const myNumbers=[1,2,3,4,5,6,7,8,9,10];
// const myTotal=myNumbers.reduce( function (accumulator ,currentValue){
//     console.log(`acc:  ${accumulator} and curr valu : ${currentValue}`);
    
//     return accumulator+currentValue
// }, 0)
//----------------------------------------------------------------------------

// using arrow function
// const myNumm=myNumbers.reduce( (acc , curVal)=>acc+curVal,0)
// console.log(myNumm);

//----------------------------------------------------------------------------

const shoppingCart=[
    {
    itemName: "js Course",
    price :299
},
    {
    itemName: "java Course",
    price :999
},
    {
    itemName: "python Course",
    price :199
},
    {
    itemName: "sql Course",
    price :599
}
]

const priceToPay= shoppingCart.reduce( (acc , item)=> acc+ item.price ,0)
console.log(priceToPay);
