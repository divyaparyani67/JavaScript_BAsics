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
