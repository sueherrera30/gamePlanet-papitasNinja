var btnconsola = document.getElementById("btnconsola");
var btnvideojuegos = document.getElementById("btnvideojuegos");
var btnaccesorios = document.getElementById("btnaccesorios");

var consola= document.getElementById("consola");
var videojuegos = document.getElementById("videojuegos");
var accesorios= document.getElementById("accesorios");
console.log(videojuegos);
console.log(consola);
console.log(accesorios)



btnvideojuegos.addEventListener("click",mostrarVideojuegos);

function mostrarVideojuegos(){
  consola.style.display="none";
  videojuegos.style.display="block";
  accesorios.style.display="none";	 
}
btnaccesorios.addEventListener("click",mostrarAccesorios);
   
function mostrarAccesorios(){
   consola.style.display="none";
   accesorios.style.display="block";
   videojuegos.style.display="none";
}

btnconsola.addEventListener("click",mostrarConsola);
   
function mostrarConsola(){
   consola.style.display="block";
   accesorios.style.display="none";
   videojuegos.style.display="none";
}