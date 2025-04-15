/** Type Conersion is of two types & can be done on numbers, strings & boolean:
 * type conversion is the process of converting data of one type to another.
 * For example: converting String data to Number.
 * 1. Explicit typeConversion
 * 2. Implicit typeConversion(Automatic typeconversion)
 */
//1. Explicit typeconversion:
const val = Number("123"); //string to number
const res = Number(true); //boolean to number
const val2 = Number(undefined);
const val3 = Number(null);
const str = String(true);
const frac = String(3.14);
console.log(typeof val); //number
console.log(typeof res); //number
console.log(val2); //NaN
console.log(typeof str);
console.log(typeof frac);
console.log(val3); //0

//2. Implicit typeconversion:
console.log([1] == null); //false
console.log("number" + 15 + 3 + 10); //number15310,  because it performs the operation onS 2 operands from left to right
console.log(true + 5); //6
console.log(false - 10); // -10

console.log(5 == "5"); // Output:true
console.log(5 === "5"); // Output:false
console.log(5 != "5"); // Output: false
console.log(5 !== "5"); // Output: true

console.log("5" + 5); // Output: //55
console.log("5" - 5); // Output: //0
console.log(true + true); // Output: 2
console.log(false + false); // Output: 0
console.log(null + 5); // Output: 5
console.log(undefined + 5); // Output: NaN
