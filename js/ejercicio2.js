// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

const listaCiudades = []

while (true) {
    const nombreCiudades = prompt("Ingrese nombre de ciudades")
    

    if (nombreCiudades === null) {
        break
    } 

    listaCiudades.push(nombreCiudades)
}

document.write(`<h1>Ciudades:</h1>`)

for (let i = 0; i < listaCiudades.length; i++) {
    document.write(`<ul>
                        <li>${listaCiudades[i]}</li>
                    </ul>`)
}

document.write(`Cantidad de ciudades en la lista: ${listaCiudades.length}`)
document.write("<br>")
document.write(`Ciudad n°1: ${listaCiudades[0]}`)
document.write("<br>")
document.write(`Ciudad n°3: ${listaCiudades[2]}`)
document.write("<br>")
document.write(`Ciudad en última posición: ${listaCiudades[listaCiudades.length - 1] }`)
document.write("<br>")

listaCiudades.push("París")

document.write(`posición n°2: ${listaCiudades[1]}`)

