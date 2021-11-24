import { Student,clasesCursos,escuelas } from "./herencia.mjs";
import { escuelaJs,escuelaBlock,escuelaWeb,escuelaIngles } from "./herencia.mjs";
import { cursoBasicoJs,practicoJs,progPOO,progBasica,cursoSolidity,cursoWeb3,problemasWeb } from "./herencia.mjs";


class ExpertStudent extends Student{
    constructor(props,cursosConAcceso,escuelasConAcceso)
    {
        super(props)
        this.cursosConAcceso = cursosConAcceso;
        this.escuelasConAcceso = escuelasConAcceso;

        
        //this.ingresoAEscuela(clasesCursos);
        //this.aCursos(edad);
    }
    nuevaEscuela(nuevaEscuela){
        if(nuevaEscuela) {
            this.escuelas.push(nuevaEscuela)
            console.log(`Haz agregado a tu ruta de aprendizaje (${nuevaEscuela.escuela})`)
        }
    }
    nuevoCurso(nuevoCurso){
        if(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso)
            console.log(`Haz aprobado (${nuevoCurso.nombreCurso})`)
        }
    }
}

let expert1 = new ExpertStudent({
    name : "juanito",
    edad : 25,
    cursosAprobados : [progBasica],
    escuelas : [escuelaBlock,escuelaIngles],
    facebook : "juuui",
},
    "Acceso ilimitado a todos los cursos",
    "Acesso ilimitado a todas las escuelas",
)
console.log(expert1.nuevaEscuela(escuelaJs))
console.log(expert1)
console.log(expert1.nuevoCurso(practicoJs))
console.log(expert1)
//console.log(expert1.getfacebook)




class BasicEstudent extends Student{
    constructor(propiedades,cursosConAcceso,escuelasConAcceso){
        super(propiedades)
        this.cursosConAcceso = cursosConAcceso;
        this.escuelasConAcceso = escuelasConAcceso;
    }
    //metodo comprobacion uso basic plan
    accesoEscuela(nuevoEscuela){
        if(nuevoEscuela.accesoBasic){
            this.cursosAprobados.push(nuevoEscuela);
            console.log("felicidades, ingresaste a una nueva escuela")
        }
        else{
            console.log(`Lo sentimos, con la suscripcion basic, aún no puedes acceder a esta escuela`)
        }
    }
}

let basic1 = new BasicEstudent({
    name : "pepe",
    edad: 22,
    escuelas : escuelaBlock,
},"debe exceptuarse cursos de ingles", "debe exceptuarse escuela de ingles")
console.log(basic1.accesoEscuela(escuelaIngles))
console.log(basic1)


/// correr codigo por aparte para no confundir reaccion
class EstudianteFree extends Student{
    constructor(propiedades,

        cursosConAcceso,escuelasConAcceso){
        super(propiedades)
        this.cursosConAcceso = cursosConAcceso;
        this.escuelasConAcceso = escuelasConAcceso;
        
        this.accesoACurso(escuelas);
    }
    
    //
    accesoACurso(escuelas){
        if(escuelas !== undefined){
            console.log("No puedes acceder a ninguna de estas escuelas, solo puedes acceder a cursos abiertos, porfavor corrige")
        }
    }
    
    
    accesoACurso(nuevoCurso){
        if(nuevoCurso.free){
            this.cursosAprobados.push(nuevoCurso)
            return console.log("felicidades, tienes un nuevo curso aprobado")
        }else{
            console.log("tu curso no es gratis, no tienes acceso")
        }
    }
}

let estudianteFree1 = new EstudianteFree({
    name : "john",
    edad: 20,
    escuelas: escuelaBlock,
},
    progBasica, 0
    )
            
    
    // estudiantes free
            //console.log(estudianteFree1)
            //console.log(estudianteFree1.accesoACurso(progBasica))
            //
            //console.log(estudianteFree1)