//A partir de la siguiente instrucción que genera un número aleatorio
//console.log(Math.round(Math.random())); que genera un número aleatorio 0 o 1.
//Haz una función con return, invocala y muestra por consola cara si el valor es 1 y
//cruz si el valor es 0.
function caraCruz(){
    const numAleatorio = Math.round(Math.random())
if (numAleatorio == 1){
    return "cara";
} else {
    return "cruz";
}
}
const RESULTADO = caraCruz();
console.log(RESULTADO)