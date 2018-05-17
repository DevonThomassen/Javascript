/*
    * Auteur:         Devon Thomassen
    * Datum + tijd:   7-5-2018 10:07
    * Bestandsnaam:   ${FILE_NAME}
*/


var bg2 = [
    'background: repeating-linear-gradient( to right, #F3C4BC, #F3C4BC 10px, #ffffff 10px, #ffffff 20px)',
    'color: black',
    'padding: 10px 100px 10px 20px',
    'line-height: 35px',
    'font-family: sans-serif'].join(';');
console.log('%c Devon Thomassen \t 🐊\n', bg2);

$("button").click(function () {
    $.ajax({
        url: "https://api.coinmarketcap.com/v1/ticker/bitcoin/",
        complete: function (data) {
            var names =[
                "symbol",
                "rank",
                "priceUSD",
                "priceBTC",
                "dayVolumeUSD",
                "marketCapUSD",
                "availableSupply",
                "totalSupply",
                "maxSupply",
                "percent1h",
                "percent24h",
                "percent7d",
                "updated"
            ];

            var rText =[
                "symbol",
                "rank",
                "price_usd",
                "price_btc",
                "[\"24h_volume_usd\"]",
                "market_cap_usd",
                "available_supply",
                "total_supply",
                "max_supply",
                "percent_change_1h",
                "percent_change_24h",
                "percent_change_7d",
                "last_updated"
            ];

            var bitcoinData = JSON.parse(data.responseText),
                symbol = bitcoinData[0].symbol,
                rank = bitcoinData[0].rank,
                priceUSD = bitcoinData[0].price_usd,
                priceBTC = bitcoinData[0].price_btc,
                dayVolumeUSD = bitcoinData[0]["24h_volume_usd"],    //responseText begins with numbe,
                marketCapUSD = bitcoinData[0].market_cap_usd,
                availableSupply = bitcoinData[0].available_supply,
                totalSupply = bitcoinData[0].total_supply,
                maxSupply = bitcoinData[0].max_supply,
                percent1h = bitcoinData[0].percent_change_1h,
                percent24h = bitcoinData[0].percent_change_24h,
                percent7d = bitcoinData[0].percent_change_7d,
                updated = bitcoinData[0].last_updated;

            for (var i = 0; i < 13; i++) {
                switch (names[i]) {
                    case names[4]:
                        document.getElementById("dayVolumeUSD").innerHTML = dayVolumeUSD;
                        break;
                    case names[9]:
                        document.getElementById("percent1h").innerHTML = percent1h + "%";
                        break;
                    case names[10]:
                        document.getElementById("percent24h").innerHTML = percent24h + "%";
                        break;
                    case names[11]:
                        document.getElementById("percent7d").innerHTML = percent7d + "%";
                        break;
                    default:
                        document.getElementById(names[i]).innerHTML = bitcoinData[0][rText[i]];
                        break;
                }
            }

            if (percent1h >= 0) {
                document.getElementById("percent1h").style.color = "green";
            }else {
                document.getElementById("percent1h").style.color = "red";
            }

            if (percent24h >= 0) {
                document.getElementById("percent24h").style.color = "green";
            }else {
                document.getElementById("percent24h").style.color = "red";
            }

            if (percent7d >= 0) {
                document.getElementById("percent7d").style.color = "green";
            }else {
                document.getElementById("percent7d").style.color = "red";
            }

            // var date = updated * 1000;
            var dateYears = updated / 31536000;
            //TODO: leapYear
            var dateDays = updated / 86400;
            var dateHours = updated / 3600;
            var dateMinutes = updated / 60;


            var dateYearsX = dateYears.toString().indexOf(".");
            var dateYearsComplete = dateYears.toString().substr(0, dateYearsX);

            var dateDaysX = dateDays.toString().indexOf(".");
            var dateDaysComplete = dateDays.toString().substr(0, dateDaysX) - dateYearsComplete * 365 - 11; //temporarily leapyear

            var dateHoursX = dateHours.toString().indexOf(".");
            var dateHoursY = dateHours.toString().substr(0, dateHoursX);
            var dateHoursComplete = dateHoursY - (dateDaysComplete * 24) - (31556926*48/365/24);




            console.log(dateYears);
            console.log(dateDaysComplete);
            console.log(dateHours);
            console.log(dateHoursY);
            console.log(dateHoursComplete);
        }
    });
});
