var consola = document.getElementById("consola");
var videojuegos = document.getElementById("videojuegos");
var btnaccesorios = document.getElementById("btnaccesorios");

var secVideojuegos = document.getElementById("videojuegosSec");
var accesorios= document.getElementById("accesorios");


videojuegos.addEventListener("click",videojuegos);

function videojuegos(){
  accesorios.style.display="none";
  consola.style.display="none";
}


accesorios.addEventListener("click",accesorios);
   
function accesorios(){
   videojuegos.style.display="none";
  consola.style.display="none";
}