//exercice 1

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,

}

console.log(cat)

if (cat.isCute) {
    console.log("So cute !")
}

//exercice 2

var cat2 = {
    name: "Tom",
    age: 81,
    isCute: false,

}

var cats = [cat, cat2]

console.log(cats[0].age)
console.log(cats[1].isCute)

//exercice 3



function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

checkIfEven(5)

//exercice 4


function compare(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is bigger")
    } else if (num2 > num1) {
        console.log("num2 is bigger")
    } else {
        console.log("both are the same")
    }
}

compare(3, 2)

//exercice 5
var total = 0
function addUp(num) {
    for (var i = 0 ; i <= num ; i++) {
        total = total + i
    }
}

addUp(12)
console.log(total)

//exercice 6


function format (num){
    var hours   = Math.floor(num / 3600)
    var minutes = Math.floor(num % 3600 / 60);
    var seconds = Math.floor(num % 3600 % 60)
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10 ) {
        minutes = "0" + minutes
    }
    if (seconds < 10 ) {
        seconds = "0" + seconds
    }
 return (hours) + ":" + (minutes) + ":" + (seconds)
}
console.log(format(3000))

//bonus 1



function generatePassword(num) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let password = ""
    if ( 6 <= num <= 15 ) {
        for ( let i = 0; i < num; i++ ) {
            password += characters.charAt(Math.floor(Math.random() * characters.length))
        
        } 
    } else {
        console.log("error")
    }
    return password
}
console.log(generatePassword(10))

//bonus 2


let sumOfDice = 0
let dice = 0
let result = []

function launchDice(numberOfDice) {
    
    for (let i = 0; i <= numberOfDice ; i++ ) {
        dice = Math.floor(Math.random()*6)+1
        sumOfDice = sumOfDice + dice    
    }
    result.push(sumOfDice)
    sumOfDice = 0
}

launchDice(5)
launchDice(5)

var player1 = result[0]
var player2 = result[1]

if (player1 > player2) {
    console.log("player 1 =", player1, ",", "player 2 =", player2, ",", "player 1 wins")
} else if (player2 > player1) {
    console.log("player 1 =", player1, ",", "player 2 =", player2, ",", "player 2 wins")
} else {
    console.log("player 1 =", player1, ",", "player 2 =", player2, ",", "draw")
}



