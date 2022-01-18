
var ajax = new XMLHttpRequest();
ajax.open("GET", "MainPage.html", false);
ajax.send();
document.body.innerHTML += ajax.responseText;


