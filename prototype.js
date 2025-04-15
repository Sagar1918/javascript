/**
 * In javascript every function & object has its own property called prototype.
 * A prototype has its own another object. So the prototype has its own prototype. 
 This creates a prototype chain.

 A [[prototype]] is a hidden property of objects which either null or refers to some object. 

 * If a protoype value is changed, then all the newly created objects will have the new value & 
 the previously created objects will have the old value.
 * We can use the prototype to add properties & methods to a constructor function & 
 the objects inherit the properties & methods  from a prototype.
 */

function Names(first, last) {
  this.firstName = first;
  this.lastName = last;
}

const list = new Names("Sagar", "Hemanth");
list.age = 24;
Names.prototype.gender = "Male"; // Which is hidden in prototype object & we can access this by refernce
console.log(list); //{firstName: 'Sagar', lastName: 'Hemanth', age: 24}
console.log(list.gender); //Male

let user = {
  name: "Chaithra",
  role: "SDE2",
  company: "Google",
};

let user2 = {
  name: "Yogesh",
  // __proto__: user, //user2 is referring to the user object by proto property but this proto will be removed in future
};

user2.prototype = user; // new  one to use

console.log(user2);
console.log(user2.role);
