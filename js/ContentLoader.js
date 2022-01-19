function loadContent(contentFile)
{
    //ordenador
    var ajaxContent = new XMLHttpRequest();
    ajaxContent.open("GET", "content/ordenador/" + contentFile, false)
    ajaxContent.send();
    var content = $("#content");
    content.html(ajaxContent.responseText)

    //movil

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

function change_style(actual)
{
    for (let i=1;i<5;i++){
        document.getElementById("boton"+i).classList.remove("boton_actual")

    }
    document.getElementById(actual).classList.add("boton_actual")
}

function change_content(actual){
    var botones = ["anuncios","evaluacion","correo","recursos","chat","notas","grupos"]
    botones.forEach(function (i){
        document.getElementById(i).classList.remove("boton_superior_actual")
        document.getElementById(i).classList.add("boton_superior")
    })
    document.getElementById(actual).classList.add("boton_superior_actual")
    loadContent(actual+"Content.html")
    swapMailSubjects(actual)
}

function swapMailSubjects(actual){

    var botonera= $("#botonera");
    if (actual == "correo" )botonera.css("display","none")
    else{
        botonera.css("display","block")
    }
}