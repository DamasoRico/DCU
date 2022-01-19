function loadContent(contentFile)
{
    //ordenador
    var ajaxContent = new XMLHttpRequest();
    ajaxContent.open("GET", "content/ordenador/" + contentFile, false)
    ajaxContent.send();
    var content = $("#content");
    content.html(ajaxContent.responseText)

    //movil
    var ajaxContentPhone = new XMLHttpRequest();
    ajaxContentPhone.open("GET", "content/movil/" + contentFile, false)
    ajaxContentPhone.send();
    var contentPhone = $("#contentPhone");
    contentPhone.html(ajaxContentPhone.responseText)

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
    // Ordenador
    let menuBar = $("#" + id);
    menuBar.removeClass();
    menuBar.addClass("boton_superior_actual");

    // Movil
    let dropdown = document.getElementById("myDropdown");
    dropdown.children[0].classList.add("selected");
}

function change_style(actual)
{
    for (let i=1;i<5;i++){
        document.getElementById("boton"+i).classList.remove("boton_actual")

    }
    document.getElementById(actual).classList.add("boton_actual")
}

function change_content(actual)
{
    // loads new content
    loadContent(actual+"Content.html")

    // changes pc html, css part
    changePCContent(actual);

    //changes phone html, css part
    changePhoneContent(actual);

    //changes URL for better navigability
    //changeURL(actual);
}

function swapMailSubjects(actual){
    var botonera= $("#botonera");
    if (actual == "correo" || actual == "chat")botonera.css("display","none")
    else{
        botonera.css("display","block")
    }
}

function changePCContent(actual)
{
    var botones = ["anuncios","evaluacion","correo","recursos","chat","notas","grupos"]
    botones.forEach(function (i){
        document.getElementById(i).classList.remove("boton_superior_actual")
        document.getElementById(i).classList.add("boton_superior")
    })
    document.getElementById(actual).classList.add("boton_superior_actual")
    swapMailSubjects(actual)
}

function changePhoneContent(actual)
{
    let dropdown = document.getElementById("myDropdown");
    for(let i =  0; i < dropdown.children.length ; i++) {
        // UNSELECT ALL
        if (dropdown.children[i].classList.contains("selected")) {
            dropdown.children[i].classList.remove("selected");
        }
        // SELECT ACTIVE MENU BUTTON
        if (dropdown.children[i].attributes["data-id"].nodeValue === actual) {
            dropdown.children[i].classList.add("selected");
        }
    }

}

function toggleDropDown()
{
    let dropDown = document.getElementById("myDropdown");
    dropDown.classList.toggle("show");
    // DROPDOWN CLOSED RETURN;
    if (!dropDown.classList.contains("show")) {
        $("#contentPhone").css("margin-top", "10px");
        $("#subjects").css("margin-top", "10px")
        return;
    }

    // MOVE CONTENT DOWN (ONLY IF DROPDOWN IS OPENED)
    let height = dropDown.offsetHeight + 10;
    $("#subjects").css("margin-top", height + "px")

}

function changeURL(actual)
{
    window.history.pushState(null, null, '/DCU/' + actual);
    window.onpopstate = function(e){ e.preventDefault(); };
    window.onbeforeunload = function(){ return "Dude, are you sure you want to leave? Think of the kittens!"; };
}