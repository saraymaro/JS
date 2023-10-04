//esto es scope global
const NOMBRE = "Saray";
var edad = 27;
let apellido = "Magallanes"

console.log(NOMBRE);
console.log(apellido);
console.log(edad);

console.log(typeof (NOMBRE));
console.log(typeof(apellido));
console.log(typeof(edad));


//Esto es scope local.
function prueba(){
    var edad = 27;
    console.log(edad >= 18);
}
prueba();