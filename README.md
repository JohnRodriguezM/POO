# POO
# MÓDULOS EN ECMA SCRIPT 6+

# METODOS IMPORT Y EXPORT

1. script src = "archivo.js" type = "module";

"los módulos siempre se importan o exportan en 'use strict' "

maneras:

- export default, solo se puede hacer un export por default por módulo

export { nombreDelElemento }

export let nombre = "john";

export class persona {
    constructor(){

    }
}

# IMPORTS

se maneja igual que los export

import { export } from "module-name";

import { export as alias } from "module-name";

import { export1, export2 } from "module-name";

import "module-name";  --- 'importa el modulo completo'