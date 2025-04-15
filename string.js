/**String can be created by 2 ways:
 * let name = 'John Abhraham';
 * let name = new String("John Abhraham"); //This will create an object by new keyword. 
 
 * Note: 1. Do not create Strings objects.
2. The new keyword complicates the code and slows down execution speed.
3. String objects can produce unexpected results 

 * Indexing are of 2 types:
 * 1. Positive indexing: Which is from left to right starts with 0 index
 * 2. Negative indexing: Which is from right to left starts with -1 index
 *
 *Note: String characters are immutable in javascript. They are mutable by concatenation.
 ***All string methods return a new string(like newText). They don't modify the original string.
 Strings cannot be changed, only replaced with string methods & assigned to a new variable.

 Ex: let text = 'Hello Folks';
     let newText = text.concat(' ', 'Good morning');
     console.log(newText); //Hello Folks Good morning
 */

/** There are several methods that can be used to Iterate over characters of a string in JavaScript, which are listed below:

Using for Loop
Using for…of Loop
Using forEach() Method
Using split() Method 

let str = "Hello World";

//for loop
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

//for of loop
for (let char of str) {
  console.log(char);
}

//converted a string into an array but we will get the ouput as string using forEach()
Array.from(str).forEach((el) => {
  console.log(el);
});

//split method
let res = str.split(" "); //Using space seperator
res.forEach((splEle) => {
  console.log(splEle);
});

let word = "abc";
console.log(word.length);


**/

/** String Search Methods
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith() 
***/

let str = "Hello World";

str = "h" + str.substring(1, 11); //Mutable by concating the character with remaining thing.
//String methods in javascript
console.log(str.charAt(6)); // W
console.log(str[0]); // H    Accesing the characters with bracket notation
console.log(str.length); // 11   length is a property not a method in javascript.

/** Extracting string parts. There are 5 methods to extract a string
 * 1. slice(startindex, endIndex(optional)): is a method which will cut some part of a string between a given indexes.
 * startIndex should be a less number compared to endIndex
 
 * 2. substring(startIndex,endIndex(optional)): is a method which works as same but it won't accept "Negative indexing".
 * If we give negative indexing, it will return the result from  0 indexing.
 
 * 3. charAt(IndexPosition): The charAt() method returns the character at a specified index (position) in a string.

 * 4.charCodeAt(index): The charCodeAt() method returns the unicode of the character at a specified index in a string.

 * 5. substr(startIndex,length): Some browsers are not accepting this method, So it won't be recommended.
 */
console.log(str.slice(1, 5)); //ello
console.log(str.slice(-8, -3)); //lo Wo
console.log(str.charAt(6)); // W
console.log(str.charCodeAt(0)); //72
console.log(str.substring(4, 10)); //o Worl

/** Replacing String Content in JS
 * 1. replace(existingString, newString): is a method which will replace the existing string with a new given string.
 * this method is case sensitive. If we want to insensitive we can use Regular expression with "/i" flag
 
 * 2. replaceAll(existingString, newString): this method which will replace all the existing string with newstring everywhere in the document.
 * this method uses global flag "/g" for case insensitivity.
 
 * Note:
 * 1. Regular expressions are written without quotes.
 * 2. replaceAll() is an ES2021 feature.
 * 3. replaceAll() does not work in Internet Explorer.
 */
let text = "Welcome to the Company ";
let sentence = "I love India. I'm  living in India. India is my country";

console.log(text.replace("Company", "Industry")); //Welcome to the Industry
console.log(text.replace(/COMPANY/i, "Hub")); //Welcome to the Hub, it will work with regular expression /i flag

console.log(sentence.replaceAll(/India/g, "Bharat"));

/** Converting to Upper and Lower Case
 * 1. toUpperCase(): This method is used to convert a given string to upper case.
 * 2. toLowerCase(): This method is used to convert a given string to lower case.
 */

let fname = "Hello Brammaiahgari Sagar";
let role = "Software developer at Cognizant";
let newMsg = fname.trim().toUpperCase(); //Method chaining

console.log(fname.toUpperCase()); //HELLO BRAMMAIAHGARI SAGAR
console.log(role.toLowerCase()); //software developer at cognizant

/** Joining of two strings together without using + operator
 * 1.concat(items)
 */

let text1 = "Hello Folks";
let newText = text1.concat(" ", "Good morning");
console.log(newText); //Hello Folks Good morning

/** trim(): The trim() method removes whitespace from both sides of a string:
 * 1.trimStart(): The trimStart() method works like trim(), but removes whitespace only from the start of a string.
 * 2.trimEnd(): The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
 */

let ex = "       trim example     ";
let ex2 = ex.trim();
console.log(ex2, "length = " + ex2.length); //trim example length = 12

let ex3 = "      trim start example..!      ";
let ex4 = ex3.trimStart();
console.log(ex4, "length = " + ex4.length); //trim start example..!       length = 27

