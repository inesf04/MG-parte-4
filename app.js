// Función para convertir el texto ingresado 
// Objetivo: Pasar la primera letra del texto al final y agregar "ay"
function convertirTexto(texto) {
    let nuevoTexto = ""
    
    if (texto !== null)  {
        // elimino caracteres en blanco al inicio y al final 
        texto = texto.trim()
        // lo convierto en array de palabras usando " " como separador
        let listaPalabras = texto.split(" ")
        //Guardo la longitud del array
        let c = listaPalabras.length
        // recorro el arreglo y transaformo cada palabra
        for (let i=0; i<c; i++){
            let primera = listaPalabras[i].slice(0, 1)
            let segunda= listaPalabras[i].slice(1, 2).toUpperCase()
            let medio= listaPalabras[i].slice(2, listaPalabras[i].lenght)
            let final="ay, "
            // Si la última palabra de la lista, cierro  con "ay!"
            if (i===(c-1)) {
                final="ay!"
            } 
            nuevoTexto = nuevoTexto + segunda + medio + primera + final 
        } 
        
    }
    return nuevoTexto
}

// función para manejar el evento click del botón
function transformarTexto() {
    // recupero texto del DOM
    const texto = document.getElementById("texto")
    // transformo el texto y lo muestro solo si no se dejó nulo
    if (texto.value) {
        let resultado = convertirTexto(texto.value)
        alert("El texto transformado es: " + resultado)
    }
    else {
        alert("Debe ingresar un texto")
    }
}
