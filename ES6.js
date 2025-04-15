/** 1.Array destructuring */

let values = [10, 20, 30, 40];

// let [a,b,c,d] = values   //O/P: 10 20 30 40
//Using rest operator(...)
let [a, b, ...rest] = values;
console.log(a, b, rest); //10 20 [ 30, 40 ]

/** 2.Object destructuring is a feature that allows you to extract the properties of an object into variables*/

let person = {
  fname: "Sagar",
  age: "23",
  Gender: "Male",
};

//Destructuring the object
// const {fname:FirstName,age:Age,Gender:gender}; We can use with different names also
const { fname, age, Gender } = person;
console.log(fname, age, Gender);

/** 3.Rest operator(...)
 * By using rest operator in application, the output will be in array form
 * The rest variable should be placed at last in function parameter
 */
//1.
function details(fname, lname, ...others) {
  console.log(fname + " " + lname); //Sagar Brammaiahgari
  console.log(others[0]); //24
  console.log(others[1]); //Domakonda
  console.log(others[2]); //undefined because no value is passing
}
details("Sagar", "Brammaiahgari", 24, "Domakonda");
//2.
let arr = [2, 4, 6, 8];

let [one, two, ...remaining] = arr;
console.log(one, two, remaining); // 2 4 [ 6, 8 ] using rest
console.log(...arr); //2 4 6 8  using spread
/** 4.Spread operator(...)
 * If 3 dots(...) occurs in function call it is spread syntax & expands an array into list.
 */
let nums = [10, 20, 40, 30, 60, 50];
let res = [...nums];
console.log(res);
