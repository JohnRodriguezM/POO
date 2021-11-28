export { MateriasColombia,materiasEnColombia }


class MateriasColombia{
    constructor({materias}){
        this.materias = materias;
    }
}

const materiasEnColombia = [
    //materias grado primero bachillerato
    new MateriasColombia({
        materias : [
            "Ciencias Naturales",
            "Geografía de Colombia",
            "Historia de Colombia",
            "Matemáticas",
            "Español y literatura",
        ]
    }),
    // materias grado segundo bachillerato
    new MateriasColombia({
        materias : [
            "Ciencias Naturales",
            "Geografía de América",
            "Historia de América",
            "Matemáticas",
            "Español y literatura"
        ]
    }),
    // materias tercero bachillerato
    new MateriasColombia({
        materias : [
            "Ética",
            "Biología",
            "Geografía universal",
            "Historia universal",
            "Español y literatura",
            "Inglés",
        ]
    }),
    // materias cuarto bachillerato
    new MateriasColombia({
        materias : [
            "Álgebra",
            "Biología",
            "Geografía de Colombia",
            "Historia de Colombia",
            "Español y literatura",
            "Inglés",
        ]
    }),
    // materias quinto bachillerato
    new MateriasColombia({
        materias: [
            "Física",
            "Química",
            "Trigonometría",
            "Filosofía",
            "Español y literatura",
            "Inglés",
            "Política y economía",
            "Religión",
        ]
    }),
    // materias sexto bachillerato
    new MateriasColombia({
        materias : [
            "Cálculo básico",
            "Biología",
            "Filosofía",
            "Química",
            "Español y literatura",
            "Educación Física",
        ]
    })
]
