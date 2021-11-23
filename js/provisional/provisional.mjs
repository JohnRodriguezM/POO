const miVideoStart = (id) => {
    const urlSecreta = "https://videosparamorirtedelarisa.com/";
    console.log(`La url de tu video es ${urlSecreta} y el id de tu video es ${id} y se acaba de reprodcir`)
}

const miVideoStop = (id) => {
    const urlSecreta = "https://videosparamorirtedelarisa.com/";
    console.log(`La url de tu video es ${urlSecreta} y el id de tu video es ${id} y se acaba de pausar`)
}

export class videosClases
{
    #classId;
    constructor({name,classId})
    {
        this.name = name;
        this.#classId = classId;
    }
    // metodos de la funcion para reproducir y copiar el video
    reproducir(){
        return console.log(miVideoStart(this.#classId))
    }
    pausar(){
        return console.log(miVideoStop(this.#classId));
    }
    // getter y setter class Id
    get getClassId(){
        return this.#classId;
    }
    //setter classId
    set setclassId(nuevoId){
        this.#classId = nuevoId;
    }
}

videosClases.prototype.saludo = function()
{
    return console.log("hola a todos")
}
