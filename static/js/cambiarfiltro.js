(function(){
    var opcion = document.getElementById('opcion');
    opcion.addEventListener('change',Seleccion)
}());
function Seleccion(){
    var cod = document.getElementById("opcion").value;
    console.log(cod)
    if(cod=="General"){
        alert("prueba")
    }
}