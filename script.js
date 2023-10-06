//funcion que aplica estilo
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    //desaparece el menu
    var x = document.getElementById("nav");
    x.className="";
    link.className = "seleccionado";
}

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    } else{
        x.className = "";
    }
}

//detecto el scrolling
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica animacion
function efectoHabilidades(){
    var skills = document.getElementById("skill");
    var distancia_skill = window.innerHeight = skill.getBoundingClientRect().top;
    if(distancia_skill >= 300){
        document.getElementById("html").classList.add("barra-progeso1"); 
        document.getElementById("js").classList.add("barra-progeso2"); 
        document.getElementById("bd").classList.add("barra-progeso3"); 
        document.getElementById("ps").classList.add("barra-progeso4"); 
    }
}