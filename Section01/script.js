// Introduction, simple thisng in js
/* let js = 'amazing';

let country = 'Brazil';
let continent = 'America';
let population = '212,6 milions';
console.log('My country is ' + country + ' at the ' 
+ continent + ' continent, and here have '+ population + ' persons'); */


//training types
/*let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

javaScriptIsFun = 'NEW VALUE, NEW TYPE';
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

//training dynamic typing
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year); */

// training let, const and var
/* let age = 30;
age = 31;

const birthYear = 1991;

var job = 'programmer';
job = 'teacher';*/

//Basic operators 
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)
console.log(ageJonas * 2, ageSarah/10, 2**3)

const isFullAge = ageSarah >= 18;
console.log(isFullAge)*/

// Coding Challenge #1

/* const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const MARKBMI = markMass / (markHeight ** 2);
const JOHNBMI = johnMass / (johnHeight ** 2);

const markHigherBMI = MARKBMI > JOHNBMI;

console.log(markHigherBMI) */

// tempalte literals
/* const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' year old ' + job + '!';
console.log(jonas);

// using template literals
const jonaNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(jonaNew);

console.log(`String
with
multiple
lines`)*/

// if/else statements

/* const age = 15;

// emoji = command + ctrl + space
if(age >= 18){
    console.log('Sarah can start driving license 😀')
} else{
    const yearsLeft = 18 - age;
    console.log(`Sarah can start driving license 😀
    is missing ${yearsLeft} to be able`)
}*/

// coding challenge 2
/* const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const MARKBMI = markMass / (markHeight ** 2);
const JOHNBMI = johnMass / (johnHeight ** 2);

// const markHigherBMI = MARKBMI > JOHNBMI;

if( MARKBMI > JOHNBMI ){
    console.log(`Mark has a higher BMI
    Mark BMI = ${MARKBMI}
    John BMI = ${JOHNBMI}`) 
} else{
    console.log(`john has a higher BMI
    Mark BMI = ${MARKBMI}
    John BMI = ${JOHNBMI}`) 
} */

/* // type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)
console.log(String(23));

// type coercion
console.log('I am ' + 23 + ' years old'); // 23 is converted by js to string
console.log('23' + '10' - 3);

let n = '1' + 1; // '11' string
n = n-1; //10 integer
console.log(n);
*/

/* // falsy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
//const money = 100;
if(money) {
    console.log('Dont spend it all');
} else {
    console.log("you should get a job");
}

// another use: to see if a variable is defined or not
// if height is zero, we have a bug
let height = 0;
let defined = false;
if(height >= 0){
    defined = true;
}
if(defined) {
    console.log("is defined");
}
else {
    console.log("undifined");
}*/

// Equality Operators
/* const age = '18';
if(age === 18) console.log("You just became an adult (strict)");

if(age == 18) console.log("You just became an adult (loose)");

const favorite = Number(prompt("whats your favorite number?"));
console.log(favorite); // returns a string

// if (favorite == 23){ // not a good practice
//     console.log('23 is an amazing number');
// }

if (favorite == 23){ // good practice
    console.log('23 is an amazing number');
}*/

// Coding Challenge #3
/*
// const averageDolphins = (96 + 108 + 89)/3; // test 1
// const averageKoalas = (89 + 91 + 110)/3;

// const averageDolphins = (97 + 112 + 101)/3; //test 2
// const averageKoalas = (109 + 95 + 123)/3;

// const averageDolphins = (97 + 112 + 101)/3; //test 3
// const averageKoalas = (109 + 95 + 106)/3;

const averageDolphins = (97 + 112 + 80)/3; //test 4
const averageKoalas = (109 + 95 + 50)/3;

if ((averageDolphins > averageKoalas) && averageDolphins >= 100 ){
    console.log(`Dolphins team win ! 
    Dolphins team made an average ${averageDolphins}
    , in other way the Koalas team just made ${averageKoalas}`);
} else if ((averageKoalas > averageDolphins) && averageKoalas >= 100) {
    console.log(`Koalas team win !
    Koalas team made an average ${averageKoalas}
    , in other way the Dolphins team just made ${averageDolphins}`);
} else if(averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100){
    console.log("Draw");
}
else {
    console.log(`No one wins
    Koalas team made an average ${averageKoalas}
    Dolphins team made an average ${averageDolphins}
    Both averages lower than 100`)
}
*/

// The Swich Statement

/* const day = 'sunday';

switch(day) {
    case 'monday': // day === 'monday' strict comparision
        console.log('Plan courser structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
        break;
}*/

// Ternary operator
/*
const age = 40;
// age >= 18 ? console.log('I like to drink wine') 
//             : console.log('i dont like to drink wine')

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/

// Coding Challenge #4

const billValue = 10;
const tip = (billValue>= 50 && billValue<=300) 
            ? 0.15*billValue
            : 0.2*billValue;

console.log(`The bill was ${billValue}, the tip was ${tip} and the total value ${billValue + tip}`);