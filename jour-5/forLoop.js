/*

//ex1

let total = 0
for (let i = 5 ; i <= 10 ; i++) {
    total = total + i*i
}

console.log(total)

//ex2 

let nombres = 0
for (let i = 100 ; i <= 1000 ; i++) {
    if (i%7 === 0)
    nombres = nombres + 1
}

console.log(nombres)

//ex3

let dice = 0
let dice5orAbove = 0
let result = 0
let sumOfDice = 0

function launchDice(numberOfDice) {
    for (let i = 0; i <= numberOfDice ; i++ ) {
        dice = Math.floor(Math.random()*6)+1
        if (dice >= 5) {
            dice5orAbove = dice
        } else {
            dice5orAbove = 0
        }

        console.log(dice, "= 5 or above ?", dice5orAbove)
        sumOfDice = sumOfDice + dice5orAbove
        
    }
    console.log(sumOfDice)
    
    sumOfDice = 0
}

launchDice(20)

//ex4

5+12=17
17+13=30

17
30
14

var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);

*/

//ex5

/*
12+12=24
24+9=33
33+6=39
39+3=42
i=0


var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);
*/

//ex6

/*
i=0 0+0=0 box2=4
i=-1 4-1=3 box1=-1
i=-2 -1-2=-3 box2=2
i=-3 2-3=-1 box1=-4
box1=-4
box2=2
i=-4
*/

var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);
