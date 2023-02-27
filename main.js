function HelloWorld () {
    console.log ("Hello, World!");
    console.log ("Hello, World!");
    console.log ("Hello, World!");
} 
HelloWorld();

function Perimeter (side1, side2) {
    return 2 * (side1+side2);
} 
const perimeter = Perimeter (11,12);
console.log (perimeter);

function CircleArea(radius) {
    const PI = 3.14;
    const area = PI * radius * radius;
    return area;
  }
const radius = 2;
const area = CircleArea(radius); 

function greetPerson(name) {
    return "Hi," + name + "!";
  }
const Name = "John";
const greeting = greetPerson(Name); // "Hi, John!"

function calculateRatio(number1, number2) {
    return number1 / number2;
  }
  const number1 = 4;
  const number2 = 2;
  const ratio = calculateRatio(number1, number2); //2
  
function calculateSumOfSquares(number1, number2) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const sumOfSquares = square1 + square2;
    return sumOfSquares;
  }
const number1 = 2;
const number2 = 3;
const sumOfSquares = calculateSumOfSquares(number1, number2); // 13


function check(number) {
    if (number > 0) {
      return "Positive";
    } else if (number < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
const number1 = 5;
const number2 = -6;
const number3 = 0;

console.log(check(number1)); // "Positive"
console.log(check(number2)); // "Negative"
console.log(check(number3)); // "Zero"

function checkEqual(number1, number2) {
    if (number1 === number2) {   //what's the difference = == ===?
      return true;
    } else {
      return false;
    }
  }
  const number1 = 5;
  const number2 = 5;
  const number3 = 6;
  
  console.log(checkEqual(number1, number2)); // true
  console.log(checkEqual(number1, number3)); // false

  function isEven(num) {
    if (num % 2 == 0) {
      return true; //should be put it in brackets "True/False"?
    } else {
      return false;
    }
  }

  function findGreatest(a, b, c) {
    let greatest = a; // assume the first number is the greatest
    if (b > greatest) {
      greatest = b; // update greatest if second number is greater than current greatest
    }
    if (c > greatest) {
      greatest = c; // update greatest if third number is greater than current greatest
    }
    return greatest;
  }

  let greatestNum = findGreatest(10, 30, 20);
console.log(greatestNum); // output: 30

  
    
  
   
  
  

  




