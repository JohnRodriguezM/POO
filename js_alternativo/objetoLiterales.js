// objeto literal

const sara = {
name: "sara",
edad: 13,
cursosAprobados: [
    'grado primero '
],
saludo(){
    console.log(`hola mi nombre es ${this.name} y tengo ${this.edad}`)
},
}

console.log(sara)

sara.name = "sara camila";
sara.cursosAprobados.push('grado segundo');
sara.saludo()
console.log(sara)

class student{
    constructor(nombre,...cursosAprobados){
        this.nombre = nombre;
        this.cursosAprobados = cursosAprobados;

        //metodos
        this.confirmacion(nombre);
        // ej de los que no hay que llamar
        //this.saludo();
    }
    // cuando son metodos a los que no se les pasa el parametro no es necesario llamarlos con this 
    saludo(){
        console.log(`mi nombre es ${this.nombre} y mis cursos aprobados son ${this.cursosAprobados}`)
    }
    confirmacion(nombre){
        if(nombre.length > 10){
            console.log("tu nombre es demasiado largo")
        }
    }
}

const estudiante1 = new student("juansss","curso de js", "curso de html", "curso de css")

console.log(estudiante1)