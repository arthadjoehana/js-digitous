//ex1

var fs = require("fs");

fs.readFile("jour07.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }
 
    console.log("affichage du contenu du fichier jour07.txt : " + data.toString());
 });


//ex2

var array = [1, 2, 3, 4, 5]

var double = array.map(function(num) {
    return num * 2;
  });

 console.log(double);

 //ex3

 var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

var shortNames = longNames.map(function(person) {
    
    return person.names = person.firstName + " " + person.lastName;
    
  });

console.log(shortNames)

//ex4