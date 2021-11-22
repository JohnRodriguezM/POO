// se desarrrolla la clase persona a cabalidad, menos la seccion de cursos aprobados

class persona
{
#nombre;
#apellido;
#correoElectronico;
#cursosAprobados;
    constructor({
        nombre,
        apellido,
        correoElectronico = "example145@tierrafeliz.com",
        deporteFavorito,
        cursosAprobados = [],
        facebook = undefined,
        twitter = undefined,
        instagram = undefined,  })
    {
        // espacio de propiedades del objeto
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#correoElectronico = correoElectronico;
        this.deporteFavorito = deporteFavorito;
        this.#cursosAprobados = cursosAprobados;
        this.redesSociales = {
        facebook,
        instagram,
        twitter
        }
        // espacio para metodos del objeto que se repitan, y deban estar presente si o si dentro del objeto
        // Los puse mejor como prototipos en el final de la clase y por fuera de la misma y del constructor, sin embargo se podrán seguir usando sin                  problema cuando se instancie la clase.
        //(no se uso como prototipo debido a la privacidad de algunas propiedad que establecí, así que ocuparan cierto espacio constante en memoria)
        this.validarNombre(nombre);
        this.validarApellido(apellido);
        this.validarCorreoE(correoElectronico);
        this.validarDeporte(deporteFavorito);

        // espacio para los metodos de validacion del objeto del objeto

    }
        // metodos con paramatros, para validaciones iniciales
        validarNombre(nombre){
            if(!nombre){
                return console.error("debes ingresar un nombre, por el momento está vacio")
            }
            if(typeof nombre !== "string"){
                    return console.error("El valor que ingresaste en nombre no es una cadena de texto")
                }
            return true;
        }

        // metodo para validacion de apellido
        validarApellido(apellido){
            if(!apellido){
                return console.error("debes ingresar un apellido, por el momento está vacio")
            }
            if(typeof apellido !== "string"){
                    return console.error("El valor que ingresaste en apellido no es una cadena de texto")
                }
            return true;
        }