let ex5 = "       trim end example        ";
let ex6 = ex5.trimEnd();
console.log(ex6, "length = " + ex6.length); //       trim end example length = 23

/** split("seperator",limit(optional)): This method is used to convert an string into an array.
 * seperators: (" "),(","),("|"") are space, comma and |
 */
const string1 = "Hello Everyone welcome to the onboarding";
const string2 = string1.split(" ");
const string3 = string1.split(" ", 3);

console.log(string2[0]); //Hello
console.log(string3); //[ 'Hello', 'Everyone', 'welcome' ]

// valueOf(): this method returns the valueof a string
const x = new String("Hello world");
console.log(x.valueOf()); // 'Hello world'

const y = "Hey Come on";
console.log(y.valueOf()); // Hey Come on

//repeat(count): this method returns a new string which contains the specified number of copies
//of this string, concatenated together.
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`); //I feel Happy! Happy! Happy!

//toFixed(length): This will fix the length after the decimal point
const value = 4.56789;
console.log(value.toFixed(3)); //4.568

// .toString(radix): Every JavaScript object has a toString() method.

// The toString() method is used internally by JavaScript when an object needs
//to be displayed as a text (like in HTML), or when an object needs to be used as a string.

/** String Search Methods
 *1. indexOf(searchElement, fromIndex(optional)): method returns the index (position) the first 
  occurrence of a string in a string.
 *If we mention the fromIndex it will start searching from the given index position.
 
 *2. lastIndexOf(searchElement, fromIndex(optional)): method returns the index of the last 
 occurrence of a specified text in a string. 

 *3. search(searchElement): The search() method returns the position of the first occurrence of a string in a string.

 *4. match(regexp): The match() method returns an array containing the results of matching 
 a string against a string (or a regular expression).

 *5. matchAll(regexp): The matchAll() method returns an iterator(repeated values) containing the results of matching 
 a string against a string (or a regular expression).

 *6.includes(searchElement, fromIndex(optional)):The includes() method returns "true" if a string 
 contains a specified value.Otherwise it returns "false".

 *7.startsWith(searchString, position(optional)): The startsWith() method returns true if a string 
 begins with a specified value.Otherwise it returns false:

 Note: 
 1. Both indexOf(), and lastIndexOf() return "-1" if the text is not found.

 2. The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
 */

let txt = "Please locate where 'locate' occurs!";
//1. indexOF(string)
let index = txt.indexOf("locate");
console.log(index); //7

let index2 = txt.indexOf("locate", 8); //8 means it start searching from 8th index
console.log(index2); //21

//2.lastIndexOf(searchElement, fromIndex)
let lastIndex = txt.lastIndexOf("locate");
console.log(lastIndex); //21 giving last occurence index value

let lastIndex2 = txt.lastIndexOf("locate", 8);
console.log(lastIndex2); //7 because it won't take 21 index , it will take the last occurence index

let notFound = txt.indexOf("John");
console.log(notFound); //-1 Because if the searchelement not found it will give the result as -1

//3.search(searcher)
const strg = "hey Du*dE Comeon";
const re = /[A-Z]/; //this line & below one is an regular expression
const reDot = /[.$%&]/;
console.log(strg.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(strg.search(reDot)); // returns -1 cannot find '*'  special character
console.log(strg.search("Come")); //returns 9

//4.match(regexp)
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex); //Looking for capital letters using regular expression with /g flag
//Note: If a regular expression does not include the g modifier (global search),
// match() will return only the first match in the string.
console.log(found); // ["T", "I"]

//5.matchAll(regexp)
const strng = "test1test2";
const regexp = /t(e)(st(\d?))/g;

const array = [...strng.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

/**Note: If the parameter is a regular expression(/teetc.,/), the global flag (g) must be set, otherwise a TypeError is thrown.
 * If you want to search case insensitive, the insensitive flag (i) must be set like
 * const iterator = text.matchAll(/Cats/gi);
 */

//6.includes(searchElement, fromIndex)
let word = "Hello world, welcome to the universe.";
let checkWord = word.includes("world");
console.log(checkWord); //true

//7.startsWith(searchString, position)
let start = "Hello world, welcome to the universe.";
let check = start.startsWith("Hello");
console.log(check); //true

//8. endsWith(searchString, endPosition)
const end = "Dogs are the best for friendship";
const look = end.endsWith("friendship");
console.log(look); //true

/** Template Literals use back-ticks (``) rather than the quotes ("") to define a string.
 * With template literals, you can use both single and double quotes inside a string.
 *Template literals allows multiline strings.
 *Template literals provide an easy way to interpolate variables and expressions into strings.
 Syntax:

 ${name}  This method is called as interpolation
 */

let sen = `He's 
often 
called 
"Johnny"`;
console.log(sen);
