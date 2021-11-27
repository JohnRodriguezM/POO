// el polimorfismo nos permite cambiar el comportamineto de metodos y atributos heredados

// en js por ahora solo hay polimorfismo de inclusion 



class Comentario{
    constructor({name,comment,studentRole = "Estudiante"}){
        this.name = name;
        this.comment = comment;
        this.studentRole = studentRole;
        // se puede crear un "atributo" sin nombrarlo
        this.likes = 0;
    }
    publicarComentario(){
        console.log("se ha publicado un nuevo comentario")
        console.log(`${this.name}, (${this.studentRole}) ha publicado: ${this.comment} ---- en este momento tiene ${this.likes} likes`)
    }
}


class Student{
    constructor({name,edad,tipoDeSuscripcion = undefined, role }){
        this.name = name;
        this.edad = edad;
        this.tipoDeSuscripcion = tipoDeSuscripcion;
        this.role = role;
        
    }
    comentario(comment){
    const comentario = new Comentario({
        comment : comment,
        name : this.name,
    });
    comentario.publicarComentario()
    }
}


class TeacherStudent extends Student{
    constructor(propSt,especialidad){
        super(propSt)
        this.especialidad = especialidad;
    }
    comentario(comment){
        const comentario = new Comentario({
            comment : comment,
            name : this.name,
            studentRole : "maestro" //sobreescribí este atributi, por defecto lo tenía como estudiante,asi que de esto mas o menos se trata el polimorfismo
        });
        comentario.publicarComentario()
        }
}

let teacher1 = new TeacherStudent({
    name : "Freddy",
    especialidad : "frontend",
    role : "maestro",
})

console.log(teacher1.comentario("Felicidades por haber aprobado el curso, nunca paren de aprender"))


/////
class Student{
    constructor({name,edad,tipoDeSuscripcion = "Free"}){
        this.name = name;
        this.edad = edad;
        this.tipoDeSuscripcion = tipoDeSuscripcion;
    }
    tarjetaPresentacion(){
        console.log("Hola");
        console.log(`Mi nombre es ${this.name}, tengo ${this.edad} y mi tipo de suscripcion es ${this.tipoDeSuscripcion}`)
    }
}

let estudiante = new Student({
    name: "john",
    edad: 20,
})
console.log(estudiante.tarjetaPresentacion())

class StudenteBasic extends Student{
    constructor(propSt,comentario){
        super(propSt);
        this.comentario = comentario;
    }
    presentacion(){
        const estudianteInterno = new Student({
            name: this.name,
            edad: this.edad,
            tipoDeSuscripcion : "Basic",
        })
        estudianteInterno.tarjetaPresentacion()
    }
}

let basico1 = new StudenteBasic({
    name: "joun",
    edad: 20,
})

console.log(basico1.super.presentacion())