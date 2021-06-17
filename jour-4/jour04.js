//exercice 1

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,

}

console.log(cat)

if (cat.isCute === true) {
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

function format(num){
    var h = Math.floor(num / 3600);
    var m = Math.floor(num % 3600 / 60);
    var s = Math.floor(num % 3600 % 60);

    var hours = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var minutes = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var seconds = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hours + minutes + seconds; 
}

format(3700)
time = hours + ";" + minutes + ";" + seconds
console.log(time)

