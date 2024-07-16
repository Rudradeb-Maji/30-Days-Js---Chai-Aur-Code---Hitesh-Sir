//Activity 1 : For Loop
//Task 1 
let n = 10;
for (let i = 1 ; i<=10 ; i++){
    console.log(`${i} `);
}
console.log("Table of 5");
//Task 2 
let five = 5;
for (let i = 1 ; i<=10 ; i++){
    console.log(`5x${i} = ${i*5} `);
}

//Activity 2 : While Loop
//Task 3 
let i = 1;
let sum = 0;
while(i<=10){
    sum+= i;
    i++;
}
console.log(`${sum}`);

//Task 4
let ten = 10;
while(ten>0){
    console.log(`${ten}`);;
    ten--;
}
//Activity 3 :Do...While Loop
//Task 5
console.log("1 to 5");
let one = 1;
do {
    console.log(`${one}`);
    one++;
} while (one<=5);

//Task 6
let number = 5;
let store = number;
let fact = 1;
do {
    fact *=number; 
    number--;
} while (number>0);
  console.log(`Factorial of ${store}`);
  console.log(`${fact}`);

//Activity 4 :Do...While Loop
//Task 7
let pattern = 5;
let star = "* ";
for(let i=1;i<=pattern;i++){
    for(let j=1;j<=i;j++){
        console.log(star.repeat(i));
    }
}

//Activity 5 :Loop Control Statements
//Task 8
let print = 10;
for(let i = 1;i<=print;i++){
    if (i==5) {
        continue;
    }
    console.log(`${i}`);
}

//Task 9
for(let i=1;i<10;i++){
    if (i==7) {
        break;
    }
    console.log(`${i}`);
}