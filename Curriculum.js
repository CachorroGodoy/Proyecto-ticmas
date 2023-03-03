//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu (){
    if(menu_visible==false){//si esta oculto
        menu.style.display ="block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = falso;
    }
}

//oculto el menu una vez que selecciono una opcion
let links=document.querySelectorAll("nav a");
for(var x=0;x<links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }

}

//creo barritas de una barra particularidentificada por si id

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales para luego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let adobe = document.getElementById("adobe");
crearBarra(adobe);
let longomatch = document.getElementById("longomatch");
crearBarra(longomatch);
let excel = document.getElementById("excel");
crearBarra(excel);
let canva = document.getElementById("canva");
crearBarra(canva);

//guardo la cantidad de barritas que se van a ir copiando por cada barra
let contadores = [-1,-1,-1,-1,-1,-1]
//bandera para saber si ya se ejecuto la funcion
let entro = false;


function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 13, 0, intervalHtml)
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 12, 1, intervalJavascript)
        },100);
        const intervalAdobe = setInterval(function(){
            pintarBarra(adobe, 15, 2, intervalAdobe)
        },100);
        const intervalLongomatch = setInterval(function(){
            pintarBarra(longomatch, 16, 3, intervalLongomatch)
        },100);
        const intervalExcel = setInterval(function(){
            pintarBarra(excel, 16, 4, intervalExcel)
        },100);
        const intervalCanva = setInterval(function(){
            pintarBarra(canva, 14, 5, intervalCanva)
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#2494d9";
    }else{
        clearInterval(interval)
        }
}

//detecto el scrolling del mouse para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}