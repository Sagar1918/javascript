/** Array is a special object which is used to store ordered collection of
 * different data(like number,string,object,etc.,) & arrays are mutable.
 * Array store the address, whenever we create a new array, a new address will be allocated in heap memory.
 * In arrays, key is the index & value is your inserted value.
 * Array has special methods to work with ordered collection of data.
 * Array has "for of" loop for looping & it displays values,where 'for in' displays keys & one main thing for in loop is very slow compared to other loops
 */
let arr = ["Sagar", "Sanjana", { name: "Hemanth", age: 23 }, "Vandhana"];
let nestedArray = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
]; //Nested arrays can be accessed by nestedArray[0][1] means access 20.
console.log(nestedArray[0][1]);
console.log(arr[0][1]); //a   To access the character at specific index
console.log(arr); //[ 'Sagar', 'Sanjana', { name: 'Hemanth', age: 23 }, 'Vandhana' ]
console.log(arr[0], arr[1]); //Sagar Sanjana

//To access object values in array using array[index].objectKey
console.log(arr[2].age); //23

//We can access the array elements using negative indexing by at() method, Using brackets[] it won't accept negative values
console.log(arr.at(-1)); //Vandhana

/** Array Methods
 * 1. push(): is an array method which is used to add the elements to the end of an array
 * 2. pop(): is an array method which is used to remove the end of an array element
 * 3. unshift(value): is an array method which is used to add the elements to the beginning of an array
 * 4. shift(): is an array method which is used to remove the first index array element
 * Note: Arrays should not be compared using == / === operator
 * console.log([] == []); //false because datatype should be anything on both sides.
 * 5. splice(index,deletecount,item1,...itemN(optional)): The splice() method adds and/or removes array elements.
 * item1,itemN is the items to add
 * 6. slice(startIndex,endIndex): method returns a new array copying it to all items from start index
 * to end index(end index value not inclued)
 */
//Array References
let names = ["a", "b", "c"];
let copy = names; //Shallow copy, which stores the names reference in copy variable, Here it pointing to same address
copy.push("d");
console.log(copy); //['a', 'b', 'c', 'd']
console.log(names); //['a', 'b', 'c', 'd']
console.log(copy === names); //true
/** Note: Shallow copy is faster than deep copy
 * 2. We can perform any operation on constant arrays, but we cannot assign new values again
 * by giving arr = [4,5,6]
 *
 * */

//1. toString() method is used to convert an value into a string
const usersList = ["radha", "ravi teja", "Sita ram", "ravi", "Venu"];
let find = usersList.toString();
console.log(find); //radha,ravi teja,Sita ram,ravi,Venu

//2. reverse() method
const members = ["radha", "ravi teja", "Sita ram", "ravi", "Venu"];
let res = members.reverse();
console.log(res); //[ 'Venu', 'ravi', 'Sita ram', 'ravi teja', 'radha' ]

//3. isArray() method returns true if an object is an array, otherwise false.
let check = Array.isArray(members);
console.log(check); //true

//1. push()
arr.push("Harika");
console.log(arr); // ['Sagar','Sanjana',{ name: 'Hemanth', age: 23 },'Vandhana','Harika']

//2. pop()
arr.pop();
console.log(arr); //[ 'Sagar', 'Sanjana', { name: 'Hemanth', age: 23 }, 'Vandhana' ]

//3. unshift(value)
arr.unshift("Sushu");
console.log(arr); //['Sushu', 'Sagar', 'Sanjana', { name: 'Hemanth', age: 23 }, 'Vandhana' ]

//4. shift()
arr.shift();
console.log(arr); //[ 'Sagar', 'Sanjana', { name: 'Hemanth', age: 23 }, 'Vandhana' ]

//5. splice(startindex,deleteCount,item1,itemN)
arr.splice(1, 2, "Shashi", "Sushu");
console.log(arr); //[ 'Sagar', 'Shashi', 'Sushu', 'Vandhana' ]

//6. slice(startindex,endIndex)
const arr2 = arr.slice(0, 3);
console.log(arr2); //['Sagar', 'Shashi', 'Sushu' ]

//7. at(index): returns the value at specified index, if the value is not their at given index, the result will be undefined.
const arr3 = arr.at(2);
console.log(arr3); //Sushu

//8. concat(item1,itemN): method add the arrays together.
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9, 10];

const result = num1.concat(num2, num3);
console.log(result); // [1,2,3,4,5,6,7,8,9,10]

//9. copyWithin(targetindex,start(opt),end(opt)): The copyWithin() method copies array elements to another position in the array.
// The copyWithin() method overwrites the existing values.
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "grapes"];
let text = fruits.copyWithin(3, 0, 2);
console.log(text); //[ 'Banana', 'Orange', 'Apple', 'Banana', 'Orange', 'grapes' ]

//10. entries(): The entries() method returns an Array Iterator object with key/value pairs.

// Note: We should iterate this entries method using for of loop to get the result
const f = fruits.entries();
for (let item of f) {
  console.log(item);
}

/** 11.every((value, index, array) => {}): The every() method executes a function for each array element.
 *The every() method returns true if the function returns true for all elements, otherwise it return false.
 */
const ages = [32, 33, 17, 40];
const checked = ages.every(checkAge);
function checkAge(age) {
  return age > 18;
}

console.log(checked); // O/P: false because here 17 value is there above

