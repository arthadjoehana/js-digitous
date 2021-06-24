//ex1


function formatDate (str) {

    var day = str.getDate()
    var month = str.getMonth() + 1
    var year = str.getFullYear()
    
    if (day <10) {
        day = "0" + day
    }
    if (month <10) {
        month = "0" + month
    }
    var date = day.toString() + "/" + month.toString() + "/" + year.toString()
    console.log(date)
}

formatDate(new Date)

//ex2

