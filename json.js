/** JSON is a javascript object notation
 * JSON is a text format for storing and transporting data
 * JSON methods:
 * 1. JSON.stringify() : This method is used to convert an object into JSON string.
 * 2. JSON.parse() : This method is used to convert an JSON string into object.
 * Note**:
 *a.You can receive pure text from a server and use it as a JavaScript object.

  b.You can send a JavaScript object to a server in pure text format.

  c.You can work with data as JavaScript objects, with no complicated parsing and translations.
 */

let user = {
  name: "Sagar",
  age: 24,
  gender: "Male",
  isAdmin: false,
  password: "P@ssion198",
  courses: ["Java & DSA", "Web development"],
};

let json = JSON.stringify(user);
console.log(json); //{"name":"Sagar","age":24,"gender":"Male","isAdmin":false,"password":"P@ssion198","courses":["Java & DSA","Web development"]}

localStorage.setItem("user", json);

let obj = JSON.parse(json);
console.log(obj); // Output: user object
