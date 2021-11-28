// clase grados - para clase EstudianteColombiano

// se exporta para ser usado en los diversos modulos
export { GradosColombia,gradosColombia }

// se importa la clase que construye las diferentes materias del plan de estudio Colombiano, de la misma manera se importa el array que contiene esa clase instanciada con las difentes materias que hay

import { MateriasColombia,materiasEnColombia } from "./claseMaterias.mjs";


class GradosColombia{
    constructor({grados}){
        this.grados = grados;
    }
}

const gradosColombia = [
    //primer grado
    new GradosColombia({grados:{
        nombre: "Primero bachillerato",
        materias : [
            materiasEnColombia[0]
        ]
    }}),
    //segundo grado
    new GradosColombia({
        grados: {
            nombre : "Segundo Bachillerato",
            materias : [
                materiasEnColombia[1]
            ]
    }}),
    // tercer grado
    new GradosColombia({
        grados: {
            nombre : "Tercero Bachillerato",
            materias : [
                materiasEnColombia[2]
            ]
    }}),
    // cuarto grado
    new GradosColombia({
        grados: {
            nombre : "Cuarto Bachillerato",
            materias : [
                materiasEnColombia[3]
            ]
    }}),
    // quinto grado
    new GradosColombia({
        grados: {
            nombre : "Quinto Bachillerato",
            materias : [
                materiasEnColombia[4]
            ]
    }}),
    // sexto grado
    new GradosColombia({
        grados: {
            nombre : "Sexto Bachillerato",
            materias : [
                materiasEnColombia[5]
            ]
    }}),
]

console.log(gradosColombia)




