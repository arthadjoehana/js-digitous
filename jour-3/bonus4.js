
var tab = []

for (var i = 0; i < 20; i++){
    tab.push(Math.floor(Math.random()*100))
    
}

console.log(tab);

var a = 1;
for (var i = 0 ; i <= a ; i++){
    if ( tab[i] === 0 || tab[i] === 1 ) {
        i = i++
        a = tab[i]
    } else if ( tab[i] > a ) {
        a = tab[i]
    }
}
console.log(a)

//probleme si premier nombre du tableau est 0 ou 1