function loadContent(contentFile)
{
    var ajaxContent = new XMLHttpRequest();
    ajaxContent.open("GET", "content/" + contentFile, false)
    ajaxContent.send();
    var content = $("#content");
    content.append(ajaxContent.responseText);
}

function setDate()
{
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    patata=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    pipo=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
    m=patata[m-1]
    s=n.getDay()
    s=pipo[s]
    document.getElementById("date").innerHTML =s+" "+ d + " de " + m + " del " + y;
}

function SetMenuBar(id)
{
    let menuBar = $("#" + id);
    menuBar.removeClass();
    menuBar.addClass("boton_superior_actual");
}