// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

const ladoA = parseFloat(prompt("Ingrese el valor en cm de uno de sus lados")) 
const ladoB = parseFloat(prompt("Ingrese el otro valor en cm"))

function calcularPerimetroRectangulo(ladoA, ladoB) {
    return perimetro = 2 * (ladoA + ladoB)
     
}

document.write(`El perímetro es: ${calcularPerimetroRectangulo(ladoA, ladoB)}`)
