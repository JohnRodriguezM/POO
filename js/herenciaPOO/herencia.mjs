// la herencia nos permite crear clases madre / padre
//las clases madres son superClases
// ej: clase general - estudent

// sub clases (clases hijos)
    // student free
        //student basic
            // student expert

// las sub clases heredan a traves de la palabra extends

/*
EJ:

class student{
    #name
    constructor({name,cursosAprobados}){
        this.#name = name;
        this.cursosAprobados = cursosAprobados;
    }
    get getname(){
        return this.#name;
    }
    set setname(nuevoNombre){
        this.#name = nuevoNombre;
    }
}


// a traves del extends hereda los atributos o metodos de la clase padre(student), de esta forma heredaria name, cursosAprobados, ahorrando la creacion de los mismos otra vez


class studentFree extends student{
    constructor({cursosConAcceso,cursosSinAcceso}){
        this.cursosConAcceso = cursosConAcceso;
        this.cursosSinAcceso = cursosSinAcceso;
    }
}


*/

//https://developer.mozilla.org/en-US/docs/Web///JavaScript/Inheritance_and_the_prototype_chain


// exports
export { Student,clasesCursos,escuelas}
export { escuelaJs,escuelaBlock,escuelaWeb,escuelaIngles }
export { cursoBasicoJs,practicoJs,progPOO,progBasica,cursoSolidity,cursoWeb3,problemasWeb }

class Student {
    #name
    #socialMedia
    constructor({name,edad, cursosAprobados = [],escuelas = [],facebook,twitter,instagram}){
        this.#name = name;
        this.edad = edad;
        this.cursosAprobados = cursosAprobados;
        this.escuelas = escuelas;
        this.#socialMedia = {
            facebook,
            twitter,
            instagram,
        }
        //metodos de validacion?
    }
    // getter del name;
    get getname(){
        return this.#name;
    }
    // setter del name;
    set setname(nuevoNombre){
        this.#name = nuevoNombre;
    }
    //
    // get del facebook
    get getfacebook(){
        return this.#socialMedia.facebook;
    }
    //setter del facebook
    set setfacebook(nuevoFacebook){
        this.#socialMedia.facebook = nuevoFacebook;
    }
    //
    // getter del instagram
    get getinstagram(){
        return this.#socialMedia.instagram;
    }
    // setter del instagram;
    set setinstagram(nuevoInstagram){
        this.#socialMedia.instagram = nuevoInstagram;
    }
    //
    // getter del Twitter
    get gettwitter(){
        return this.#socialMedia.twitter;
    }
    // setter del Twitter
    set settwitter(nuevoTwitter){
        this.#socialMedia.twitter = nuevoTwitter;
    }
}

//
class clasesCursos {
    constructor(
        {
            nombreCurso,
            docente = {},
            free = false,
        }
        ){
        this.nombreCurso = nombreCurso;
        this.docente = docente;
        this.free = free;
    }
}

let cursoBasicoJs = new clasesCursos({
    nombreCurso: "Curso basico de js",
    docente: {
        nombre : "Diego de Granda",
        especialidad : "Front-end developer",
        idDocente : "123456",
    },
})

let practicoJs = new clasesCursos({
    nombreCurso : "Curso practico js",
    docente : {
        nombre : "Diego de Granda",
        especialidad : "Front-end developer",
        idDocente : "123456",
    }
})

let progPOO = new clasesCursos({
    nombreCurso : "programacion orientada a objetos",
    docente: {
        nombre : "Cristian Castro",
        especialidad : "web developer",
        idDocente : "455889",
    }
})

let cursoSolidity = new clasesCursos({
    nombreCurso : "Curso de solidity",
    docente : {
        nombre: "JuanDC",
        especialidad : "blockchain",
        idDocente: "525252",
    }
})

let cursoWeb3 = new clasesCursos({
    nombreCurso : "Cursod e web 3.0",
    docente : {
        nombre: "JuanDC",
        especialidad : "blockchain",
        idDocente : "525252"
    }
})

let progBasica = new clasesCursos({
    nombreCurso : "Curso de programacion basica",
    docente : {
        nombre : "Freddy Vega",
        especialidad : "Backend",
        idDocente : "123456"
    },
    free : true,
})

let problemasWeb = new clasesCursos({
    nombreCurso : "Curso de resolucion de problemas web",
    docente : {
        nombre : "freddy Vega",
        especialidad : "backend",
        idDocente : "123456"
    }
})


// en consecuencia encontramos que al instanciar la clase debemos hacer muchas repeticiones, asi que vamos a hacer otras dos clases, una para los   para las escuelas   ------ cursosAprobados (se va a derivar de la clase)

class escuelas {
    constructor({escuela,cursosDeLaEscuela,accesoBasic = true,accesoExpert = true,}){
        this.escuela = escuela;
        this.cursosDeLaEscuela = cursosDeLaEscuela;
        this.accesoBasic = accesoBasic;
        this.accesoExpert = accesoExpert;
    }
}

let escuelaJs = new escuelas({
    escuela: "Escuela de JavaScript",
    cursosDeLaEscuela: [
        cursoBasicoJs,
        practicoJs,
        progPOO,
    ]
});

let escuelaBlock = new escuelas({
    escuela: "Escuela de blockchain",
    cursosDeLaEscuela: [
        cursoSolidity,
        cursoWeb3,
    ]

});

let escuelaWeb = new escuelas({
    escuela: "Escuela de desarrollo web",
    cursosDeLaEscuela : [
        progBasica,
        problemasWeb,
    ]
});

let escuelaIngles = new escuelas({
    escuela : "Escuela de ingles",
    cursosDeLaEscuela: [
        "basico",
        "intermedio",
        "avanzado"
    ],
    accesoBasic: false,
})


// en consecuencia de los cursos, es conveniente hacer una clase de los curso en donde se incluya el docente de cada curso


// primer instancia de la clase

//let estudiante = new Student({
//    cursosAprobados : progBasica,
//})
//console.log(estudiante)



