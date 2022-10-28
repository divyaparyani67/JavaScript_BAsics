//Javascript is a synchronus, single threded language.
//Seven types of Premitive Data Types 

// let num = 5; //Number
// console.log(typeof num);


// let word = "The"; //string
// console.log(typeof word);

// let foo = true; //boolean
// console.log(typeof foo);

// const sym2 = Symbol('foo'); //symbol
// console.log(typeof sym2);

// let car; //null
// console.log(car);

//Non Premitive Data types are arrays and object.

//arrays
// let jeep = ["Tier", "Engine", "Seat"]; //

// let emptyArray = []; // empty array
// emptyArray[0] = 1;
// console.log(emptyArray);

// let nestedArray = [1, 2, 3, [4, 5, 6, [0, 1, 2]]]; //*
// let newArray = nestedArray.flat(Infinity);
// console.log(newArray);


// 1. JavaScript Program To Print Hello World

// console.log("Hello world");

// alert("Hello World !")


// console.log("Hello World!");
// alert("Hi I am Divya!");
//document.write("How are you?"); works in html

// 2.JavaScript Program to Add Two Numbers

let a = 2;
//let b = 3;
//let sum = a + b;
//console.log(`sum = ${sum}`); // console.log("sum" + "=" sum );

//3.Add Two Numbers Entered by the User

//let x = parseInt(prompt (`Enter your  num`));
//let y = parseInt(prompt (`Enter your  num`));
//let z = parseInt(prompt (`Enter your  num`));
//console.log(typeof birthDate);

//let  xyz =x + y + z;

//console.log(` the total of ${x}, ${y}  and ${z} is ${xyz}`);

//prompt() is used to take inputs from the user. parseInt() is used to convert the user input string to number.

// 4. JavaScript Program to Find the Square Root

// const number = prompt('Enter the number: ');

// const result = Math.sqrt(number); //Math.sqrt() method takes a number and returns its square root.

// console.log( `the Square root of ${number} is ${result}.`); // with backticks we can write tmplate lieatral ES6 feature

//function squareRoot () {
  //let number = prompt(`Enter the number: `)
  //let result = Math.sqrt(number);
  //return console.log(result);
//}

//squareRoot();

// 5. JavaScript Program to Calculate the Area of a Triangle


// function areaoftriangle(base, height) {

//   let area = (height  * base) /2;

//   return console.log(area);
  
// }

// areaoftriangle(6, 4);

// 6. JavaScript Program to Swap Two Variables values goes from right to left
let a1 = 2;
let b = 3;
// let c;

// c = a1; //a1 is empty and c is 2
// a1 = b; // b is empty and a1 is 3
// b = c; // b is 2 and c is empty

[a1,b] = [b,a1]; //destructing assignment

console.log(`a = ${a1} b = ${b}`);

