//Crea una función en la que pasándole un string como parámetro
//se substituyan las letras A por las O.
function sustituirLetras(palabra){
    const texto = palabra.split('').map(char => {;
    if (char === 'a'){
        return 'O';
    }else{
        return char;
    }
    }).join('');
    return texto;
}
const nuevoTexto = "Murcielago";
const texto =sustituirLetras(nuevoTexto)
console.log(texto)

//Crea una función que compruebe si un string pasado como
//parámetro empieza por ‘aca’ y llama dos veces a la función una con
//academia y otra con escuela.
function prueba(texto){
    if (texto.startsWith('Aca')){
        return texto;
    } else {
        return "error";
    }
}

const PRUEBA1 = prueba("Academia");
console.log(PRUEBA1);

const PRUEBA2 = prueba("Escuela");
console.log(PRUEBA2);

//Crea una función que pasándole un Hola nos salude 3 veces
//utilizando métodos de Strings.
function prueba(texto){
    if(texto == "Hola"){
        return texto.repeat(3);
    }else{
        return texto;
    }
}

const PRUEBA3 = prueba("Hola");
console.log(PRUEBA1);

const PRUEBA4 = prueba("Adiós")
console.log(PRUEBA2)
