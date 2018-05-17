/*
    * Auteur:         Devon Thomassen
    * Datum + tijd:   5-3-2018 09:51
    * Bestandsnaam:   ${FILE_NAME}
*/

//gele achtergrond kleur alleen bij de nummers
$("td").not(".niet").hover(function () {
    $(this).css("background-color", "yellow");
});
//reset achtergrond
$("td:odd").not(".niet").mouseleave(function () {
    $(this).css("background-color", "white");
});
$("td:even").not(".niet").mouseleave(function () {
    $(this).css("background-color", "#eee");
});
//teller++
$("td").click(function () {
    if ($(this).attr('id') == "goalsTeam1"){
        addGoalsTeam1();
    }
    if ($(this).attr('id') == "goalsTeam2"){
        addGoalsTeam2();
    }
    if ($(this).attr('id') == "geleKaartenTeam1"){
        addGeleKaartenTeam1();
    }
    if ($(this).attr('id') == "geleKaartenTeam2"){
        addGeleKaartenTeam2();
    }
    if ($(this).attr('id') == "rodeKaartenTeam1"){
        addRodeKaartenTeam1();
    }
    if ($(this).attr('id') == "rodeKaartenTeam2"){
        addRodeKaartenTeam2();
    }
    if ($(this).attr('id') == "wisselsTeam1"){
        addWisselsTeam1();
    }
    if ($(this).attr('id') == "wisselsTeam2"){
        addWisselsTeam2();
    }
    if ($(this).attr('id') == "cornersTeam1"){
        addCornersTeam1();
    }
    if ($(this).attr('id') == "cornersTeam2"){
        addCornersTeam2();
    }
    if ($(this).attr('id') == "penaltiesTeam1"){
        addPenaltiesTeam1();
    }
    if ($(this).attr('id') == "penaltiesTeam2"){
        addPenaltiesTeam2();
    }
    if ($(this).attr('id') == "ingooienTeam1"){
        addIngooienTeam1();
    }
    if ($(this).attr('id') == "ingooienTeam2"){
        addIngooienTeam2();
    }
}).contextmenu(function () {
    if ($(this).attr('id') == "goalsTeam1"){
        goalsTeam1--;
        document.getElementById("goalsTeam1").innerHTML = goalsTeam1;
    }
    if ($(this).attr('id') == "goalsTeam2"){
        goalsTeam2--;
        document.getElementById("goalsTeam2").innerHTML = goalsTeam2;
    }
    if ($(this).attr('id') == "geleKaartenTeam1"){
        geleKaartenTeam1--;
        document.getElementById("geleKaartenTeam1").innerHTML = geleKaartenTeam1;
    }
    if ($(this).attr('id') == "geleKaartenTeam2"){
        geleKaartenTeam2--;
        document.getElementById("geleKaartenTeam2").innerHTML = geleKaartenTeam2;
    }
    if ($(this).attr('id') == "rodeKaartenTeam1"){
        rodeKaartenTeam1--;
        document.getElementById("rodeKaartenTeam1").innerHTML = rodeKaartenTeam1;
    }
    if ($(this).attr('id') == "rodeKaartenTeam2"){
        rodeKaartenTeam2--;
        document.getElementById("rodeKaartenTeam2").innerHTML = rodeKaartenTeam2;
    }
    if ($(this).attr('id') == "wisselsTeam1"){
        wisselsTeam1--;
        document.getElementById("wisselsTeam1").innerHTML = wisselsTeam1;
    }
    if ($(this).attr('id') == "wisselsTeam2"){
        wisselsTeam2--;
        document.getElementById("wisselsTeam2").innerHTML = wisselsTeam2;
    }
    if ($(this).attr('id') == "cornersTeam1"){
        cornersTeam1--;
        document.getElementById("cornersTeam1").innerHTML = cornersTeam1;
    }
    if ($(this).attr('id') == "cornersTeam2"){
        cornersTeam2--;
        document.getElementById("cornersTeam2").innerHTML = cornersTeam2;
    }
    if ($(this).attr('id') == "penaltiesTeam1"){
        penaltiesTeam1--;
        document.getElementById("penaltiesTeam1").innerHTML = penaltiesTeam1;
    }
    if ($(this).attr('id') == "penaltiesTeam2"){
        penaltiesTeam2--;
        document.getElementById("penaltiesTeam2").innerHTML = penaltiesTeam2;
    }
    if ($(this).attr('id') == "ingooienTeam1"){
        ingooienTeam1--;
        document.getElementById("ingooienTeam1").innerHTML = ingooienTeam1;
    }
    if ($(this).attr('id') == "ingooienTeam2"){
        ingooienTeam2--;
        document.getElementById("ingooienTeam2").innerHTML = ingooienTeam2;
    }
});
//naam veranderen
$("#naamTeam1").click(function () {
    changeNaamTeam1('prompt()');
});
$("#naamTeam2").click(function () {
    changeNaamTeam2('prompt()');
});
//reset button
$("#resetButton").click(resetClicked);

// $('[id^="matchItem_"]').click(function() {
//     $(this).alert("test");
// });
