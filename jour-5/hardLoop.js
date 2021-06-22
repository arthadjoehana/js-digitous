//ex1

/* 
let numbers = []
let limit = 50
for (let i = 0 ; i < limit ; i++) {
    numbers.push(Math.floor(Math.random()*100)) 
}
console.log(numbers)

var sum = 0

for (let i = 0 ; i < limit ; i++) {
    
    sum = sum + numbers[i]
}

console.log(sum)

*/

//ex 2

/* 
let numbers = []
let number = 0
let limit = 50
for (let i = 0 ; i < limit ; i++) {
    number = (Math.floor(Math.random()*200)) 
    if (number > 50) {
        numbers.push(number)
    } else {
        number = (Math.floor(Math.random()*200))
    }
    
}
console.log(numbers)

var highestNumber = 0;
for (i = 0 ; i <= highestNumber ; i++){
    if ( numbers[i] > highestNumber ) {
        highestNumber = numbers[i]
    }
}
console.log(highestNumber)
*/

//ex3

/*

let numbers = []
let number = 0
let limit = 50
for (let i = 0 ; i < limit ; i++) {
    number = (Math.floor(Math.random()*200)) 
    if (number > 50) {
        numbers.push(number)
    } else {
        number = (Math.floor(Math.random()*200))
    }
    
}
console.log(numbers)

let j = 0
let min = 75
let max = 100
while (j < 50) {
    
    if (numbers[j] >= min && numbers[j] <= max) {
        console.log(numbers[j], "is the first number in the array between", min, " and ", max)
        break
    } else {
        j++
    }
}

*/

//ex4

/*

*/

let words = ["hello", "goodbye", "yes", "no", "stop", "go go go"]
let splitWords = ""
let strings = ""
let letters = []
let numberOfO = 0
for (let i = 0 ; i < words.length ; i++ ) {
    
    letters = words[i].split('')
    console.log(letters)
    
    for (let j = 0 ; j < letters.length ; j++) {
        console.log("nested loop returns", letters[j])
        if (letters[j] === "o") {
            console.log("true")
            numberOfO++
        } else {
            console.log("false")
        }
    }
}
console.log(numberOfO)



