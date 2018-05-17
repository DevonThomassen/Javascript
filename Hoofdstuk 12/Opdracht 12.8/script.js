/*
    * Auteur:         Devon Thomassen
    * Datum + tijd:   25-3-2018 18:25
    * Bestandsnaam:   script.js
*/

$(document).ready(function () {
    //var
    var counter = 1;
    //Taak 1
    $("li").each(function (index) {
        console.log(index + ": " + $(this).text());
    });
    $(".hot").each(function () {
        alert($(this).text());
    });
    $("li:not(.hot)").each(function () {
        $(this).css('color', 'black');
    });
    //Taak 4
    $("li").each(function () {
        var boodschap = $(this).text();
        if(boodschap === "Boter"){
            $(this).addClass("hot");
        }
    });
    $("li").each(function () {
        var boodschap = $(this).text();
        if(boodschap === "Aardappelen"){
            $(this).removeClass("hot");
        }
    })
    //Taak 2
    $("li").each(function () {
        //prepend is een stuk makkelijker
        $(this).prepend(counter + ". ");
        counter++;
    });
    //Taak 3
    $("li").click(function () {
        $(this).remove();
    });
});