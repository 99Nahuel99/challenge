var botonEncriptar= document.querySelector(".botonencriptar");
var botonDesEncriptar= document.querySelector(".botondesencriptar");
var botonCopiar=document.querySelector(".botoncopiar");
var munieco= document.querySelector(".munieco");
var parrafo= document.querySelector(".parrafo");
var resultado= document.querySelector(".textoresultado");

botonEncriptar.onclick=encriptar;
botonDesEncriptar.onclick=desencriptar;
botonCopiar.onclick=copiar;
function encriptar(){
    ocultarAdelante();
   resultado.textContent =encriptarTexto(recuperarTexto());
}


function desencriptar(){
    ocultarAdelante();
    resultado.textContent =desencriptarTexto(recuperarTexto());
}


function recuperarTexto(){
    var texto=document.querySelector(".texto");
    return texto.value;
}

function ocultarAdelante(){
munieco.classList.add("ocultar");
parrafo.classList.add("ocultar");

}
function encriptarTexto(mensaje){
    var texto1 = mensaje;
    var textoFinal="";
    for(var i=0;i<texto1.length;i++){
        if(texto1[i]=="a"){
            textoFinal=textoFinal + "ai";
        }
        else if(texto1[i] =="e"){
             textoFinal=textoFinal +"enter";
        }
        else if(texto1[i] =="i"){
            textoFinal=textoFinal + "ines";
       }
       else if(texto1[i] =="o"){
            textoFinal=textoFinal + "ober";
        }
    else if(texto1[i] =="u"){
    textoFinal=textoFinal + "ufat";
}
else{
    textoFinal=textoFinal+texto1[i];
}

}
return textoFinal;
}
function desencriptarTexto(mensaje){
    var texto1 = mensaje;
    var textoFinal="";
    for(var i=0;i<texto1.length;i++){
        if(texto1[i]=="a"){
            textoFinal=textoFinal + "a";
            i=i+1;
        }
        else if(texto1[i] =="e"){
             textoFinal=textoFinal +"e";
             i=i+4;
        }
        else if(texto1[i] =="i"){
            textoFinal=textoFinal + "i";
            i=i+3;
       }
       else if(texto1[i] =="o"){
            textoFinal=textoFinal + "o";
            i=i+3;
        }
    else if(texto1[i] =="u"){
    textoFinal=textoFinal + "u";
    i=i+3;
}
else{
    textoFinal=textoFinal+texto1[i];
}

}
return textoFinal;
}
