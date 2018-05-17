//Taak 1
$("button:first-of-type").click(function () {
    $("button:first-of-type").fadeOut(3000,function () {
        $("h3:first-of-type").css("backgroundColor", "red");
        $("p:first-of-type").fadeTo().css("opacity", "0.5");
    });
});

//Taak 2
$("button:nth-of-type(2)").click(function () {
    $("div:first-of-type").animate({
        width: '500px'
    }, 3000);
    setTimeout(function () {
        console.log("Devon Thomassen " + Date());
        $("p:nth-of-type(2)").fadeToggle();
        $("div:first-of-type").animate({
            width: '50px'
        }, 4000);
    }, 3000);
});

//Taak 3 met wat leuke dingen erin
$("button:last-of-type").click(function () {
    $("div:last-of-type").animate({
        'margin-left' : '500px'
    }, 3000);
    $("button:last-of-type").animate({'margin-left' : '-300px'}, 3000);
    setTimeout(function () {
        // $("button:last-of-type").fadeOut(1000);
        $("button:nth-last-of-type(2)").fadeIn(1000);
    }, 3000);
    $("button:nth-last-of-type(2)").click(function () {
        $("div:last-of-type").animate({
            'margin-left' : '0'
        }, 3000);
        $("button:nth-last-of-type(2)").fadeOut(1000);
        //setTimeout(function () {
            // $("button:last-of-type").fadeIn(1000);
            //$("button:nth-last-of-type(2)").fadeOut(1000);
        //}, 3000);
        $("button:last-of-type").animate({'margin-left' : '0'}, 3000);
    });
});
