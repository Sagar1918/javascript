/**There are 3 types of control flow statements in javascript. They are
 * 1. Conditional statements(if-else,switch):
 * 
 * //if-else:
 * if(condition){
 * //statements
 * }
 * else{
 * //statements
 * }
 * //switch
 * 
 * 2. loops
 * 
 * 3. try-catch 
 * Note: 
 * try-catch only works for run-time errors & we can write single try block without the catch block also. 
 * error has 3 Parameters name,message & stack. Give by error.name , error.message
 * There are 7 types of JavaScript errors: Syntax error, Reference Error, Type Error, Evaluation Error, RangeError, URI Error and Internal Error.
 * finally block code will always execute
 * 
 * If we want to perform a same task for certain number of times we can use loops
 * ****** Loops in javascript, We have 7 loops in js
 * 1.for loop
 Syntax: 
 
 for (initialization; testing condition; increment/decrement) {
    statement(s)
}
 * 2.while loop
Syntax :

while (boolean condition) {
    loop statements...
}
 * The above two loops are entry controlled loops which means the test condition is tested before entering the loop body.
 
* 3.do-while loop: is an exit controlled loop because  the block of code is executed at least once, even if the condition is false.

* 4.for-in loop: is used to loop through the properties of an object.

* 5.for-of loop: is used to loop through the values of an iterable object (such as an array).
Here, in two loops of for-in & for-of we are declaring the variable in loop only. 
Syntax:

for (let prop in/of obj) {
    //statements
}

* 6.forEach loop
Syntax:

arr.forEach((value) => {})

*7.map loop
Syntax:

arr.map((value) => {})
*/
//1.if-else
let age = 20;
let country = "india";

if (age >= 18 && country == "india") {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//2. switch
let day = "Thursday";

switch (day) {
  case "Sunday":
    console.log("Today is sunday");
    break;
  case "Wednesday":
    console.log("Today is wednesday");
    break;
  case "Thursday":
    console.log("Today is thursday");
    break;
  default:
    console.log("Other day");
}

//Ternary operator(? :)

let value = 24;
let result = value >= 21 ? "Allow him" : "Don't allow him";
console.log(result);

/******** 1.for loop ****** */
for (let i = 0; i < 4; i++) {
  console.log(i);
}

/****** 2.while loop  ***** */
let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

/******* 3.do-while loop  *********** */
let i1 = 0;
do {
  console.log(i);
  i1++;
} while (i1 < 6);

/*******  4.for-in loop     ***** */

const obj = { name: "sagar", age: 25, gender: "male" };

for (let prop in obj) {
  //Here we are passing obj object data into prop variable
  console.log(prop + ": " + obj[prop]);
}

function GFG() {
  let Platform = { fname: "geeks", Mname: "for", lname: "geeks" };

  let text = "";
  let x;
  for (x in Platform) {
    text += Platform[x] + " ";
  }
  console.log(text);
}
GFG();

/********  5.for-of loop   ******** */

const arr = [1, 2, 3];

for (let val of arr) {
  console.log(val);
}

/***********  6.forEach loop
 * A forEach loop is a method on arrays that executes a function for each element in the array. **************** */

const names = ["Sagar", "Hemanth", "Shashi"];
names.forEach((val) => console.log(val));

/**********  7.map loop  *************
 * A map loop is a method on arrays that creates a new array by executing a function on each element in the array.
 */

const array = [1, 2, 3];
const newArr = array.map((val) => val * 2);
console.log(newArr);

// Map is an object that takes key-value pair as input
let mapObject = new Map([
  ["Geeks", 1],
  ["For", 2],
  ["geeks", 3],
]);

console.log("Display of Key-Value Pair->");
for (const entry of mapObject) {
  console.log(entry);
}

console.log("Display of Value only->");
for (const [key, value] of mapObject) {
  console.log(value);
}
