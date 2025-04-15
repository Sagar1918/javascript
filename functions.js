/** A Function is a block of code that is designed to perform a specific task and executed
 *  when it is been called or invoked.
 * Parameters are passing values which is present in called function.
 * Arguments are sending values which is present in calling function.
 *
 * "Scope" determines the accessibility of variables, objects and functions from different parts of the code.

In JavaScript, there are four types of scopes: 

1. Function Scope: In function scope, variables defined in function are not accessible(visible) from outside the function. Accessing them outside the function will throw an error.

2. Global Scope: The variable which are declared outside the function are global scoped.

3. Block Scope(apply for let & const) : Variables which declared inside a {} block are cannot be accessed from outside the block.

4. Lexical Scope: It is used in Nested functions, where a variable defined in outer function can be accessed in inside the inner function after the variable declaration.

Note: If we want to access the inner function data, we need to call that inner function in outer function. Otherwise, we won't get the data.
 * 
 * Note: Return statement is used to return a value when the function is called. Return denotes that the
 *  function is ended and any code after return in the function block it won't work.
 * 
 * "Implicit return " is used in arrow functions for a single line of code. We don't need to add return keyword
 * 
 * 2. Undeclared variables are global variables.
 * 
 
 *
 *  Functions can be declared in 3 ways
 * 1. Using function keyword
 * 2. Using expression: Here using expression at the end of curly brace, we need to end with semicolon(;)
 * 3. Using arrow function
 */
/** Types of functions in javascript
 * 
 **** 1. Named function: is a function using the function keyword which is followed by function name.
 * Eg: 
 
	function add(a, b){
	return a+b ;
	}
	console.log(add(5, 4));

***2. Anonymous function: We can define a function without giving it a name. This nameless function referred
to as anonymous function. A variable must be assigned to an anonymous function. 
Eg: 

let add = function(a, b){
      return a + b;
    }
    console.log(add(5, 4));

***3. Nested function: is a function which contain one or more inner functions. 
The inner function has access to the variables and arguments of the outer function. 
However, variables declared within inner functions cannot be accessed by outer functions. 
Eg:

function outer(data){
  function inner(){
    console.log(`Hello ${data}`);
  }
  return inner();
}
outer('buddy');
4. Immediately invoked funcs:
5. Recursive function : Looping again and again
 */

//Return statement example
function outer(data) {
  function inner() {
    console.log(`Hello ${data}`);
  }
  return inner();
}
outer("buddy");

function calcAddition(number1, number2) {
  return number1 + number2;
}
console.log(calcAddition(6, 9));

/*********   callback functions
 * These are the functions which accepts another function as an parameter
 * In callback func When you pass the function as an argument do not use the paranthesis like showOk in ask func below
 *  *********** */

function ask(question, yes, no) {
  // if (confirm(question)) yes();
  // else no();
}

function showOk() {
  alert("Successful");
}
function showCancel() {
  alert("Rejected");
}

ask("Do you continue", showOk, showCancel);
//Here ask is a callback function in these callback funcs the parameters of showOk & showCancel do not have the () paranthesis

/** setTimeOut(function,time(in ms)) */

/** Recursive function */
function countDown(num) {
  console.log(num);
  num--;
  if (num >= 0) {
    countDown(num);
  }
}
countDown(5);

/**  Higher order functions: Higher order functions are functions that take one or more
 * functions as arguments, or return a function as their result.*/

function multipleGreet(func, n) {
  //multipleGreet is a Higher order function
  for (let i = 1; i <= n; i++) {
    func();
  }
}

let greet = function () {
  console.log("Hello");
};

multipleGreet(greet, 5);

/** Methods: Actions that can be performed on an object */

const calCulate = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
};
let res = calCulate.add(20, 10);
console.log(res);
