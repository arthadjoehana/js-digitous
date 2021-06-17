var sentence = "Hello Konexio !"
var reverse = ""
for (var i = sentence.length - 1; i >= 0; i--) {
    reverse = reverse += sentence[i];
}
console.log(reverse)