/*
    * Auteur:         Devon Thomassen
    * Datum + tijd:   13-5-2018 22:11
    * Bestandsnaam:   script.js
*/

// stap 1: aanmaken url variable
var URL = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

// stap 2 aanmaken options object
var options ={
    url: URL,
    success: function (data)
    {

    }
};

// stap 3: uitvoeren van ajax request
$.ajax( options );