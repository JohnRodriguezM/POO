export { cursos };
export { cursoProgBasica,ecmaScript6,basicoJs,practicoJs,computacionBasica,algoritmosPensamientoLogico,gitYHub,tecnologiaG,introduccionWeb };

// tuvieron que ser importados ya que ambos se usaban en este modulo
import { paqueteClases } from "./clase_clases.mjs";
import { maestrosPlatzi } from "./claseDocente.mjs";

class cursos {
    constructor({name, clases,docente})
    {this.name = name;this.clases = clases; this.docente = docente;}}

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
