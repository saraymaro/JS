//A partir de la pizza sustiturs todos los elemento del array por cervezas.
const array = ['🍔', '🌯', '🍣', '🍕', '🍜', '🍞', '🍙', '🍘', '🥑'];
// const firstPizza = array.findIndex(item => item =='🍕');
console.log(array.fill('🍺', array.findIndex(item => item =='🍕')));


//Encontrar si existe un elemento en el array que sea una piña.
const arr = ['🍕', '🍕', '🍍', '🍕', '🍕'];
console.log(arr.some(element => element == '🍍'));

//Quita la piña del siguiente array.

const ar = ['🍕', '🍕', '🍍', '🍕', '🍕']
console.log(ar.filter(element => element == '🍕'));

//A partir del siguiente array, convierte todas las fresas en setas.
const array2 = ['🍓', '🍋', '🍓', '🍋', '🍓'];
console.log(array2.map(element => (element == '🍓' ? '🍄' : element)));

// Añade un hot inmediatamente después de cada guindilla en el siguiente array.
const array3 = ['🌶', '🥛', '🌶', '🥛', '🌶', '🥛'];
const arrayhot = array3.map(element => {
    // if (element == '🌶'){
    //     return [element, '🥵'];
    // } else {
    //     return element;
    // }
    return (element == '🌶')?[element, '🥵']:element;
}).flat();
console.log(arrayhot);

// Añade una carta comodín 🃏 entre medio de dos cartas normales 🎴.

const array4 = ['🎴', '🎴', '🎴', '🃏', '🎴', '🎴', '🎴'];
const arrayJoker = [];

for (let i = 0; i < array4.length; i++) {
  arrayJoker.push(array4[i]);
  if (i < array4.length - 1 && array4[i] === '🎴' && array4[i + 1] === '🎴') {
    arrayJoker.push('🃏'); // Agregar carta Joker
  }
}
console.log(arrayJoker);









