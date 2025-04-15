/** Hoisting: In JavaScript, Hoisting is the default behavior of moving all the declarations at the top
 *  of the scope before code execution. Basically, it gives us an advantage that no matter where functions
 *  and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
 *
 * Note: JavaScript only hoists declarations(means allocates memory for declared variables), not initializations.
 * 
 * * fun(); //Calling before declaration

   function fun() { //Declaring
   let name;
   name = "Mukul Latiyan";
   console.log(name); //Mukul Latiyan
  }

  
//Using expressions, or assigning is not accepted for functions
fun() // Calling the expression
 
let fun = () =>{ // Declaring
    let name = 'Mukul Latiyan';
    console.log(name);
}
O/P: Uncaught reference error fun() is not defined
 * 
 * Example:  console.log(name); // undefined, because we are trying to print this before the declaration
 let name = 'Mukul Latiyan'; //Declaration and initializing value

 *typeof null ------> object
 *typeof NaN  ------> number
 *typeof undefined ----> undefined
 *typeof Infinity  ----> number
 */

/** 1. setTimeout() is a method inside the window object, it calls the specified function
 * or evaluates a JavaScript expression provided as a string after a given time period only once.
 *
 * It is used for API calling.
 *
 * Syntax:
 * setTimeout(function|expression, time in ms,arg1,arg2 etc);
 * */
setTimeout(() => {
  console.log("Message is displaying after 3 seconds"); //Message is displaying after 3 seconds
}, 3000);

console.log("This is the demo of setTimeout"); //This line will execute first before the setTimeout()

function alertAfter3Seconds(name) {
  alert("3 Second completed hi!" + name); //3 Second completed hi! john
}
setTimeout(alertAfter3Seconds, 3000, "john");

console.log("Hi all");
setTimeout(() => {
  console.log("My home");
}, 3000);
console.log("Welcome to"); //Hi all Welcome to My home

/** 2. setInterval() Method: The setInterval() method repeats a given function at every given time interval.
 *
 * Syntax: setInterval(function, milliseconds);
 */

setInterval(() => {
  console.log("Hello");
}, 1000);

//Note: setTimeout() is more preferrable than setInterval()

/** 3. promise: is an object which represents eventual completion of an asynchronous operation.
 *
 * Promise object has 2 properties state, result as output.
 * In executor function & in "then" method the 1st argument is always be the resolve thing & 2nd argument will be the reject thing.
 * Then method is nothing but, if your 1st argument fullfilled in executor function, then 1st argument in then method is executed.
 * catch method is used to catch the error & if we give finally, the finally block code can be executed anyway.
 */
let promise = new Promise(function (resolve, reject) {
  // This block is executor which contains producing code which produces result either resolve(value) / reject(value)
  // You can give any name in the place of resolve/reject with your name also its fine like sagar/bram
  setTimeout(() => resolve("Problem resolved"), 2000);
});
console.log(promise);

promise.then(
  function (resolve) {
    console.log("Succesfull");
  },
  function (reject) {
    console.log("Rejected");
  }
);

promise.catch((error) => console.log(error.message));

/** Promise methods:
 * 1. Promise.all([p1, p2, p3]); --------> Promise p1 execute after 3 seconds, p2 = 1sec, p3 = 2sec. Here, it will wait for all & return after 3 seconds only
 * If any promise rejected, it will automatically throw an error
 *
 * (Recommended to use) 2. Promise.allSettled([p1, p2, p3]): Here, this method will return their individual results together as array.
 *
 * 3. Promise.race([p1, p2, p3]); -----> Here, it will return the "single" result of the first settled promise from all of these either it will be rejected / resolved.
 *
 * 4. Promise.any([p1, p2, p3]) ---> Here, it will return the successfull result first. If all the promises failes, it will return all those as array of failure results
 * If all Promises failed, it will return the aggregate error.
 */
let pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pr1 success");
  }, 3000);
});

let pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("pr2 fail");
  }, 1000);
});

let pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("pr3 success");
  }, 2000);
});

Promise.all([pr1, pr2, pr3])
  .then((response) => {
    console.log(response); //['pr1 success', 'pr2 success', 'pr3 success']
  })
  .catch((err) => {
    console.log(err);
    // console.log(err.errors); //This line For showing aggregate errors
  });

//Promise example
const cart = ["shoes", "Mobile", "Laptop"];
const promise2 = createOrder(cart);

promise2
  .then((orderId) => {
    console.log(orderId);
    return orderId; //In promise chaining, we need to return it below
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is Empty");
      reject(err);
    }

    //logic for creating order id
    const orderId = 12345;
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 3000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successfull");
  });
}

function validateCart(cart) {
  return true;
}

/** async & await: async is a keyword that used to create async functions
 * When we give async to a function, it will always "returns the promise"
 * async & await are used to handle promises
 * throw is used to throw the error & by using throw will handle the errors like try catch.
 * await can only be used in async functions & we can have one or more await before the function expressions
 * await can be used infront of the promise
 * We will take the data out from promise by using "then" methods
 * async & await is recommended to use than promise.then / .catch
 */
let hello = async () => {
  //async using arrow function
  return "Hello Buddy";
};

let data = hello();
console.log(data);

//We are taking the returned data out by using then
data.then((res) => console.log(res)); //Hello Buddy

async function morning() {
  throw "This is a random error";
  return "Good Morning"; //This line won't execute because it is throwing an error before
}

//Example
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let h1 = document.querySelector("h1");
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("Color was changed");
    }, delay);
  });
}

async function show() {
  await changeColor("red", 1000);
  await changeColor("green", 1000);
  await changeColor("yellow", 1000);
  await changeColor("purple", 1000);
}

show();

//Example 2: Most important async & await
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p1 has been resolved");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p2 has been resolved");
  }, 40000);
});

async function handleChange() {
  console.log("Function started execution");
  //This line executed & handleChange() suspended from call stack

  //Note: Javascript won't wait for anything
  //await literally suspends the function execution until the promise settles, and then resumes it with the promise result
  const val = await p1; //After p1 promise resolved, handleChange() will again come back into the call stack to execute the below line
  console.log("p1 completed");
  console.log(val);

  const val2 = await p2;
  console.log("p2 completed");
  console.log(val2);
}

handleChange();

/** Fetching API's using axios & fetch
 * let url = 'https://google.com/books';
 * let data = async axios.get(url);
 *
 * Using axios, we will get the response directly in the object form. We don't need to parse the data.
 * But for fetch, we need to parse it.
 */

/** Taking inputs using javascript is by using prompts */
let user = prompt("Enter your name: ");
console.log(user);

/** For warnings, we use alert */
let msg = alert("Danger");
console.error("Something went wrong"); //For showing errors in red colour
console.warn("Fuel is empty"); //Warning the user in orange colour

/** Callback hell is a phenomenon where a Callback is called inside another Callback.
 * It is the nesting of multiple Callbacks inside a function. If you look at the design of the code,
 * it seems just like a pyramid. Thus the Callback hell is also referred to as the 'Pyramid of Doom'.
 *
 * */
let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColor) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColor) nextColor();
  }, delay);
}

changeColor("red", 1000, () => {
  changeColor("green", 1000, () => {
    changeColor("voilet", 1000, () => {
      changeColor("blue", 1000);
    });
  });
});
