var countdownDiv = null;
var bmStart = Date.UTC(2011, 7, 28, 0, 0, 0, 0)/1000;

function initCountdown()
{
    countdownDiv = document.getElementById('countdown');
    updateCountdown();
    setTimeout('updateCountdown', 1000);
}

function updateCountdown()
{
    var localTime = new Date();
    var nowUTC = Date.UTC(localTime.getFullYear(), localTime.getUTCMonth(), localTime.getUTCDay(), localTime.getUTCHours(), localTime.getUTCMinutes(), localTime.getUTCMinutes());
    nowUTC = nowUTC/1000;
    var timeDiff = bmStart - nowUTC;
    var days = timeDiff/60/60/24;

    countdownDiv.innerText = "days: " + days;
}
