export {docente};
export {maestrosPlatzi};

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


//import { docente } from "./claseDocente.mjs";

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

//console.log(maestrosPlatzi[0].getname)
//console.log(maestrosPlatzi[0].setname = "Andres Pelaez")// en este momento el nombre del docente de platzi de maestrosPlatzi[0] que era freddy //vega cambio a andres pelaez
//console.log(maestrosPlatzi[0].getCursoDicta)
//console.log(maestrosPlatzi[0].setCursoDicta = ["curso unico de software", "curso de google analytics", "curso profesional de AI"])