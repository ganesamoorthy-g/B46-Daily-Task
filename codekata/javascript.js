// let input='guvi';
//     console.log(input.split(''));

// let a=4;
// for(i=0;i<4;i++ ){
//     console.log(i)
// }
// let add=4;
// for (let value of add){
//     console.log(value)
// }

// let char='ganesamoorthy';
// for(let index of char){
//     console.log(index , ':' ,char);
// }

// let sample = [1, 2, 3, 4, 5, 6];
// let final = 0;
// for (let i = 0; i < sample.length; i++) {
//     if (sample[i] % 2 !== 0) {
//         final+=sample[i];
//     }

// }
// console.log(final +" "+ 'is odd total')


// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddSum = 0;

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] % 2 !== 0) { // Check if number is odd
//     oddSum += myArray[i];
//   }
// }

// console.log("The sum of the odd numbers in the array is:", oddSum);


// let sample = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < sample.length; i++) {
//     if (sample[i] % 2 == 0) {
//         console.log(sample[i])
//     }

// }

// let arr=[1,2,3,4,5];
// for (let i=0;i<=arr.length;i++){
// console.log(arr[i])
// }

// let a=99999;
// let b= 99998;
// let c=a*b;
// // console.log(c)

// let s='hello world'
// console.log(s)


// let a=0;
// if(a>0){
//     console.log(a +" " + "is passitive")
// }
// else{
//     if (a<0){
//         console.log(a + " " + "is negative")
//     }

//     else{
//         console.log(a + " " + "is zero")
//     }
// }

// let day = 3;
// let findDay = 0;
// switch (day) {
//     case 0:
//         findDay = "sunday"
//         break;

//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     default:
//         dayName = "Invalid day";
// }

// console.log(dayName); 

// //for of loop
// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let value of arr){
//     console.log(value)
// }

// //for in loop
// let str='ganesamoorthy';
// for (let index in str){
//     console.log(index)
// }

//object
// let book={
// purchaserName :'ganesh',
// price:65.34

// }
// console.log(Object.entries(book));
// console.log(Object.keys(book));
// console.log(Object.values(book));
// let particular=Object.entries(book);// if print the  index position
// console.log(particular[1])

// // function (method 1)

// function person(person1) {
//     console.log('hi how are you',person1)
// }
// function anotherPerson() {
//     person()

// }
// person('ganesh');

// // function (method 2)

// function add(nm1, nm2) {
//     return nm1 + nm2
// }

// function sub(nm1, nm2) {
//     return nm1 - nm2
// }
// console.log(sub(add(5,4),7))

// // function (method 3)

// let arr = [1,2,3,4,5];

// function add() {
//     let final = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {

//             final += arr[i]
//         }

//     }
//     console.log(final)
// }

// add();

// // function (method 4)

// function calc(num1, num2, type) {
//     if (type == 'add') {
//         return num1 + num2;
//     } else if (type == 'sub') {
//         return num1 - num2;
//     }
// }
// console.log(calc(calc(5, 6, 'add'), 7, 'sub'));


// let arr=[1,2,3,4,5];
// // let findarr=0;
// // for(let val of arr){
// // findarr+=val

// // }
// // console.log(findarr)


// let findSum=function (arr){
//     let findarr=0;
// for(let val of arr){
// findarr+=val   
// }
// return findarr
// }
// console.log(findSum(arr))

// let arr=[1,2,3,4,5];
// let findSum=function (arr){
//    let final=0;
//    for(let val of arr){
//     if(val % 2 ==0){
//         final+=val
//     }
//    }
//    return final
// }
// console.log(findSum(arr))

// function add (arr){
//     let final=0;
//     for(let val of arr){
//      if(val % 2 ==0){
//          final+=val
//      }
//     }
//     console.log(final)
//  }
//  let arr=[1,2,3,4,5,6,7]
//  add(arr)



//javascript object convert into JSON string

// person={
//     name:"ganesamoorthy",
//     age:34,
//     dept:"BE.EEE"
// };
// console.log(JSON.stringify(person))

// JSON string convert into javascript object
// let json = `{
//         "name": "ganesamoorthy",
//         "age":34,
//         "dept":"BE.EEE"
//     }`;
// let jObject = JSON.parse(json);
// console.log(Object.values(jObject));

//arrow function 

//method 1
// let sum= num=> num**2
// console.log(sum(2));

//method 2
// let add=(num1,num2)=>{
//     return num1+num2
// }
// console.log(add(4,3))

// //method 3
// let mul=(l,b,h)=> l*b*h
// console.log(mul(2,3,4))

// IIFE - Immediately Invoked Function Expressions
// // anonymous function
// ((num)=>{
//     console.log(num**2)
// })(3);

//array destructuring

// let num=[1,2,3,4,5];
// let [a,b,c]=num;
// console.log(a,b,c);

//rest operators (method 1)
// let [a,b,...c]=[1,2,3,4,5,6,7,8]
// console.log(c);

//rest operators (method 2)
// function add(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//     }
//     return sum;
// }

// console.log(add(5, 6, 7,2,8));

////object destructuring
// let arr={
//     name:'ganesh',
//     age:34
// }
// let person=arr;
// console.log(person)


//spread operators (method 1)
// let a=[1,2,3,4,5];
// let b=[...a];
// a[2]=20;
// console.log(a)
// console.log(b)


//spread operators (method 2)
// let person={
//     name:'ganesh',
//     age:32
// }
// let details={...person};
// details.name='sudha'

// console.log(person)
// console.log(details)

//Template literal (method 1)
// let name='ganesh'
// console.log("hello" , name) //normal formet
// console.log(`hello how ${name}`)// template literal


//Template literal (method 2)
// let numbers=[1,2,3,4]
// let solution=0
// for(let val of numbers){
//     solution+=val
// }
// console.log(`${numbers} of array total value is ${solution}`)

