// nueva
// proxima clase a fabricar, la clase docente, con el nombre y los cursos que dicta
class docente {
    constructor(
    {
        nombre,
        cursosDicta = [],
    }
    )
    {
    this.nombre = nombre;
    this.cursosDicta = cursosDicta;
    }
}

const maestrosPlatzi = [
    new docente({
        nombre: "Freddy Vega",
        cursosDicta : [
        "Curso prog Basica",
        "curso profesional de git y git hub",
        "curso de introduccion a la web",
    ]}),
    new docente({
        nombre: "Oscar Barajas",
        cursosDicta : [
            "Curso de ES6+",
        ]
    }),
    new docente({
        nombre: "Diego De granda",
        cursosDicta: [
        "Curso basico Js",
        "Curso practico js",
        "curso definitivo de Html"
    ]}),
    new docente({
        nombre: "Andrew Pilsen",
        cursosDicta: [
        "curso de computacion Basica",
        "Curso de algoritmos y pensamiento logico",
        "Curso de tecnologia para gerentes",
    ]})
]
//console.log(maestrosPlatzi[0])
//import { carro } from "./variables.mjs";
//console.log(carro)
/* cursos */



//

class clases{constructor(paquete){this.paquete = paquete;}}

const paqueteClases = [
    new clases("clase de desarrollo"),
    new clases("Clase de buen uso de tiempo"),
    new clases("Clase no relacional"),
    new clases("Nuevas herramientas de ES6"),
    new clases("Las futuras herramientas que nos esperan en JS"),
    new clases("Leve introducción a POO"),
    new clases("Despida del curso"),
    new clases("Crea tu primer proyecto con js"),
    new clases("Solucionando casos de la vida real con JS"),
    new clases("¿Que es git y cómo usarlo?"),
    new clases("¿como desarrollar proyectos reales con git?"),
    new clases("¿por que es necesaria la tecnologia en las empresas?")
]





//et paquete clase

class cursos {constructor({name, clases,docente}) {this.name = name;this.clases = clases; this.docente = docente;}}

let cursoProgBasica = new cursos({
    name: "Curso programacion básica",
    clases: [
        paqueteClases[0], // clase de desarrollo
        paqueteClases[1],// clase de buen uso de tiempo
        paqueteClases[2], // clase no relacional
    ],
    docente: maestrosPlatzi[0],
})

/* cursos escuela de javascript*/
let ecmaScript6 = new cursos({
    name: "Curso de ecmaScript6+",
    clases: [
        paqueteClases[3], // nuevas herramientas de ES6
        paqueteClases[4] // Las futuras herramientas que nos esperan en JS
    ],
    docente: maestrosPlatzi[1],
})

let basicoJs = new cursos({
    name : "Curso Basico de Js",
    clases: [
        paqueteClases[0], // clase de desarrollo
        paqueteClases[5], // introduccion a POO
        paqueteClases[6], //despedida del curso
    ],
    docente: maestrosPlatzi[2],
})

let practicoJs = new cursos({
    name: "Curso prático de Js",
    clases: [
        paqueteClases[1], // clase de buen uso de tiempo
        paqueteClases[7], // Crea tu primer proyecto con JS
        paqueteClases[8] // Solucionando problemas de la vida real con JS
    ],
    docente: maestrosPlatzi[2],
})
/*cierre cursos de javascript*/

/*cursos escuela de desarrollo web*/

let computacionBasica = new cursos({
    name: "Curso de computacion básica",
    clases: [
        paqueteClases[2], // clase no relacional
        paqueteClases[0], // clase de desarrollo
        paqueteClases[1], // clase de buen usod e tiempo
    ],
    docente: maestrosPlatzi[3],
})

let algoritmosPensamientoLogico = new cursos({
    name: "Curso de algoritmos y pensamiento lógico",
    clases: [
        paqueteClases[8], // Solucionando problemas de la vida real con JS
        paqueteClases[0], // clase de desarrollo
        paqueteClases[2], // clase no relacional
    ],
    docente: maestrosPlatzi[3],
})

let gitYHub = new cursos({
    name: "Curso profesional de git y hub",
    clases: [
        paqueteClases[9], // "¿que es git y como usarlo?"
        paqueteClases[10], // "¿como desarrollar proyectos reales con git?"
        paqueteClases[0],// clase de desarrllo
        paqueteClases[6] // despedida del curso
    ],
    docente: maestrosPlatzi[0],
})
/*cierre escuela de desarrollo web*/

/*curso escuela de programacion y desarrollo de software*/

let tecnologiaG = new cursos({
    name: "Curso de tecnologia para gerentes",
    clases: [
        paqueteClases[11], // "¿por que es necesaria la tecnologia en las empresas"
        paqueteClases[9], // "¿que es git y como usarlo?"
        paqueteClases[8] // Solucionando problemas de la vida real con JS
    ],
    docente: maestrosPlatzi[3],
})

let introduccionWeb = new cursos({
    name: "Curso de introduccion a la web",
    clases: [
        paqueteClases[9], // "¿que es git y como usarlo?"
        paqueteClases[11], // "¿por que es necesaria la tecnologia en las empresas"
    ],
    docente: maestrosPlatzi[3],
})

/*cierre escuela de programacion y desarrollo de software*/










// clase de construccion de rutas de aprendizaje
class caminoAprendizaje{constructor({nombre,cursos}){this.nombre = nombre;this.cursos = cursos;}}

// instancia de class caminoAprendizaje (muestra la escuela de javascript)
let escuela1 = new caminoAprendizaje({
    nombre: "Escuela de JavaScript",
    cursos: [cursoProgBasica,basicoJs,practicoJs,ecmaScript6,]
})
// instancia de class caminoAprendizaje (muestra la escuela de desarrollo web)
let escuela2 = new caminoAprendizaje({
    nombre: "Escuela de desarrollo web",
    cursos: [cursoProgBasica,computacionBasica,algoritmosPensamientoLogico,gitYHub,]
})
// instancia de class caminoAprendizaje (muestra la escuela de software)
let escuela3 = new caminoAprendizaje({
    nombre: "Escuela de prog. y desarrollo de software",
    cursos: [cursoProgBasica,computacionBasica,introduccionWeb,tecnologiaG,]
})

// clase creadora de estudiantes
class Estudiante{constructor(
{nombre,edad,caminoAprendizaje,twitter,instagram,facebook,}
)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.caminoAprendizaje = caminoAprendizaje;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
    }
}

let estudiante1 = new Estudiante({
    nombre:"john",
    edad: 20,
    facebook: "John JR",
    twitter: "JOHN--73",
    caminoAprendizaje: [
        escuela1, // traigo las instancias de la clases caminoAprendizajes
        escuela2, // traigo las instancias de la clases caminoAprendizajes
    ]
})

let estudiante2 = new Estudiante({
    nombre: "camila",
    edad: 22,
    facebook: "cam",
    twitter: "cammmm85",
    instagram: "camNu",
    caminoAprendizaje: [
        escuela3, // traigo las instancias de la clases caminoAprendizajes
    ]

})

console.log(estudiante1)
console.log(estudiante2)