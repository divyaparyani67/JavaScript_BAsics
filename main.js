// // console.log("Hello from main.js");

// // variables

// // let age = 25; //reassign the value
// // const salary = 80000; //cannot change the value

// // string represents a text value
// //const name = "divya";
// //const surname = `Paryani`;

// //numbers represents integer and floating point number

// //const total = 80

// //boolean represents logical entities can only hve 1 of 2 values true or false, its used  conditionally based on the value being true or false

// // const isAdmin =  true;
// // const isuser= false;

// // null is empty value or unknown value  in JS

// // const data = null

// //objects

// const person = {
//     //key can be only string or symbol datatype
//     //value  can be any datatype
//     "Name": "Divyaa",
//     "Age": 20
// }

// const oddNumbers =[1,3,4,5]

//assignment operators

// let number = 0;

// //airthmetic operator

let x = 10;
let y = 2;

// console.log(x * y);
// console.log(++y); //increses the value by 1
// console.log(--x); //decreses the value y 1

// //comparision operators compares two values and return a boolean value
// // this operators are primarily used in loops and branching statements

// console.log(x == y); // to check  value is equal or not
// console.log(x === y); // checks the data type and value is equal or not
// console.log(x != y); //not equal to value returns true
// console.log(x !== y); // not equal to value (strictly)
// console.log(x > y); // x is  greater than y
// console.log(x >= y); // x is  greater or equal than y
// console.log(x < y); // x is is less than y
// console.log(x <= y); // x is is greater than y

//logical operators
//logical operators perform logical operation and return either true or false

// && double ampersand
//const isValidnumber = x > 8 && 8 > y;
//x greater that 8 ampersand ampersand 8 greater than y
// && double ampersand  is called  logical and operator it returns true only if both the operands evaluate to true if not it returns false

//||(or)  logical or operator
//const isValidnumber = x > 20 || 8 > y;
// ||(or)  logical or operator denoted by double pipe this will return true if either of the operands  is true

// logical not operator
// logical not operator neg

// const isValid = true;

// console.log(!isValid); // if it true it will show false and vice versa

// string operators
// to join 2 or more strings we can use + operator

// console.log("Divya " + "Paryani");

// //ternary operator
// // the ternary operator returns the value based on the condition

// const isEven = 10 % 2 === 0 ? " Number is even" : " Number is not even";
// // the 10 % 2 === 0 is evaluated first if the remainder of 10 % 2 is 0  assign true the ease if the condition is not true assign false to ease the even

// console.log(isEven);

// implicit type conversion
// console.log(5 + "3");
// console.log("5" + "2");
// console.log(true + "4");
// console.log("4" - "3");
// console.log(4 - "6");
// console.log("5" - false);
// console.log("6" / "4");
// console.log("7" * "2");
// console.log("35" % "100");
// console.log("Divya" - "Paryani");
// console.log("5" - null);

//explicit type conversion
// console.log(Number("5"));
// console.log(Number("false"));
// console.log(Number(""));
// console.log(parseInt("5"));
// console.log(parseFloat(1.2));
// console.log(String(500));
// console.log((300).toString());
// console.log(Boolean(10));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean("  "));
// console.log(Boolean(NaN));
// console.log(Boolean(""));

// const var1 = "1";
// const var2 = 1;

// console.log(var1 == var2);
// console.log(var1 === var2);

const num = 1; //-5;

//if else
// if (num > 0) {
//   console.log("Number is positive");
// }else{
// console.log("Number is not positive");
// }

//else if

// if (num > 1) {
//   console.log("Number is Positive");
// } else if (num < 0) {
//   console.log("Number is negative");
// } else {
//   console.log("Number is Equal");
// }

// const color = "blue";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "green":
//     console.log("colour is green");
//     break;
//   case "blue":
//     console.log("colour is blue");
//     break;

//   default:
//     console.log("not a valid color");
// }

//loops

//for loop

// for (let i = 1; i <= 5; i++) {
//   console.log("For Loop " + i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log("For Loop " + i)
//   i++
// }

// let i = 5;
// do {
//   console.log("For Loop " + i)
//   i++;
// } while (i <= 5);

// for of loop
// const numArray = [1, 2, 3, 4, 5];

// for (const num of numArray) {
//   console.log("For Loop " + num);
// }

//functions

// function great(username) {
//   console.log("Good Morning " + username);
// }
// great("Divya");

// function add(a, b) {
//   return a + b;
// }

// const sum = add(3, 4);

// console.log(sum);

// arrow function

// const arrowSum = (a, b) => {
//   return a + b;
// };

// const addFive = (number) => a + b;

// const sum = arrowSum(3, 4);

// console.log(sum);

//block scope
// if (true) {
//   const myName = " My name is divya";
// }
// console.log(myName);

// if (true) {
//   let myName = " My name is divya";
// }
// console.log(myName);

// above code throws the error ReferenceError: myName is not defined

//below code works fine
// if (true) {
//   const myName = " My name is divya";
//   console.log(myName);
// }

// if (true) {
//   var myName = " My name is divya";
// }
// console.log(myName);
