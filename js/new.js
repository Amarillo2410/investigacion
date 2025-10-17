document.getElementById("verificar")
.addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = peso/(altura*altura);

    let clasificacion = "";
    if (resultado < 18.5) {
        alert (nombre + " tu indice de masa corporal es " + resultado.toFixed(2) + " por lo tanto estas en bajo peso");
        nuevasrc = "/assents/imagenes/bajo_peso.jpg";
    }
    imagen.classList.add("fade-out");
    imagen.src = nuevaSrc;         // CAMBIA la imagen del MISMO elemento <img>
    imagen.classList.remove("fade-out");
});

