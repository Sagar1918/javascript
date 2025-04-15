let today = new Date();

//This date method uses the UMT time zone to display the result
console.log(today.getDate()); // 2 Result: Todays date it will give
console.log(today.getDay()); // 4(thursday) Result: Todays weekday number means sunday --> 0
console.log(today.getFullYear()); //2023
console.log(today.getMonth() + 1); //11 (Month)
console.log(today.getHours()); //10 (hour)
console.log(today.getMinutes()); //15 (minutes)
console.log(today.getSeconds()); //27 (seconds)

//Math functions
console.log(Math.abs(-12)); //12 abs give absolute number either it is positive or negative
console.log(Math.floor(5.9)); //5  floor gives the lowest number like ground floor
console.log(Math.ceil(5.2)); // 6 ceil gives high number
console.log(Math.random()); //generates a random number
console.log(Math.round(5.4)); //5 it will round off if it is .5 to low & .6 to high
