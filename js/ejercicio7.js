// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

const numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar"))

function multiplicar(num) {
    for (let index = 1; index <= 10; index++) {
        let resultado = num * index
        document.write(`${num} x ${index} = ${resultado} `)
        document.write("<br>")
    }
}

multiplicar(numero)