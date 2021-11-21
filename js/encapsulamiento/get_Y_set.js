// hay lenguajes de programacion que nos permiten definir variables publicas y privadas

// los get y set funcionan como propiedades de un objetos a pesar de tener sintaxis de metodo en JS

class humano{
    #name // DESDE ACA SE ME PERMITE CREAR MI "VAR" O PROPIEDAD PRIVADA QUE SOLO PUEDO MODIFICAR A TRAVES DE GET O SET, EL # IS THE NEW STANDAR
    constructor({name,age}){
        this.#name = name; // le pongo el guión bajo para simular una variable privada, de esta manera el equipo de progracion no deberia llamarlo asi por fuera del objeto
        // y si quieren modificarlo de alguna manera deberian hacerlo a traves del get y el set
        this.age = age;
    }
    get getname(){
        return this.#name; // el get (DA)
    }
    // si bien el get tiene sintaxis de metodo, en realidad funciona como un atributo, que puede ser llamado sin necesidad de instanciar la clase en este caso la clase humano.
    set setname(nuevoNombre){ // el set sirve para cambiar
        if(typeof nuevoNombre !== "string"){
            return console.log("Tu nuevo nombre no es una cadena de texto, porfavor corregir")
        }else{
            console.log(`Haz actualizado tu nombre y ahora es ${this.#name = nuevoNombre}`)
        }
    }
}

let humano1 = new humano({
    name: "John",
    age: 55,
});
console.log(humano1)
console.log(humano1.getname) // se llama el get, como si fuera una propiedad

console.log(humano1.setname = "pepe") // con el set hago una modificacion, pero de manera mas privada, ya que me permite validar ciertas cosas antes que la modificacion sea hecha