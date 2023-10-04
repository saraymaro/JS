//Crea una función pasa 3 números por parámetros súmalos y devuelve el resultado
//mediante a return. Finalmente muéstralos por pantalla.
function operacion(num1, num2, num3){
    const resultado = num1 + num2 + num3;
    return resultado;
}
const SUMA = operacion(5,10,20);
console.log("El total de la suma es: ", SUMA)

//Crea una función y escribe tu nombre completo en 3 parámetros: nombre,
//apellido1, apellido2 y concaténalos y finalmente muéstralos por pantalla
function nombreCompleto(nombre, apellido1, apellido2){
    const NOMBRE = nombre + " " + apellido1 + " " + apellido2;
    console.log(NOMBRE);
}
nombreCompleto("Saray", "Magallanes", "Rodriguez");

//Crea una función que acepte dos números y devuelva el número mayor
function numeros(num1, num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
}
const numMayor = numeros(5,9);
console.log("El número mayor es: ", numMayor);