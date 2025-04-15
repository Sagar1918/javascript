/** A closure is a function that remembers its outer variables and can access them.
 * Here, outervariable is a global variable. So, it can be accessed inside the inner Functions.
 */
//Example 1
function outerFunc(outervariable) {
  const innerFunc = (innervariable) => {
    console.log("outer func value : " + outervariable);
    console.log("InnerFunc value: " + innervariable);
  };
  return innerFunc;
}
//After assigning the calling func name to a different variable, it should have to call by that variable name.
const callingFunc = outerFunc("I' outer func value");
callingFunc("I'm innerFunc value");

//Example 2
// Outer function
function outer() {
  function create_Closure(val) {
    return function () {
      return val;
    };
  }
  let arr = [];
  let i;
  for (i = 0; i < 4; i++) {
    arr[i] = create_Closure(i);
  }
  return arr;
}
let get_arr = outer();
console.log(get_arr[0]()); //0
console.log(get_arr[1]()); //1
console.log(get_arr[2]()); //2
console.log(get_arr[3]()); //3

//Example 3
// Outer function
function outer1() {
  let arr = [];
  let i;
  for (i = 0; i < 4; i++) {
    // storing anonymous function
    arr[i] = function () {
      return i;
    };
  }

  // returning the array.
  return arr;
}

let get_arr1 = outer1();

console.log(get_arr1[0]()); //4
console.log(get_arr1[1]()); //4
console.log(get_arr1[2]()); //4
console.log(get_arr1[3]()); //4

//Example 1
// var x = 10;

// function foo() {
//   var y = 20; // free variable
//   function bar() {
//     var z = 15; // free variable
//     return x + y + z;
//   }
//   return bar;
// }
// let val = foo();
// console.log(val());

//Example 2
// function outer() {
//   let x = 10;
//   function inner(y) {
//     return x + y;
//   }
//   return inner;
// }

// let add = outer();
// console.log(add(5)); // Output:

//Example 3
// function counter() {
//     let count = 0;
//     function increment() {
//       count++;
//       console.log(count);
//     }
//     return increment;
//   }

//   let add = counter();
//   add(); // Output: 1
//   add(); // Output: 2
//   add(); // Output: 3

//Example 4
function multiplier(x) {
  function inner(y) {
    return x * y;
  }
  return inner;
}

let double = multiplier(2);
let triple = multiplier(3);
console.log(double(5)); // Output:
console.log(triple(5)); // Output:
