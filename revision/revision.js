/*

//ex1

let array = []
let letters = []
let sortedString = ""

function sortLetters(str) {
    let string = str
    array.push(string)
    for (let i = 0 ; i < array.length ; i++ ) {
        letters = array[i].split("")
    }
    letters.sort()
    sortedString = letters.join("")
}

sortLetters("konexio")
console.log(sortedString)



//ex2

let array = []
let letters = []
let numberOfX = 0
let numberOfO = 0

function countEach(str) {
    let string = str
    array.push(string)
    for (let i = 0 ; i < array.length ; i++ ) {
        letters = array[i].split("")
        for (let j = 0 ; j < letters.length ; j++) {
            if (letters[j] === "o") {
                numberOfO++
            } else  if (letters[j] === "x") {
                numberOfX++
            }
            
        }
    }
    console.log(numberOfO, numberOfX)
    if (numberOfO === numberOfX) {
        console.log ("true")
    } else {
        console.log ("false")
    }
}

countEach("xxooxoox")



//ex3

let array = []
let letters = []
let invertedString = ""

function checkPal(str) {
    let string = str
    array.push(string)
    for (let i = 0 ; i < array.length ; i++ ) {
        letters = array[i].split("")
    }
    letters.reverse()
    invertedString = letters.join("")
    console.log(string, invertedString)
    if (string === invertedString) {
        console.log("Palindrome !")
    } else {
        console.log("Nope")
    }
}

checkPal ("racecar")



//ex4

let array = []
let letters = []
let swapped = ""
let letter = ""
function swap(str) {
    let string = str
    array.push(string)
    for (let i = 0 ; i < array.length ; i++ ) {
        letters = array[i].split("")
    }
    for (let j = 0 ; j < letters.length ; j++) {
        if (letters[j] === letters[j].toUpperCase()) {
            letters[j] = letters[j].toLowerCase()
        } else  if (letters[j] === letters[j].toLowerCase()) {
            letters[j] = letters[j].toUpperCase()
        }
        
    }
    swapped = letters.join("")
    console.log(swapped)
}

swap ("Hello World")



//bonus 1

let array = []
let letters = []
let spongeBob = ""
function makeItSpongeBob(str) {
    let string = str
    array.push(string)
    for (let i = 0 ; i < array.length ; i++ ) {
        letters = array[i].split("")
    }
    for (let j = 0 ; j < letters.length ; j++) {
        if (j % 2 !== 0) {
            console.log(letters[j], "odd")
            letters[j] = letters[j].toLowerCase()
        } else  if (j % 2 === 0) {
            letters[j] = letters[j].toUpperCase()
            console.log(letters[j], "even")
        }
    }
    spongeBob = letters.join("")
    console.log(spongeBob)
}

makeItSpongeBob ("AAAAbbbbbbCCCCC")



//bonus2

let array = []
let letters = []
let sortedString = ""

function sortLetters(str) {
    let string = str
    array.push(string)
    for (let i = 0 ; i < array.length ; i++ ) {
        letters = array[i].split("")
        for (let j = 0 ; j < letters.length ; j++) {
            if (letters[j] === letters[j].toUpperCase()) {
                letters[j] = letters[j].toLowerCase()
            }
        }
    }
    letters.sort()
    sortedString = letters.join("")
}

sortLetters("KonexiO")
console.log(sortedString)

*/

//bonus3

let array = []
let letters = []
let numberOfX = 0
let numberOfO = 0
let numberOfupperCase = 0

function countEach(str) {
    let string = str
    array.push(string)
    for (let i = 0 ; i < array.length ; i++ ) {
        letters = array[i].split("")
        for (let j = 0 ; j < letters.length ; j++) {
            if (letters[j] === "o") {
                numberOfO++
            } else  if (letters[j] === "x") {
                numberOfX++
            } else {
                console.log("error", letters[j], "this letter is neither x nor o")
                if (letters[j] === letters[j].toUpperCase()) {
                    numberOfupperCase++
                }
            }
            
        }
    }
    console.log(numberOfO, numberOfX)
    console.log("there are", numberOfupperCase, "uppercase letters")
    if (numberOfO === numberOfX) {
        console.log ("true")
    } else {
        console.log ("false")
    }
}

countEach("rheXOzxoXooo")