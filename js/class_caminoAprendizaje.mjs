export { caminoAprendizaje };
export { escuela1,escuela2,escuela3 };

// tuvo que ser importado dado que se usaba en este módulo
import { cursoProgBasica,ecmaScript6,basicoJs,practicoJs,computacionBasica,algoritmosPensamientoLogico,gitYHub,tecnologiaG,introduccionWeb } from "./class_cursos.mjs";

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