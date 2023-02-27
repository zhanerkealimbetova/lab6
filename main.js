function HelloWorld () {
    console.log ("Hello, World!");
    console.log ("Hello, World!");
    console.log ("Hello, World!");
} 
HelloWorld();

function Perimeter (a, b) {
    return 2 * (a+b);
} 
const perimeter = Perimeter (11,12);
console.log (perimeter);

function Circle(radius) {
    const PI = 3.14;
    const area = PI * radius * radius;
    return area;
  }
const radius = 2;
const area = Circle(radius);
console.log (area);

function greet(name) {
    return "Hi," + name + "!";
  }
const Name = "John";
const greeting = greet(Name); // "Hi, John!"
console.log (greeting);


  
function SumSquares(a,b) {
    const square1 = a * a;
    const square2 = b * b;
    const sumSquares = a + b;
    return sumSquares;
  }
const number1 = 2;
const number2 = 3;
const sumSquares = SumSquares(number1, number2); // 13
comsole.log (sumSquares);


  function findGreatest(a, b, c) {
    let greatest = a; // first number is the greatest
    if (b > greatest) {
      greatest = b; // if second number is greater than current
    }
    if (c > greatest) {
      greatest = c; //  if third number is greater than current 
    }
    return greatest;
  }

  let greatestNum = findGreatest(10, 30, 20);
console.log(greatestNum); // output: 30

  
    
  
   
  
  

  




