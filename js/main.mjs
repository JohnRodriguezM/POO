// Inicio del documento Js // Manejo en modulos permite generar un mayor orden de la informacion
// por el momento el import y el export funciona a traves de nombre los archivos con la extension .mjs


/*
PENDIENTE REALIZAR LOS COMENTARIOS EXPLICATIVOS NECESARIOS...cursosAprobados(PUSH TONIGTH)

*/




// La clase docente que se encuentra en el modulo(archivo) claseDocente.mjs desarrolla un prototipo para instancias de objetos de los maestrosPlatzi
import { docente } from "./claseDocente.mjs";
// en el array maestrosPlatzi se crean las instancias de la clase derivadas de el prototipo (clase) docente que se encuentra en el mismo archivo(modulo)
import { maestrosPlatzi } from "./claseDocente.mjs";



//
// las clases solo van a poder ser vistas y cambiadas a traves de getter(vistas) o setters(cambiadas) //
import { clases } from "./clase_clases.mjs";

import { paqueteClases } from "./clase_clases.mjs";





import { cursos } from "./class_cursos.mjs";

import { cursoProgBasica,ecmaScript6,basicoJs,practicoJs,computacionBasica,algoritmosPensamientoLogico,gitYHub,tecnologiaG,introduccionWeb } from "./class_cursos.mjs";


import { caminoAprendizaje } from "./class_caminoAprendizaje.mjs";

import { escuela1,escuela2,escuela3 } from "./class_caminoAprendizaje.mjs";

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