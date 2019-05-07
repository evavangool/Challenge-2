var today = new Date();
//dagen
var dagNamen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
var formatDay = (dagNamen[today.getDay()]);

document.getElementById('dag').innerHTML = formatDay;

//datum
var maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

var formatDate = today.getDate() + '-' +
    maanden[today.getMonth()] + '-' +
    today.getFullYear();

document.getElementById('date').innerHTML = formatDate;

//tijd
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('tijd').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

startTime();
// voegt 0 toe wanneer het cijfer kleiner is dan 10

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

//achtergrond verandering over tijd
var currentTime = new Date().getHours();
if (7 <= currentTime && currentTime < 11) {
    document.body.style.backgroundImage = "url('image/ochtend.jpg')";
} else if (11 <= currentTime && currentTime < 17) {
    document.body.style.backgroundImage = "url('image/middag.jpg')";
} else if (17 <= currentTime && currentTime < 22) {
    document.body.style.backgroundImage = "url('image/schemer.jpg')";
} else {
    document.body.style.backgroundImage = "url('image/night.jpg')";
}

function animatie(){

  var timeline = new TimelineMax({repeat: -1});
  timeline.to("#tijd", 50, {ease: Elastic.easeOut.config(10), y:6});
};

animatie();
