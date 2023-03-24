// //nested function scope
// // let a = 10;//checks third
// // function outer() {
// //   let b = 20;//checks second
// //   function inner() {
// //     let c = 30;//checks first
// //     console.log(a, b, c);
// //   }
// //   inner()
// // }
// // outer()

// //closure
// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner; //we are returning inner function from the outer function ( it returning the  function scope)
//   // in this function we have just one variable  called counter initialized to zero
//   // so we have function inner bundled  together with the variable counter which  is together termed as a clousure
// }
// const fn = outer();
// fn(); // it remembers the value nd increases the value
// fn();
// fn();

// //currying

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 3, 5));

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }

// const curriedSum = curry(sum);
// //console.log(curriedSum(2)(3)(5));

// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add5 = add3(5);

// console.log(add5);

// //this keyword
// // function sayMyName(name) {
// //     console.log(`My Name is ${name}`);
// // }

// //implicit bindind

// const person = {
//   name: "Divya",
//   sayMyName: function () {
//     //console.log(`My name is ${this.name}`);
//   },
// };

// //person.sayMyName(); //this is refering to person keyword

// //explicit binding
// function sayMyName() {
//   console.log(`My Name is ${this.name}`);
// }

// sayMyName.call(person);

// //new binding
// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Divya");

// console.log(p1.name);

// //default binding

// globalThis.name = "Divya";
// sayMyName();

//prototype

// function Person(fName, lName) {
//   this.fisrtName = fName;
//   this.LastName = lName;
// }

// Person.prototype.getFullName = function () {
//   return this.fisrtName + " " + this.LastName;
// };

// // const person1 = new Person("Divya", "Paryani");
// // const person2 = new Person("Ashutosh", "Sapkal");

// // console.log(person1.getFullName());

// //prototypal inheritance

// function SuperHero(fName, lName) {
//   Person.call(this, fName, lName);
//   this.isSuperHero = true;
// }

// SuperHero.prototype.fightCrime = function () {
//   console.log("Firghting Crime");
// };

// SuperHero.prototype = Object.create(Person.prototype);
// SuperHero.prototype.constructor = SuperHero;

// const batman = new SuperHero("Divya", "Paryani");

// console.log(batman.getFullName());

// class keyword

class Person {
  constructor(fName, lName) {
    this.fisrtName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    return this.fisrtName + " " + this.lastName;
  }
}

const classP1 = new Person("Divya", "Paryani");

console.log(classP1.sayMyName());

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);

    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("Fighting Crime");
  }
}

const batman = new SuperHero("Divya", "Paryani");

console.log(batman.sayMyName());

//iterators and iterables

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };

    return iterator;
  },
};
for (const word of obj) {
  console.log(word);
}

//generators
function normalFunction() {}

function* generatorfunction() {
  yield "Hello";
  yield "World";
}

const generatorObject = generatorfunction();
for (const word of generatorObject) {
  console.log(word);
}
