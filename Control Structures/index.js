// Activity 1 : If-Else Statements
// Task 1
let number = 0;
// number == 0 ? console.log("Zero") :number > 0?console.log("Positive"):console.log("Negative") ;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else console.log("Zero");

// Task 2
let age = 21;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// Activity 2 : Nested If-Else Statements
// Task 3
let num1 = 23;
let num2 = 22;
let num3 = 25;
if (num1 > 0) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else if (num3 > num2 && num3 > num1) {
    console.log(num3);
  }
}

// Activity 3 : Switch Case
// Task 4
let day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7: 
    console.log("Saturday");
    break;
  default:
    console.log("Invalid!!!");
    break;
}

// Task 5
let score = 48 / 10;
switch (Math.floor(score)) {
  case 9:
    console.log("A+");
    break;
  case 8:
    console.log("A");
    break;
  case 7:
    console.log("B+");
    break;
  case 5:
    console.log("B");
    break;
  case 4:
    console.log("C");
    break;
  case 3:
    console.log("D");
    break;
  case 2:
    console.log("Fail");
    break;
  default:
    console.log("Invalid!!!");
    break;
}

// Activity 4 : Conditional (Ternary) Operator
// Task 6
let odev = 22;
odev % 2 == 0 ? console.log("Even") : console.log("Odd");

// Activity 5 : Combining Conditions
// Task 7
let year = 1900;
if (year % 400 == 0) {
  console.log("Leapyear");
}
else if (year % 100 == 0) {
  console.log("Not Leapyear");
}
else if (year % 4 == 0) {
  console.log("Leapyear");
}
