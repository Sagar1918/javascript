/**The object can be created in two ways in JavaScript:

1. Object Literal   --------  let user = {};
2. Object Constructor  --------------  let user = new User();     

Here, user is a reference to the object. We can override the value by reference in object using const also. 
Example, let user1 = user;
user1.age = 30; In user object before we don't have the age property. Now we have by reference

A Property is a key-value pair Where key(property name) is a string & value can be anything.

What is Method: Function in a object is called as Method. 

Note: Using arrow function, we cannot use this keyword. If we use, it will return "undefined".
In arrow functions, this always refers to its parent scope(lexical scope). 
 
But, using function keyword, we can use this keyword & this keyword is used in functions & methods. 
2. this always refers to an current object, by default it refers to window object.  

const keyword is good to use to declare an object than let
*/

//1. Using an object literal

//Defining an object
let person = {
  firstName: "Sagar",
  lastName: "Brammaiahgari",

  //Method
  getDetails: function () {
    return `The name of the person is ${this.firstName} ${this.lastName}`;
  },

  //Object within an object
  phoneNumber: {
    mobile: 9959415603,
    landline: 235689,
  },
};
person.age = 25; //Adding a new property to the object

// Note: dot notation is recommended most
//Object property values can be accessed by 2 way: Dot notation & bracket
console.log(person["firstName"]); //Sagar
console.log(person.getDetails()); //The name of the person is Sagar Brammaiahgari
console.log(person.phoneNumber.mobile); //9959415603
console.log("lastName" in person); // returns true Checks whether the lastName property is their or not in person object.

//Array of objects
let studentsInfo = [
  { name: "Sagar", age: 25, branch: "ECE" },
  { name: "Hemanth", age: 24, branch: "EEE" },
  { name: "Shashi", age: 26, branch: "CSE" },
];
studentsInfo[0].gender = "Male";
console.log(studentsInfo);

let student1 = {
  name: "Hemanth",
  age: 24,
};

let student2 = {
  name: "Ashwini",
  age: 25,
};

let hello = function (name) {
  //Here we cannot use arrow function because this keyword
  console.log("Hello" + this.name); // By passing parameters
};

student1.wish = hello; // Assigning the function as a method to wish property in student1
student2["wish"] = hello; // Same here also assigning but not calling the function

student1.wish(); // Now We are calling the hello function using ()
student2.wish();

console.log(student1, student2);

/** 2. Object Constructor
 * Constructor functions are regular functions but there are 2 differences
 *  The name of the function should start with Capital letter first.
 *  They should only be executed with the new operator only.
 */

// Using a constructor
function Details(first_name, last_name) {
  this.first_name = first_name; //To access variables in function we have to use this
  this.last_name = last_name;
}
// Creating new instances of person object
//Here, new is used to create an empty object
let person1 = new Details("Mukul", "Latiyan");
let person2 = new Details("Rahul", "Avasthi");

console.log(person1["first_name"]); //Mukul
console.log(`${person2.first_name} ${person2.last_name}`); //Rahul Avasthi

/** Getters and Setters are special methods in javascript that allow you to control how
 * properties are accessed & modified. We can access by get & set method
 * A getter is a method that is called when a property is accessed. It can be used to do things
 * like  validate the value of the property or convert it into a different format.
 */

// Defining class using es6
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  get getDetails() {
    return `The name of the bike is ${this.name}.`;
  }
  set newBike(name) {
    return `New bike in the market is ${engine}`;
  }
}
// Making object with the help of the constructor
let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

// bike1.newBike("Apache");
bike1.newBike = "Pulsar 150"; //Above line and this line works same using set for this line

console.log(bike1); // Hayabusa
console.log(bike2.maker); // Kawasaki
// console.log(bike1.getDetails()); //The name of the bike is Hayabusa
console.log(bike1.getDetails); // By using getter method by placing get at getDetails() called func

let score = 45;

function board() {
  score = 34;
}
board();
console.log(score);

//Object by reference example
const user = {
  name: "Arun",
  age: 25,
};

let user1 = user;

console.log(user1 === user); //true, because referring to the same object in memory but different refernce name

user1.surName = "Chintha";
console.log(user);

/** Class Inheritance
 * super keyword is used in the child class to call the properties of the parent class.
 * When we change the property or method values in child class, it can override the same values in parent class.
 * If we have same methods in both(parent & child), if we want the value of parent then we can call like this.
 * super.methodName(); // this line is from child class
 * If any method is declared as static, we can access that method by classname.
 * If any method name has # tag before the method name, then that method is private method
 */
//Parent class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  static getEmployeeName() {
    console.log(`Hello ${this.name}`);
  }
  #getSalary() {
    //Private method
    return this.salary;
  }
  displaySal() {
    console.log(`Employee salary is ${this.#getSalary()}`); //Employee salary is 50000
  }
}

const employee = new Employee("Chandana", 50000);
employee.displaySal(); //Calling the private method from this displaySal() method
Employee.getEmployeeName(); //Calling the static method with classname

//Another Employee2 inheriting the properties & methods of Employee
//child class
class Employee2 extends Employee {
  constructor(name) {
    super(name);
  }
}
const employee2 = new Employee2("Ramya");

console.log(employee.getEmployeeName()); //Hello Chandana
console.log(employee2.getEmployeeName()); //Hello Ramya

/** There are many methods to iterate over an object which are discussed below: 

1. Using for…in loop
2. Using Object.entries() method and map() Method
3. Using forEach() method and object.keys() Method */

// 1. Using for…in loop
function iterateObject() {
  let exampleObj = {
    book: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
  };

  for (let key in exampleObj) {
    if (exampleObj.hasOwnProperty(key)) {
      value = exampleObj[key];
      console.log(key, value);
    }
  }
}
iterateObject();

//2. Using Object.entries() method and map() Method
function data() {
  let user = {
    name: "Sagar",
    age: 24,
    isEligible: true,
  };

  let values = Object.entries(user); //entries method is used to return array of string-keyed property pairs
  let check = values.map((el) => {
    let key = el[0]; //property name or key
    let value = el[1]; //values at 1 index
    console.log(key, value);
  });
}

data();

//3. Using forEach() method and object.keys() Method
function bookDetails() {
  let book = {
    name: "Sherlock Holmes",
    author: "Arthur Conon Doyle",
    published: 1998,
  };

  let extract = Object.keys(book);
  let val = extract.forEach((key) => {
    const value = book[key];
    console.log(key, value);
  });
}

bookDetails();
