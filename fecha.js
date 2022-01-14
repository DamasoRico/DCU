n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
switch (m) {
    case 1:
        m="enero"
        break;
    case 2:
        m="febrero"
        break;
    case 3:
        m="marzo"
        break;
    case 4:
        m="abril"
        break;
    case 5:
        m="mayo"
        break;
    case 6:
        m="junio"
        break;
    case 7:
        m="julio"
        break;
    case 8:
        m="agosto"
        break;
    case 9:
        m="septiembre"
        break;
    case 10:
        m="octubre"
        break;
    case 11:
        m="noviembre"
        break;
    case 12:
        m="diciembre"
        break;
    default:
        m="NaN"
        break;
}

document.getElementById("date").innerHTML = d + " de " + m + " del " + y;