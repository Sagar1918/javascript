// const employes = [
//   { id: 1, name: "Sai Kiran" },
//   { id: 2, name: "Sai ram" },
//   { id: 3, name: "Srikanth" },
//   { id: 4, name: "Sai Kiran" },
//   { id: 5, name: "Sai ram" },
// ];

// let check = employes.findIndex((item) => {
//   if (item.name == "Sai ram") {
//     console.log(item.id);
//   }
// });

// let str = "Hello morning";
// let str2 = str.repeat(3);
// console.log(str2);

// Method Chaining:
// let msg1 = "        hello      ";
// let var1 = msg1.trim().toUpperCase();
// console.log(var1); //HELLO

// let num = 20;
// if (num % 10 == 0) {
//   console.log("Good");
// } else {
//   console.log("Bad");
// }

// let userName = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// let output = `${userName} is ${age} years old.`;
// alert(output);

// let quarterVal = 2;
// switch (quarterVal) {
//   case 1:
//     console.log("January, Febraury, March");
//     break;
//   case 2:
//     console.log("April, May, June");
//     break;
//   case 3:
//     console.log("July, August, September");
//     break;
//   case 4:
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("Not a perfect number");
// }

// let names = ["a", "b", "c"];
// let copy = names;
// copy.push("d");
// console.log(copy);
// console.log(names);

// const arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); //[ 1, 2, 3, 4 ]

// let arr = [7, 9, 0, -2];
// let arr2 = arr.slice(0, 3);
// console.log(arr2);

// let str = "Hello";
// if (str.length > 0) {
//   console.log("Not blank");
// } else {
//   console.log("Blank");
// }

// let elements = ["a", "b", "c"];
// if (elements.includes("a")) {
//   console.log("Great");
// }

// let arr = [7, 9, 0, -2];
// let n = 3;
// let ans = arr.slice(arr.length - n);
// console.log(ans);

// let str = "hello";
// let id = 2;
// if (str[id] == str[id].toLowerCase()) {
//   console.log("char at id position is in lowecase");
// }

// let users = [
//   { name: "John", age: 25, occupation: "gardener" },
//   { name: "Lenny", age: 51, occupation: "programmer" },
//   { name: "Andrew", age: 43, occupation: "teacher" },
//   { name: "Peter", age: 81, occupation: "teacher" },
//   { name: "Anna", age: 47, occupation: "programmer" },
//   { name: "Albert", age: 76, occupation: "programmer" },
// ];
// let filteredUsers = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].age > 40 && users[i].occupation === "programmer") {
//     filteredUsers = [...filteredUsers, users[i]];
//   }
// }
// console.log(filteredUsers);

// let filteredUsers = users.filter((user) => {
//   return user.age > 40 && user.occupation === "programmer";
// });

// console.log(filteredUsers[0].name);

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let n = prompt("Enter a number");
// n = parseInt(n);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == n) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);

// let val = 234567;
// let sum = 0;
// for (let i = 0; i < val.length; i++) {
//   sum += val.charAt(i);
// }
// console.log(sum);

let studentsInfo = [
  { name: "Sagar", age: 25, branch: "ECE" },
  { name: "Hemanth", age: 24, branch: "EEE" },
  { name: "Shashi", age: 26, branch: "CSE" },
];
studentsInfo[0].gender = "Male";

console.log(studentsInfo);
