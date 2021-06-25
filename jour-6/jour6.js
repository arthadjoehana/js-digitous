/*

//ex1


function formatDate (str) {

    var day = str.getDate()
    var month = str.getMonth() + 1
    var year = str.getFullYear()
    if (day < 10) {
        day = "0" + day
    }
    if (month < 10) {
        month = "0" + month
    }
    var date = day.toString() + "/" + month.toString() + "/" + year.toString()
    console.log(date)
}

formatDate(new Date)

//ex2

function calculateAge (str) {
    var date = new Date
    var year = date.getFullYear()
    console.log(year)
    var age = year - parseInt(str)
    console.log ("age :", age)
}

calculateAge (1989)
*/

//ex3

var prompt = require("prompt");

prompt.start();

var properties = [
    {
      name: "username",
      validator: /^[a-zA-Z0-9\-]+$/,
      warning: "votre nom d'utilisateur ne doit contenir que des lettres, chiffres et tirets"
    },
    {
        name: "email",
        validator: /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]*$/,
        warning: "votre email doit  être au format xxx@xxx.xxx"
      },
    {
      name: "password",
      validator: /^[a-zA-Z0-9]+$/,
      warning: "votre mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre"
    }
];



function checkProfile() {
    prompt.get(
        properties,
        function (err, res) {
            if ( res.password.length < 6 ) {
                console.log("error")
                checkProfile()
            } else {
                console.log("All good !")
            }
            
            
        }
    );
}

  checkProfile()