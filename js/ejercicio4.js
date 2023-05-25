// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function esPar(numeroEntero) {
    if (numeroEntero % 2 == 0) {
        return document.write(`El n° ${numeroEntero} es par`)
    } else {
        return document.write(`El n° ${numeroEntero} es impar`)
    }
}

esPar(44)

