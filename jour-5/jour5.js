//ex1
var args = process.argv.slice(2)

function calculate (num1, operator, num2) {
    if( operator === '*') {
        console.log( num1 * num2 );
    } else if ( operator === '/' ) {
        console.log( num1 / num2 );
    } else if ( operator === '+' ) {
        console.log( num1 + num2 );
    }
}

if (process.argv.length === 5) {
    calculate(parseInt(process.argv[2]), process.argv[3], parseInt(process.argv[4]));
}else {
    console.log("error");
}


