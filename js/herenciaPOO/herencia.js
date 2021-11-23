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
    constructor(cursosConAcceso,cursosSinAcceso){
        this.cursosConAcceso = cursosConAcceso;
        this.cursosSinAcceso = cursosSinAcceso;
    }
}


*/

//https://developer.mozilla.org/en-US/docs/Web///JavaScript/Inheritance_and_the_prototype_chain