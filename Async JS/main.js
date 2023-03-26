// setTimeout
function greet(name) {
  console.log(`Hello ${name}`);
}
const timeoutID = setTimeout(greet, 6000, "Divya");

clearTimeout(timeoutID);

//setInterval

function greetings() {
  console.log("Hello");
}
const intervalID = setInterval(greetings, 3000);
clearInterval(intervalID);

//callback
// callbacks are fubctions passed as arguments to other function
function msg(name) {
  console.log(`Hello ${name}`);
}
function me(msgfn) {
  const name = "Divya";
  msgfn(name);
}

me(msg);

function hola(name) {
  console.log(`Hello ${name}`);
}
function higherorderfunction(callbackfn) {
  const name = "Ashutosh";
  callbackfn(name);
}

higherorderfunction(hola);

//promise
//promise-> promise vale-> fulfillpromise-> reject promise-> success callback-> failure callback

const promise = new Promise((resolve, reject) => {
  let x = 0;
  if (x === 0) {
    resolve();
  } else {
    reject();
  }
});
//Promises can be consumed by registering functions using .then and .catch methods.

promise
  .then(function () {
    console.log("Success, Promise fulfilled");
  }) //promise status  - pending to fulfilled  then() is executed

  .catch(function () {
    console.log("some error has occurred");
  }); // promise status- pending to rejected catch () is executed

//promise.all

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

//async


const getData = async() => {
        var y = await "Hello World";
        console.log(y);
    }
      
    console.log(1);
    getData();
    console.log(2);