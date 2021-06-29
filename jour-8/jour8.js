const axios = require("axios")
/*
//ex1

axios.get("https://restcountries.eu/rest/v2/all").then(function (res) {
    const getCountries = res.data; //getCountries is an array of objects
    const countriesNames = getCountries.map(country => country.name);
    //const countriesNames = getCountries.map(function(country) {return country.name});
    console.log(countriesNames);
});

//ex2

axios.get("https://api.chucknorris.io/jokes/random").then(function (res) {
    const getFacts = res.data; //is an object
    console.log('Chuck Norris fact : ', getFacts.value);
});
*/
//ex3

axios.get("https://pokeapi.co/api/v2/pokemon/").then(function (res) {
    const pokemonData = res.data; //is an object
    const pokemonList = pokemonData.results //is an array
    const pokemonName = pokemonList.map(pokemon => pokemon.name); //is an array
    function catchPokemon(num) {
        console.log(pokemonName[num]);
    }
    catchPokemon (10)
});

