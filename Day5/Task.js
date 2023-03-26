// //normal function program
// function add(num1,num2){
//     return num1*num2;
// }
// console.log(add(add(2,2),3));

// //arrow function (model 1)
// let arrow=(number1,number2)=>{return number1*number2} 
//     console.log(arrow(5, 5));

// //arrow function (model 2)
// let arrow1=(num1,num2)=>num1*num2;
// console.log(arrow1(2,3));

// //arrow function (model 3)
// let arrow2=num1=>num1 **2;
// console.log(arrow2(3));

// //IIFE - Immediately Invoked Function Expressions
// //anonymous function ()
// ((num1)=>{
//     console.log(num1 **2)
// })
// (4);

// Print odd numbers in an array

// ((num)=>{
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] % 2 !== 0) {
//           console.log(num[i]);
//         }
//       }

//     })
//     ([1,2,3,4,5]);

   // Convert all the strings to title caps in a string array
// ((str)=>{
//     for (let i = 0; i < str.length; i++){
//         console.log(str[i]);
//     }
// })
// (['ganesh','sudha','deeshna']);

// //Sum of all numbers in an array
// ((num1)=>{
//     totalSum=0;
//     for(let i=0;i<num1.length;i++){
//         totalSum += num1[i];
// console.log(totalSum)}
// })
// ([1,2,4,5]);

// Return all the palindromes in an array
((palindrom)=>{
for (let i = 0; i < palindrom.length; i++) {
    let word = palindrom[i];
    let reversedWord = word.split("").reverse().join("");
    if (word === reversedWord) {
      console.log(word);
    }
  }
})
(["racecar", "level", "hello", "deified", "world", "madam","dad",'malayalam'])
