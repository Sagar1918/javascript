/** Operators in Javascript
 * 1.Arithmetic operators(+,-,*,/,%,**,++,--)
 * 2.Assignment operators(=,+=,-=,)
 * 3.Comparison operators(==,===(recommended to use),!=,!==(not strictly equal to),>,<,>=,<=,) returns the
 * boolean values either true/false
 * If we use >,<,>=,<= on null/undefined, then null = 0 , undefined = NaN
 * 4.Logical operators(&&,||,!,??)
 * logical || finds first truthy value & after finding it stops evaluation.
 * logical && finds first falsy value & after finding it stops evaluation.
 * ********falsy values: false, 0, ""(empty string), null, undefined, NaN, -10;
 * logical ??(null collaising operator) checks for null or undefined is there in the given expression. if there it return null . if any non zero value there it return firstargument.
 * Never use ?? with &&, || in any condition. Use if it is separated with ()
 * 5.typeof operator returns the data type of a variable
 * 6.Ternary operator is an simplified operator of if-else
 * 7.Unary operator(+) is used to convert a string into a number
 * Assignment & exponention operator has right to left associativity(order of working)
 * */

//1.Addition
let value = "22" + 20; // Here 22 & 20 are two operands

let value2 = 45 + "19";
let value3 = "Hello" + " " + "World..!"; //Hello World..!
console.log(value); // 2220
console.log(value2); //4519
console.log(value3);

/** Note: In addition the value which is in double quotes will concat as string with other value
 * But in other operators, it is considered as a number only if it is in double quotes also.
 */

//2.Subtraction
let sub = "25" - 10;
console.log(sub); //15

//3.Multiplication
let mul = "10" * 5;
console.log(mul); //50

//4.Modulus
let mod = "50" % 5;
console.log(mod); // 0 modulus returns remainder

//5.Division
let div = "100" / 10;
console.log(div); // 10

//6. Exponention
let exp = 2 ** 3;
console.log(exp); //8 returned value of 2 power 3

//7. pre-increment(++a) & post increment(a++)
let a = 10,
  b = 20;
// ++a;
console.log("Pre-incremented value of a = ", ++a); // 11 Before only it got incremented like a = a + 1;
console.log("Post-incremented value of b = ", b++); // 20 itself because if we use the value in c it will display as 40

//8. Unary operator Which convert a string value into a number & others return as NaN
let num = "22";
let num2 = +num;
console.log(typeof num2); //number

let str2 = +"Geeks";
console.log(str2); // NaN
console.log(typeof str2); //number because we have typeconverted string to number by unary (+) sign

/** 2. Assignment operators */

//1. Assignment(=) It will assign the right operand value to left operand value.
//2. left operand is used to access the assigned value in the expression.

let ass = 10;
let Y = ass;
console.log("Assignment value is: ", Y); //10

/**3. Comparsion operator */
let number = 10;
let str = "10";
console.log(number == str); //true, because == operator compare the values, not type.
console.log(number === str); //false, because === operator performs strict comparsion of type & value.
console.log("Comparsion operator returns based on utf-8 encoding", "G" > "A"); // returns true, because the unicode value of G bigger than A
console.log("Equality operator value", 0 == "false"); //false bcz 0 = false, 1 = true

/**4. Logical operators */

let age1 = 10;
let age2 = 21;

//Logical and return if both values are non zero, it will return last operand
//when evaluating from left to right
let result = age1 && age2;
console.log(result); //21
//Logical OR return if both values are non zero, it will return first operand
//when evaluating from left to right
let result2 = age1 || age2;
console.log(result2); //10
//Logical not return boolean value if a value is non zero it will return false
let G = 10;
console.log(!G); //false

/** Ternary operator returns 1st value if the condition satisfied*/

let age = 21;

let eligible = age ? "Elegible for voting" : "Not eligible";

console.log(eligible); //Elegible for voting

//Inputs taking by user

let msg = prompt("How Old are you", " ");

if (msg == 18) {
  alert("You are allowed");
} else {
  alert("You are not allowed");
}