//12. fill(target, start, end): The fill() method fills specified elements in an array with a value.
//The fill() method overwrites the original array.
let numbers = [10, 20, 30, 40, 50];
let fill = numbers.fill(30, 2, 4);
console.log(fill); // [10,20,30, 30, 50]

/** Array Search Methods
 * 1. indexOf(searchElement, startIndex): The indexOf() method returns the first index (position) of a specified value.
 *
 */

const users = ["radha", "ravi teja", "Sita ram", "ravi", "Venu"];
const employes = [
  { id: 1, name: "Sai Kiran" },
  { id: 2, name: "Sai ram" },
  { id: 3, name: "Srikanth" },
  { id: 4, name: "Sai Kiran" },
  { id: 5, name: "Sai ram" },
];

const index = users.indexOf("ravi", 0);
console.log(index); //1

//2. lastIndexOf(searchElement, fromIndex)
const last = users.lastIndexOf("ravi");
console.log(last); //3

//3.find((value, index, array) => {}) : The find() method executes a function for each array element.
//The find() method returns "undefined" if no elements are found.
let finds = employes.find((item) => {
  if (item.id == 2) {
    console.log(item.name); //Sai ram
  }
});

//4.findIndex((value, index, array) => {}): The findIndex() method returns the index (position) of the first element that passes a test.
//The findIndex() method returns -1 if no match is found.
let finds1 = employes.findIndex((item) => {
  if (item.name == "Sai ram") {
    console.log(item.id); // 2 and 5
  }
});

//5.The findLastIndex() method executes a function for each array element.
////The findIndex() method returns -1 if no match is found.
let finds2 = employes.findLastIndex((item) => item.name == "Sai Kiran");

//6.filter(function): The filter() method creates a new array filled with elements that pass a test provided by a function.
let userData = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 47, occupation: "programmer" },
  { name: "Albert", age: 76, occupation: "programmer" },
];
let filteredUsers = users.filter((user) => {
  return userData.age > 40 && userData.occupation === "programmer";
});

console.log(filteredUsers);

let finds4 = users.map((item) => item.length);

//7.includes(searchElement, fromIndex): The includes() method returns true if an array contains a specified value.
let finds5 = users.includes("Venu", 2);

//8.join(separator(opt)): The join() method returns an array as a string. Default is comma.
const serial = ["one", "two", "three"];
const list = serial.join(" or ");
console.log(list); // one or two or three

//9.keys(): The keys() method returns an Array Iterator object with the keys of an array.
let key = Object.keys(fruits);

for (let x of key) {
  console.log(x); //0 1 2 3 4 5
}

console.log(finds.name); //Sai ram
console.log(finds1); //2
console.log(finds2); //3
console.log(finds3); //[ { id: 1, name: 'Sai Kiran' }, { id: 4, name: 'Sai Kiran' } ]
console.log(finds4); // [5, 9, 8, 4, 4]
console.log(finds5); //true

/** Map method: map() creates a new array from calling a function for every array element.
 * 1. map.keys(): returns an iterable of keys.
 * 2. map.values(): returns an iterable of values.
 * 3. map.entries(): returns an iterable of entries [key,value]
 */
const numb = [65, 44, 63, 45, 8, 93, 12, 4];
const newArr = numb.map((num) => {
  return num * 10;
});

console.log(newArr); // [650, 440, 120, 40]

//1. reverse()
console.log(numb.reverse()); //[4,12,44,65]

//2. sort(): The sort() sorts the elements as strings in alphabetical and ascending order.
let val = numb.sort((a, b) => {
  return a - b; //a-b sorts in ascending order, b-a sorts in descending order
});
console.log(val);
// Note: sort() won't work for numbers, it basically sorts the numbers randomly by utf-8 values by converting them into strings

let map = new Map();

//Here set is used to set the key value pair  left side ---> key  , right side ---> value
map.set("name", "sagar"); // key is string
map.set(24, "24"); //key is num
map.set(true, "Is he eligible"); //key is boolean

//Here, get is used to get the value by passing the key
console.log(map.get("name")); //sagar
//size is a property to show the size of a map
console.log(map.size); //3
//clear is a method which will delete everything
// console.log(map.clear(), map);

//has is a method to check the object has this property or not, if yes it returns true
console.log(map.has("name")); //true

let biryani = new Map([
  ["spices", 400],
  ["vegetables", 500],
  ["rice", 200],
]);

for (let item of biryani.keys()) {
  console.log(item);
}

/** Set: is a set of values(without keys), where each value occur only once(which means it won't allow duplicates)
 *
 */
let set = new Set();

let user1 = { name: "Sagar" };

set.add(user1);
console.log(set);

let john = { name: "John abhraham" };

let ac = [john];
john = null;

console.log(ac);

//Iterations in array
/* forEach method */
let myArray1 = [1, 2, 3, 4];
myArray1.forEach((element, index) => {
  myArray1[index] = element * element;
});
console.log(myArray1);

/* map method */
let myArray2 = [1, 2, 3, 4];
myArray2.map((element, index) => {
  myArray2[index] = element * element;
});
console.log(myArray2);

/** reduce(accumulator, index) method: reduce the array into a single value */
let nums = [1, 2, 3, 4];
let value = nums.reduce((res, el) => {
  return res + el;
});
console.log(value);
