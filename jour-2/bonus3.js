var roundedNumber = 12.5
if (((roundedNumber - Math.floor(roundedNumber)) * 10) >= 5 ) { 
    console.log(Math.ceil(roundedNumber)) 
} else {
    console.log(Math.floor(roundedNumber))
}