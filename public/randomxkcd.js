function getjson(url) { // stack overflow
    var httpreq = new XMLHttpRequest();
    httpreq.open("GET",url,false);
    httpreq.send(null);
    return httpreq.responseText;
}

const $ = document.getElementById.bind(document);

var num = JSON.parse(getjson("https://xkcd.now.sh/")).num;

var json = getjson("https://xkcd.now.sh/" + (Math.floor(Math.random() * (num - 1)) + 1));
var obj = JSON.parse(json);

$("title").innerText = obj.title;
$("image").src = obj.img;
$("image").title = obj.alt;
// $("caption").innerText = obj.alt;
