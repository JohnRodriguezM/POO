// se realizará una clase que junte todo lo de POO

// abstracción
// encapsulamiento
// getter y setters
// modulos
// herencia de prototipos
// polimorfismo

// se importa la clase que construye los diferentes grados y ademas un array que contiene los diferentes grados que se dan en la educacion colombiana(instancias de la clase)
import { GradosColombia,gradosColombia } from "./claseGrados.mjs";

// se importa la clase MateriasColombia que construye las diferentes materias dependiendo el grado en el que se encuentre el estudiante, por otro lado se importa el array materiasEnColombia, que contiene las instancias de esa clase
import { MateriasColombia,materiasEnColombia } from "./claseMaterias.mjs";


class EstudianteColombiano{
    #name;
    #estadoCivil;
    #nacionalidad;
    constructor({name,edad,nacionalidad,estadoCivil,tipoIdentificacion,nivelEstudio,cursosAprobados = [],comentarios = undefined,estudianteActivoPlatzi,facebook,instagram,twitter}){
        this.#name = name;
        this.edad = edad;
        this.#nacionalidad = nacionalidad;
        this.#estadoCivil = estadoCivil;
        this.tipoIdentificacion = tipoIdentificacion;
        this.nivelEstudio = nivelEstudio;
        this.cursosAprobados = cursosAprobados;
        this.comentarios = comentarios;
        this.estudianteActivoPlatzi = estudianteActivoPlatzi;
        this.redes = {
            facebook,
            instagram,
            twitter,
        }
    }
    // metodos de validacion
    //getters de la clase;
    get getName(){
        return this.#name;
    }
    get getNacionalidad(){
        return this.#nacionalidad;
    }
    get getEstadoCivil(){
        return this.#estadoCivil;
    }
    // setters de la clase
    set setName(nuevoNombre){
        this.#name = nuevoNombre;
        if(!nuevoNombre){
            return console.error("No has ingresado ningún nuevo valor para actualizar el nombre");
        }
        if(nuevoNombre !== "string"){
            return console.error("No has ningún valor válido");
        }
        return console.log(`Haz asignado un nuevo nombre, este es ${nuevoNombre}`)
    }
    set setEstadoCivil(nuevoEstadoCivil){
        this.#estadoCivil = nuevoEstadoCivil;
        if(!nuevoEstadoCivil){
            return console.error("No has ingresado ningún nuevo valor para actualizar tu estado civil");
        }
        if(nuevoEstadoCivil !== "string"){
            return console.error();
        }
        return console.log(`Haz actualizado tu estado civil, ahora es ${nuevoEstadoCivil}`)
    }

    //saludo personal para polimorfismo
    saludo(){
        return console.log(`El nivel actual de estudio es ${this.nivelEstudio} y los cursos aprobados son ${this.cursosAprobados}`)
    }
}

const persona1 = new EstudianteColombiano({
    name : "John Jairo Rodriguez Medina",
    edad : 20,
    nacionalidad : "Colombiano",
    estadoCivil: "Casado",
    tipoIdentificacion : "Cédula de ciudadania",
    nivelEstudio: "Bachiller",
    cursosAprobados : [
        gradosColombia[0],
        gradosColombia[1],
        gradosColombia[2],
        gradosColombia[3],
        gradosColombia[4],
        gradosColombia[5],
    ],
    //comentarios
    estudianteActivoPlatzi: true,
    facebook: "John J Rodriguez",
    instagram: "@John_73",
    twitter: "Johnnnn_73",
})

console.log(persona1)

// se hereda directamente de Estudiante Colombiano
class EstudianteProfesor extends EstudianteColombiano{
    constructor(propiedades,anniosExperiencia,entidadVinculada){
        super(propiedades);
        this.anniosExperiencia = anniosExperiencia;
        this.entidadVinculada = entidadVinculada;
    }
    // acá aplico polimorfismo, instancio la clase en la cual voy a modificar un elemento y ahi adentro le asigno diferentes valores
    modificadoSaludo(){
        const modificadora = new EstudianteColombiano({
            nivelEstudio : this.nivelEstudio,
            cursosAprobados : this.anniosExperiencia,
        })
        modificadora.saludo()
    }
}

const profesor1 = new EstudianteProfesor({
    name : "Ernesto Agudelo",
    edad: 55,
    nacionalidad : "Ecuatoriano",
    estadoCivil : "Casado",
    tipoIdentificacion: "Cédula de ciudadania",
    nivelEstudio: "Doctorado",
    estudianteActivoPlatzi: false,
},
12,"Escuela Superior de abogados",
)

console.log(profesor1.modificadoSaludo())