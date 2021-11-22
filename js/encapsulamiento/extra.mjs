//let nombre = "john"
//let apellido = "rodriguez"
//
//let nombreCompleto = `Mi nombre completo es ${nombre} $//{apellido}`;
//console.log(nombreCompleto);
//
//const baseDatos = () => {
//    let nombres = [];
//    const almacenNombres = nombrePersona => {
//        nombres += nombrePersona;
//        console.log(nombres);
//    }
//    return almacenNombres;
//}
//
//const base = baseDatos();
//
//base("Mi nombre es John Jairo")
//base("Mi nombre es Andres Mendez")

// va acumulando la lista de nombres

//funcion de comparacion entre dos numeros
//const miFuncion = (numero1,numero2) => {
//    if(numero1 > numero2) return console.log(`El //numero mayor de estos dos es ${numero1} y la //diferencia respecto a estos es de ${numero1 - //numero2}`);
//    else if(numero2 > numero1) return console.log(`El //numero mayor de estos dos es ${numero2} y la //diferencia respecto a estos es de ${numero2 - //numero1}`)
//    else{
//        console.log("Tu números tienen el mismo valor")
//    }
//}
//
//miFuncion(50,400)

// compara el animal

//const animal = animal => {
//    let animalFav = "tortuga";
//    animal.toLowerCase() === animalFav ? console.log//("Tambien me gustan las tortugas, gran elección") //: console.log("Ese animal es genial pero prefiero //las tortugas");
//}
//
//animal("TORTUGA")

//const comparacion = (numero1,comparador,numero2) => {
//    if(comparador >  numero1 && comparador < numero2)
//        {
//            return console.log("El numero de en medio //esta en el rango de los dos numeros //limites")
//        }
//        else if(comparador < numero1 && comparador > //numero2){
//            return console.log("El numero de en medio //esta en el rango de los dos numeros //limites")
//        }
//        else if(comparador > numero1 && comparador > //numero2){
//            console.log("El valor no se encuentra //dentro de los limites establecidos, es //superior a los mismos")
//        }
//        else if(comparador < numero1 && comparador < //numero2){
//            console.log("El valor no se encuentra //dentro de los limites establecidos, es //inferior a los mismos")
//        }
//}
//
//comparacion(60,50,20)


// funcion pregunta sobre el clima

//const preguntaClima = () => 
//{
//    let pregunta1 = prompt("¿Está lloviendo?")
//    if(pregunta1 === "si")
//    {
//        let pregunta2 = prompt("¿Esta haciendo mucho //viento?");
//            if(pregunta2 === "si")
//            {
//                alert("Hace demasiado viento para //salir con una sombrilla, mejor usa una //chaqueta o un traje para lluvia")
//            }
//            else
//            {
//                alert("Deberias llevar una sombrilla //si esta lloviendo")
//            }
//    }
//            else
//            {
//            alert("ten un lindo dia")
//            }
//}

// comprobador de edad

//const edadPermitida = edad => {
//    if(edad < 18){
//        return console.log("¿Sabes a hacia donde //dirigir tu futuro?. Seguro puedo ayudarte")
//    }
//    else if(edad >= 18 && edad < 30){
//        return console.log("Es un excelente momento //para impulsar tu carrera.")
//    }
//    else if(edad >= 30){
//        return console.log("Nunca es tarde para //aprender. ¿Que curso tomaremos?")
//    }
//}
//
//edadPermitida(50)

//const mensajesOpciones = (numero) => {
//    let mensajes = [
//        "Hoy aprenderemos sobre programación",
//        "¿Que tal tomar un curso de marketing digital?//","Hoy es un gran día para empezar a aprender //diseño",
//        "¿Y si aprendemos de negocios online?",
//        "Veamos un par de clases sobre producción //audiovisual",
//        "Tal vez sea bueno desarrollar una habilidad //blanda en platzi",
//    ]
//    if(numero === 1){
//        return console.log(mensajes[0])
//    }
//    else if(numero === 2){
//        return console.log(mensajes[1])
//    }
//    else if(numero === 3){
//        return console.log(mensajes[2])
//    }
//    else if(numero === 4){
//        return console.log(mensajes[3])
//    }
//    else if(numero === 5){
//        return console.log(mensajes[4])
//    }
//    else if(numero === 6){
//        return console.log(mensajes[5])
//    }
//}
//
//mensajesOpciones(1)