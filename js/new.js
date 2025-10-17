
document.getElementById("verificar") 
.addEventListener("click", function() {
    document.getElementById("texto");
    let img= document.getElementById("imagen");

    let nombre = document.getElementById("nombre").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = peso/(altura*altura);

    let clasificacion = "";
    if (resultado < 18.5) {
        alert (nombre + " tu indice de masa corporal es " + resultado.toFixed(2) + " por lo tanto estas en bajo peso")
        img.src="/assets/imagenes/bajopeso.jpg"
        
    }
    else if(resultado>18.5 || resultado<24.9){
        alert(nombre + "tu indice de masa corporal es de" + resultado.toFixed(2) + " por lo tanto tienes un peso normal");
    }
    else if(resultado<49 )
        alert(nombre+ "tu indice de masa coporal es " + resultado.toFixed(2) + "por lo que tienes sobrepeso")
        
});

