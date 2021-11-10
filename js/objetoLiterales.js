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
    }
}

const estudiante1 = new student("juan","curso de js", "curso de html", "curso de css")

console.log(estudiante1)