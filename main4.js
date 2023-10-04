
//Crea una función arrow function que retorne tu nombre y tus apellidos e 
//imprímelos por pantalla desde fuera de la función.
const FICHA = (name, surname) => {
    console.log(name + ' ' + surname);
};
FICHA('Saray', 'Magallanes');

//Crea una función con nombre y sin return. Pásale un tipo de dato boolean y
//dentro de la función imprime el valor el valor que hemos pasado por los parámetros.
function imprimirBooleano(valor) {
    valor = true;
    console.log("El valor es: " + valor);
  }
  imprimirBooleano();

//Crea una función que reciba parámetros infinitos, haz la llamada con los valores
//1,2,3,4,5 y muestra dichos mediante un forEach.
function infinitos (...valores) {
    valores.forEach(function(valor) {
      console.log(valor);
    });
  }
  infinitos(1, 2, 3, 4, 5);
  