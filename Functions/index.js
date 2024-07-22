//Activity 1: Function declaration
//Task 1: 
function evenOddCheck(number){
    if(number % 2 == 0){
        console.log(`${number} is an even number.`);
    }else{
        console.log(`${number} is an odd number`);
    }
}
evenOddCheck(7);

//Task 2: 
function squareofANumber(number){
    console.log(`Square of ${number} is ${number*number}`);
}
squareofANumber(25);

//Activity 2: Function expression
//Task 3: 
let max = function(num1,num2){  /*Anonymous*/
    if(num1 > num2) {
        return num1;
    }else{
        return num2;
    }
}
console.log("Maximum:",max(2,7));

//Task 4:
let concatenate = function concat (str1,str2){
    return str1 + str2;
}
console.log("After concatenation:",concatenate("Rudra","deb"));

//Activity 3: Arrow Functions
//Task 5: 
let sum = (num1 , num2) =>{
   return num1+num2;
}
console.log("Sum of two numbers:", sum(5,10));

//Task 6:
let charFind = (str) => {
    for (const i in str) {
        if (str.charAt(i)=='f') {
        return true;
    }
    }
}
console.log("Found:",charFind("facebook"));

//Activity 4: Arrow Functions
//Task 7: 
let product = (num1,num2) => {
   return num1*num2;
}
console.log("Product:",product(4,6));

//Task 8:
let greet = (name,age) => {
    return "Happy birthday "+name+" You are now "+age+" years old";
}
console.log(greet("Rudra",21));

//Activity 5: Arrow Functions
//Task 9:
let callBack = () => {
    console.log("I'm a callBack function");
}
let higherOrder = (cb) => {
    console.log("I'm a higherOrder function");
    cb();
}
higherOrder(callBack);

//Task 10:
function applyFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}

const addOne = x => x + 1;
const double = x => x * 2;

const result = applyFunctions(addOne, double, 5);
console.log(result); // Output: 12 (5 + 1 = 6, 6 * 2 = 12)
