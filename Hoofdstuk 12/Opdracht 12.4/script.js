/*
    * Auteur:         Devon Thomassen
    * Datum + tijd:   5-3-2018 09:44
    * Bestandsnaam:   ${FILE_NAME}
*/

var teamNaam1 = "FC Orthen Links";
var teamNaam2 = "<tegenstander>";
var goalsTeam1 = 0;
var goalsTeam2 = 0;
var geleKaartenTeam1 = 0;
var geleKaartenTeam2 = 0;
var rodeKaartenTeam1 = 0;
var rodeKaartenTeam2 = 0;
var wisselsTeam1 = 0;
var wisselsTeam2 = 0;
var cornersTeam1 = 0;
var cornersTeam2 = 0;
var penaltiesTeam1 = 0;
var penaltiesTeam2 = 0;
var ingooienTeam1 = 0;
var ingooienTeam2 = 0;

function startTimer()
{
    startTijd = new Date().getTime();
    document.getElementById("wedstrijdTijd").innerHTML = "<h1> 45m 00s </h1>";

    setInterval(function()
    {
        var distance = new Date().getTime() - startTijd;

        var minutes = 44-Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes>=0)
        {
            var seconds = 60-Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("wedstrijdTijd").innerHTML = "<h1>"+minutes + "m " + seconds + "s </h1>";
        }
        else
        {
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("wedstrijdTijd").innerHTML = "<h1 class='extraTime'>"+minutes + "m " + seconds + "s </h1>";
        }
    }, 1000);
}

// Verander naam team 1
function changeNaamTeam1()
{
    tempNaam=prompt("Voer naam team 1 in.", "FC Orthen Links");
    if (tempNaam!=null)
    {
        teamNaam1 = tempNaam;
        document.getElementById("naamTeam1").innerHTML = "<h1>"+teamNaam1+"</h1>";
    }
}

// Verander naam team 1
function changeNaamTeam2()
{
    tempNaam=prompt("Voer naam team 2 in.", "FC JAVASCRIPT");
    if (tempNaam!=null)
    {
        teamNaam2 = tempNaam;
        document.getElementById("naamTeam2").innerHTML = "<h1>"+teamNaam2+"</h1>";
    }
}

// Voeg goal toe aan team 1
function addGoalsTeam1()
{
    goalsTeam1++;
    document.getElementById("goalsTeam1").innerHTML = goalsTeam1;
}
// Haal goal weg bij team 1
function decGoalsTeam1(E)
{
    if (goalsTeam1>0)
    {
        goalsTeam1--;
        document.getElementById("goalsTeam1").innerHTML = goalsTeam1;

    };

    //E.preventDefault;
    return false;
}


// voeg Goals toe aan team 1
function addGoalsTeam1()
{
    goalsTeam1++;
    document.getElementById("goalsTeam1").innerHTML = goalsTeam1;
}


// voeg Goals toe aan team2
function addGoalsTeam2()
{
    goalsTeam2++;
    document.getElementById("goalsTeam2").innerHTML = goalsTeam2;
}

// voeg GeleKaarten toe aan team1
function addGeleKaartenTeam1()
{
    if (geleKaartenTeam1<11)
    {
        geleKaartenTeam1++;
        document.getElementById("geleKaartenTeam1").innerHTML = geleKaartenTeam1;
    }
}

// voeg GeleKaarten toe aan team2
function addGeleKaartenTeam2()
{
    if (geleKaartenTeam2<11)
    {
        geleKaartenTeam2++;
        document.getElementById("geleKaartenTeam2").innerHTML = geleKaartenTeam2;
    }
}

// voeg RodeKaarten toe aan team1
function addRodeKaartenTeam1()
{
    rodeKaartenTeam1++;
    document.getElementById("rodeKaartenTeam1").innerHTML = rodeKaartenTeam1;
}

// voeg RodeKaarten toe aan team2
function addRodeKaartenTeam2()
{
    rodeKaartenTeam2++;
    document.getElementById("rodeKaartenTeam2").innerHTML = rodeKaartenTeam2;
}

