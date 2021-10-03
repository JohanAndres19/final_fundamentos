(function(){
    console.log("f+álsdfla{dñflañfl{ñasdlf{ñ")
    var contador= 0;
    var opcion = document.getElementsByTagName('select');
    var funcion = function(){
                Seleccion(contador,opcion)
    }
    opcion.addEventListener('change',funcion)
    
}());
function Seleccion(contador){
    var cod = document.getElementsByTagName("select")[0].value
    var cod1 = document.getElementsByTagName("select")[1].value
    var cod2 = document.getElementsByTagName("select")[2].value
    var cod3 = document.getElementsByTagName("select")[3].value
    console.log(contador)
    if(cod!=""){
        contador = contador+1;
        
    }
    if(cod1!=""){
        contador = contador+1;
        
    }
    if(cod2!=""){
        contador = contador+1;
        
    }
    if(cod3!=""){
        contador = contador+1;
        
    }
}