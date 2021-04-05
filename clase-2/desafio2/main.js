console.log('Desafio 2 - Calculador de promedio y situacion del alumno');

let notaParcial1 = Number(prompt('Ingrese la nota del primer parcial'));
let notaParcial2 = Number(prompt('Ingrese la nota del segundo parcial'));
let notaParcial3 = Number(prompt('Ingrese la nota del tercer parcial'));

let promedio = (notaParcial1 + notaParcial2 + notaParcial3) / 3;

if (notaParcial1 >= 6 && notaParcial2 >= 6 && notaParcial3 >= 6 && promedio >= 8) {
    console.log('Materia Promocionada - Promedio: ' + promedio);
} else if (notaParcial1 >= 4 && notaParcial2 >= 4 && notaParcial3 >= 4) {
    console.log('Materia Aprobada - Promedio: ' + promedio);
} else {
    console.log('Materia NO Aprobada - Promedio: ' + promedio);
}
