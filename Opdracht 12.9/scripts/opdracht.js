$(document).ready(function () {
    $("td:nth-child(3)").each(function () {
        var x = $(this).text();
        //Taak 2
        if(x === "Denbosch"){
            $(this).css('background-color', 'blue');
            $(this).css('color', 'white');
        }
        else if(x === "Zijtaart"){
            $(this).css('background-color', 'green');
            $(this).css('color', 'white');
        }
    });
    $("td:nth-child(4)").each(function () {
        var x = $(this).text();
        //Taak 3
        if(x <= 1968){
            $(this).css('background-color', 'grey');
            $(this).css('color', 'white');
        }
        else if(x >= 1992){
            $(this).css('background-color', 'green');
            $(this).css('color', 'white');
        }
    });
    $("td:nth-child(5)").each(function () {
        var x = $(this).text();
        //Taak 4
        if(x === "Male"){
            $(this).css('background-color', 'blue');
            $(this).css('color', 'white');
        }
        else if(x === "Female"){
            $(this).css('background-color', 'pink');
            $(this).css('color', 'white');
        }
    });
    $("td:last-child").each(function () {
        var x = $(this).text();
        //Taak 4
        if(x <= 1993){
            $(this).css('background-color', 'orange');
        }
        else if(x >= 2008){
            $(this).css('background-color', 'green');
            $(this).css('color', 'white');
        }
    });
});