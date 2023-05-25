// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const cadena = prompt("Ingrese un texto")


function informeCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return 'La cadena esa formada solo por mayúsculas'
    } else if (cadena === cadena.toLowerCase()) {
        return 'La cadena esa formada solo por minúsculas'
    } else {
        return 'La cadena esa formada por minúsculas y mayúsculas'
    }
}

document.write(informeCadena(cadena));