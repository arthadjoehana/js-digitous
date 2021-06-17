
var tab = [0]

for (var i = 0; i < 20; i++){
    tab.push(Math.floor(Math.random()*100))
    
}

console.log(tab);

var nombreDuTableau = 1;
for (i = 0 ; i <= nombreDuTableau ; i++){
    if ( tab[i] > nombreDuTableau ) {
        nombreDuTableau = tab[i]
    }
}
console.log(nombreDuTableau)
