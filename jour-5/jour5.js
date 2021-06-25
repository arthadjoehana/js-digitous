/*

//ex1

function calculate (num1, operator, num2) {
    if( operator === '*') {
        console.log( num1 * num2 );
    } else if ( operator === '/' ) {
        console.log( num1 / num2 );
    } else if ( operator === '+' ) {
        console.log( num1 + num2 );
    } else if ( operator === '-' ) {
        console.log( num1 - num2 );
    }else if ( operator === '%' ) {
        console.log( num1 % num2 );
    }
}

if (process.argv.length === 5) {
    calculate(parseInt(process.argv[2]), process.argv[3], parseInt(process.argv[4]));
}else {
    console.log("error");
}



//ex2

function multiply (num) {
    console.log( num * 1 );
    console.log( num * 2 );
    console.log( num * 3 );
    console.log( num * 4 );
    console.log( num * 5 );
    console.log( num * 6 );
    console.log( num * 7 );
    console.log( num * 8 );
    console.log( num * 9 );
    console.log( num * 10 );
}

if (process.argv.length === 3) {
    multiply(parseInt(process.argv[2]));
}else {
    console.log("error");
}
//ex3

var {multiply, addition} = require("./table.utils.js")

console.log(multiply, addition)



//ex4

var prompt = require("prompt");

var mysteryNum = Math.floor(Math.random() * 100 + 1 );

prompt.start();

function play () {
    prompt.get(
        {
        name: "num",
        description : "Quel est le nombre mystère ?",
        }, 
        function (err, res) {
            res.num = parseInt(res.num)
            if ( res.num < mysteryNum ) {
                console.log("C'est plus !");
                play();
            }
            else if ( res.num > mysteryNum ) {
                console.log("C'est moins !");
                play();
            }
            else if ( res.num === mysteryNum ) {
                console.log("Bravo !!");
            }

            else {
                console.log("error");
                play();
            };
        }
    );
};

play();

*/

//bonus




