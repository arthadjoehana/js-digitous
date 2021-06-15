var limit = 5
var score = 6
var password = "ghriozeghr"
if ( password.length > limit && score > limit ) {
    console.log("Everything is good")
} else if ( password.length > limit || score > limit ) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}