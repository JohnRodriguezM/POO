export { clases };


class clases
{
    #paquete
    constructor(paquete)
    {
        this.#paquete = paquete;
    }
    get getpaquete(){
        return this.#paquete;
    }
}
//let clase1 = new clases("clase de desarrollo");
//let clase2 = new clases("Clase de buen uso de tiempo")
export const paqueteClases = [
    new clases("clase de desarrollo"),
    new clases("Clase de buen uso de tiempo"),
    new clases("Clase no relacional"),
    new clases("Nuevas herramientas de ES6"),
    new clases("Las futuras herramientas que nos esperan en JS"),
    new clases("Leve introducción a POO"),
    new clases("Despedida del curso"),
    new clases("Crea tu primer proyecto con js"),
    new clases("Solucionando casos de la vida real con JS"),
    new clases("¿Que es git y cómo usarlo?"),
    new clases("¿como desarrollar proyectos reales con git?"),
    new clases("¿por que es necesaria la tecnologia en las empresas?")
]