        // metodo para validacion de correo electronico
        validarCorreoE(correoElectronico){
            if(!correoElectronico){
                    return console.error("El espacio del correo electronico se encuentra vacio, porfavor revisa")
                }
    if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correoElectronico)))
                    {
                    return console.error(`El correo electronico que ingresaste no es válido, revisa, aquí un ejemplo de correo válido:                    example456@tierraFeliz.com`)
                    }
        return true;
        }
        // metodo validacion de deporte favorito %%///
        validarDeporte(deporteFavorito){
            if(!deporteFavorito){
                    return console.log("¿No tienes deporte favorito?, no te preocupes e ignora este aviso")
                }
            if(typeof deporteFavorito !== "string"){
                    return console.log("El espacion de deporte solo admite una cadena de texto")
                }
        }
        // metodo para validacion de cursos
        validarCursos(cursosAprobados){
            if(!(cursosNuevos instanceof Array)){
                console.log("El valor(es) no fue ingresado en forma de array, por favor corrigelo")
            }
            for(let valor of cursosNuevos){
                if(valor !== "string"){
                    console.log("El valor(es) que ingresaste no son una cadena de texto")
                }
            }
            return true;
        }

        // metodos sin paramatros, no son necesarios nombrarlos arriba, como los que si reciben parametros//
        saludo(){
            console.log(`Mucho gusto, mi nombre completo es ${this.#nombre} ${this.#apellido}`)
        }
        // metodo de ficha técnica
        fichaTecnica(){

            if(this.redesSociales.facebook === undefined){
                console.log("El usuario no maneja la red social facebook")
            }
            else if(this.redesSociales.instagram === undefined){
                console.log("El usuario no maneja la red social instagram")
            }
            else if(this.redesSociales.twitter === undefined){
                console.log("El usuario no maneja la red social twitter")
            }
            console.log(`La ficha técnica del usuario es la siguiente:
            El nombre del usuario es: ${this.#nombre},
            El apellido del usuario es: ${this.#apellido},
            El correo electrónico del usuario es: ${this.#correoElectronico}
            El deporte favorito del usuario es: ${this.deporteFavorito}
            Las redes sociales del usuario son:
            Facebook : ${this.redesSociales.facebook}
            Instagram : ${this.redesSociales.instagram}
            Twitter : ${this.redesSociales.twitter}`)
        }

        //getters y setters dentrod del objeto, variables privadas
        // getter de la propiedad nombre /
        get getnombre()
        {
            return this.#nombre;
        }
        // setter de la propiedad nombre
        set setnombre(nuevoNombre){
            if(!nuevoNombre){
            return console.error("No has puesto un reemplazo para tu nombre, por favor revisa")
            }
            if(typeof nuevoNombre !== "string"){
                return console.error("El valor nuevo que ingresaste no corresponde a una cadena de texto")
            }
            this.#nombre = nuevoNombre;
            return alert(`Haz actualizado tu nombre y ahora es ${nuevoNombre}`)
        }

        // getter de la propiedad apellido del objeto
        get getapellido()
        {
            return this.#apellido;
        }
        // setter de la propiedad apellido del objeto
            set setapellido(nuevoApellido)
        {
            if(!nuevoApellido){
            return console.error("No has puesto un reemplazo para tu nombre, por favor revisa")
            }
            if(typeof nuevoApellido !== "string"){
                return console.error("El valor nuevo que ingresaste no corresponde a una cadena de texto")
            }
            this.#apellido = nuevoApellido;
            return alert(`Haz actualizado tu apellido y ahora es ${nuevoApellido}`)
        }
        // getter de la propiedad correo electrónico
        get getCorreo()
        {
            return this.#correoElectronico;
        }
        // setter de la propiedad correo elctrónico
        set setCorreo(nuevoCorreo)
        {
            // si bien es cierto que con la validacion de la expresion regular es mas que suficiente no sobra, las demas validaciones
            if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(nuevoCorreo))){
                return console.error(`El correo electronico ingresado no es válido,aquí te dejo un ejemplo: ${this.#correoElectronico}`)
            }
            if(!nuevoCorreo){
                return console.log("No has ingresado ningún nuevo correo electronico, porfavor, verifica")
            }
            if(typeof nuevoCorreo !== "string")
            {
                return console.log("El valor que has ingresado no es una cadena de texto")
            }

            this.#correoElectronico = nuevoCorreo;
            console.log(`El nuevo correo electrónico del usuario es: ${nuevoCorreo}`)
        }

        get getcursos(){
            return this.#cursosAprobados;
        }
        set setcursos(cursosNuevos){
            if(!(cursosNuevos instanceof Array)){
                console.log("El valor(es) no fue ingresado en forma de array, por favor corrigelo")
            }
            for(let valor of cursosNuevos){
                if(valor !== "string"){
                    console.log("El valor(es) que ingresaste no son una cadena de texto")
                }
            }
            this.#cursosAprobados = cursosNuevos;
            console.log(`Haz actualizado el paquete de curso, ahora los cursos son ${cursosNuevos}`)
        }


}
persona.prototype.instrucciones = function(){
    console.log(`Esta es una función de un par de instrucciones, como una seccion de apuntes del objeto:
                Las instancias del objeto van a estar creadas sobre el prototipo persona,
                a su vez, el objeto en si mismo, es un prototipo del prototipo object
                para acceder al nombre, ya que es privado accede con getname, apellido getapellido, correo con getCorreo
                    por otro lado, para cambiar el valor de los mismos hazlo con set`)

}

// este es un prototipo aparte, permite usar un metodo, de manera en la que no ocupe tanto espacio de memoria
// Mejor manejar de a prototipos --- maneja menos uso de memoria RAM (memoria momentánea)

////// dependiendo de las variables "privadas que defina no será posible usar estos prototipos por fuera de la clase, solo será posibles si la propiedad no es establecida como privada. ////

//  persona.prototype.saludo = function(){
//  console.log(`Mucho gusto mi nombre completo es ${this.nombre} ${this.apellido}`)
//  }
//
//  persona.prototype.fichaTecnica = function(){
//
//  console.log(`La ficha técnica del usuario es la siguiente:
//               El nombre del usuario es: ${this.nombre},
//               El apellido del usuario es: ${this.apellido},
//               El correo electrónico del usuario es: ${this.correoElectronico}
//               El deporte favorito del usuario es: ${this.deporteFavorito}
//               Las redes sociales del usuario son: ${this.socialMedia}`)
//
//
//}