var sentence = "Hello Konexio !"
var reversesentence = ""
for (var i = sentence.length - 1; i >= 0; i--) {
    reversesentence = reversesentence += sentence[i];
    console.log(reversesentence)
}