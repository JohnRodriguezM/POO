// nueva
// proxima clase a fabricar, la clase docente, con el nombre y los cursos que dicta
class docente {
    #nombre; // solo se hace efectivo cuando se crea el getter o el setter
    #cursosDicta; //el arra curso dicta tendrá la misma advertencia
    constructor({nombre,cursosDicta = [],})
    {
    this.#nombre = nombre;
    this.#cursosDicta = cursosDicta;
    }
    get getname(){
        return this.#nombre;
    }
    set setname(cambiaNombre){
        if(typeof cambiaNombre !== "string"){
            return console.log("El nuevo docente no es valido, porfavor verifica su nombre")
        }
        if(!cambiaNombre){
            return console.log("El espacio del docente está vacio, porfavor verifica")
        }
        return this.#nombre = cambiaNombre;
    }
    get getCursoDicta(){
        return this.#cursosDicta;
    }
    set setCursoDicta(cambiaCursoDicta){
        for(let valores of cambiaCursoDicta){
            if(typeof valores !== "string"){
                return console.log("Los valores del array de clases no son cadenas de texto.")
            }
        }
        if(cambiaCursoDicta.length === 0){
            return console.log("No agregaste ningun curso a la modificacion")
        }
        if(!(cambiaCursoDicta instanceof Array)){
            return console.log("No has iniciado un array")
        }
        return this.#cursosDicta = cambiaCursoDicta;
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

console.log(maestrosPlatzi[0].getname)
console.log(maestrosPlatzi[0].setname = "Andres Pelaez")// en este momento el nombre del docente de platzi de maestrosPlatzi[0] que era freddy vega cambio a andres pelaez
console.log(maestrosPlatzi[0].getCursoDicta)
console.log(maestrosPlatzi[0].setCursoDicta = ["curso unico de software", "curso de google analytics", "curso profesional de AI"])
//console.log(maestrosPlatzi[0])
//import { carro } from "./variables.mjs";
//console.log(carro)
/* cursos */



//
// las clases solo van a poder ser vistas y cambiadas a traves de getter(vistas) o setters(cambiadas)
class clases
{
    #paquete
    constructor(paquete)
    {
        this.#paquete = paquete;
    }
    get getpaquete(){
        return this.#paquete;
    }
}

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