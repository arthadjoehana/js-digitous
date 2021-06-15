var limit = 50
var score = 64
var password = "azerty"
if ( password.length > 5 && score >= limit ) {
    console.log("Everything is good")
} else if ( password.length > 5 || score >= limit ) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}