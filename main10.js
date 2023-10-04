//Realiza un bucle tanto con FOR como con WHILE que impriman 10
//veces I ❤ code.

//for
for (let texto = 0; texto < 10; texto++){
    console.log("I ❤ code");
}

//while
let frase = 0;
while (frase < 10){
    console.log("I ❤ code")
    frase++;
}

//Define un array con las letras ‘a’, ‘b’, ‘c’, ‘d’ y ‘e’. Y,
//posteriormente, recorre cada uno de los elementos mediante a forEach.

const array = ['a', 'b', 'c', 'd', 'e'];
array.forEach(item => {
    console.log(item);
});

//Define una variable let numero = 5; que itere hasta que el valor sea 0.

let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}
//Analiza que hace el siguiente programa, explica lo que hace
//¿Cuántas iteraciones da? ¿Cuándo entrará en el if? ¿Y en el else?:
// Respuesta: el bucle se ejecutará 4 veces, hasta que la condición de que sea < 5 sea falsa.
//Respuesta: Entrará en If cuando se cumpla la condición de i === 0, solo la primera vez.
//Respuesta: En el else entrará en el resto de los casos en que i sea diferente a 0.

let numero = 1;
let i = 0;
do {
    if(i === 0){
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero < 5);