// voeg Wissels toe aan team1
function addWisselsTeam1()
{
    if (wisselsTeam1<3)
    {
        wisselsTeam1++;
        document.getElementById("wisselsTeam1").innerHTML = wisselsTeam1;
    }
}

// voeg Wissels toe aan team2
function addWisselsTeam2()
{
    if (wisselsTeam2<3)
    {
        wisselsTeam2++;
        document.getElementById("wisselsTeam2").innerHTML = wisselsTeam2;
    }
}

// voeg Corners toe aan team1
function addCornersTeam1()
{
    cornersTeam1++;
    document.getElementById("cornersTeam1").innerHTML = cornersTeam1;
}

// voeg Corners toe aan team2
function addCornersTeam2()
{
    cornersTeam2++;
    document.getElementById("cornersTeam2").innerHTML = cornersTeam2;
}

// voeg Penalties toe aan team1
function addPenaltiesTeam1()
{
    penaltiesTeam1++;
    document.getElementById("penaltiesTeam1").innerHTML = penaltiesTeam1;
}

// voeg Penalties toe aan team2
function addPenaltiesTeam2()
{
    penaltiesTeam2++;
    document.getElementById("penaltiesTeam2").innerHTML = penaltiesTeam2;
}

// voeg Ingooien toe aan team1
function addIngooienTeam1()
{
    ingooienTeam1++;
    document.getElementById("ingooienTeam1").innerHTML = ingooienTeam1;
}

// voeg Ingooien toe aan team2
function addIngooienTeam2()
{
    ingooienTeam2++;
    document.getElementById("ingooienTeam2").innerHTML = ingooienTeam2;
}


function resetClicked()
{
    teamNaam1 = "FC Orthen Links";
    teamNaam2 = "";
    goalsTeam1 = 0;
    goalsTeam2 = 0;
    geleKaartenTeam1 = 0;
    geleKaartenTeam2 = 0;
    rodeKaartenTeam1 = 0;
    rodeKaartenTeam2 = 0;
    wisselsTeam1 = 0;
    wisselsTeam2 = 0;
    cornersTeam1 = 0;
    cornersTeam2 = 0;
    penaltiesTeam1 = 0;
    penaltiesTeam2 = 0;
    ingooienTeam1 = 0;
    ingooienTeam2 = 0;

    document.getElementById("naamTeam1").innerHTML = "<h1>"+teamNaam1+"</h1>";
    document.getElementById("naamTeam2").innerHTML = "<h1>"+teamNaam2+"</h1>";
    document.getElementById("goalsTeam1").innerHTML = goalsTeam1.toString();
    document.getElementById("goalsTeam2").innerHTML = goalsTeam2.toString();
    document.getElementById("geleKaartenTeam1").innerHTML = geleKaartenTeam1.toString();
    document.getElementById("geleKaartenTeam2").innerHTML = geleKaartenTeam2.toString();
    document.getElementById("rodeKaartenTeam1").innerHTML = rodeKaartenTeam1.toString();
    document.getElementById("rodeKaartenTeam2").innerHTML = rodeKaartenTeam2.toString();
    document.getElementById("wisselsTeam1").innerHTML = wisselsTeam1.toString();
    document.getElementById("wisselsTeam2").innerHTML = wisselsTeam2.toString();
    document.getElementById("cornersTeam1").innerHTML = cornersTeam1.toString();
    document.getElementById("cornersTeam2").innerHTML = cornersTeam2.toString();
    document.getElementById("penaltiesTeam1").innerHTML = penaltiesTeam1.toString();
    document.getElementById("penaltiesTeam2").innerHTML = penaltiesTeam2.toString();
    document.getElementById("ingooienTeam1").innerHTML = ingooienTeam1.toString();
    document.getElementById("ingooienTeam2").innerHTML = ingooienTeam2.toString();
}