
// se importa la clase videosClases del archivo provisional.mjs
// esa clase tiene conexion a dos funciones externas que se materializan dentro de la misma clase
// uno de las propiedades de la clase se usa como argumento de la función
import { videosClases } from "./provisional.mjs";

let nuevoVideo = new videosClases({
    name : "clase de algoritmos y desarrollo de software",
    classId: "654525"
})

console.log(nuevoVideo.setClassId = "458520")

console.log(nuevoVideo)