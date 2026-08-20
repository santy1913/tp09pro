const nombreEquipo1 = "equipo A"
const grupoEquipo1 = "grupo Y"
const paisEquipo1 = "Argentina"
let puntosEquipo1 = 8


const nombreEquipo2 = "equipo C"
const grupoEquipo2 = "grupo Y"
const paisEquipo2 = "Alemania"
let puntosEquipo2 = 4


console.log("Informacion del ultimo partido:")
console.log(nombreEquipo1 + " - " + grupoEquipo1 + " - " + paisEquipo1)
console.log("Contra")
console.log(nombreEquipo2 + " - " + grupoEquipo2 + " - " + paisEquipo2)
if (puntosEquipo1 > puntosEquipo2) {
    console.log("El ganador es: " + paisEquipo1)
} else if (puntosEquipo1 < puntosEquipo2) {
    console.log("El ganador es: " + paisEquipo2)
} else {
    console.log("El resultado fue un empate")
}
