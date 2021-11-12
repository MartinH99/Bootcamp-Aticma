/*1 -
    arr = [1, 3, 4, 2, 6, 7, 9, 1, 8]
Crear una función que indique el total de elementos impares de un array
output => 5*/


/*let arr = [1, 3, 4, 2, 6, 7, 9, 1, 8];
let cont = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        cont++;
    }
}

console.log("Hay " + cont + " numeros impares");*/


/*2 -
    str = "hola mundo desde javascript"
pasar un string en array, indicar los espacios en blanco por "-"
output => ["hola", "-", "mundo", "-", "desde", "-", "javascript"] */

/*let str = "hola mundo desde javascript";

function cambiarEspacios(str) {
    let string2 = str.replace(/ /g, ' - ').split(" ");
    return string2;
}

const a = cambiarEspacios(str);

console.log(a);*/



/*3 -
    Crear una variable que contenga el siguiente array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Definir una variable filtered que muestre los valores de los los numeros que son pares utilizando el método.filter()*/

/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.filter(arr => arr % 2 == 0);

console.log(result);*/

/*4 - Crear una variable que filtre los animales que no sean 'cat'
usar filter
const pets = ['cat', 'dog', 'elephant', 'hawk', 'snake', 'cat']*/


/*let pets = ['cat', 'dog', 'elephant', 'hawk', 'snake', 'cat'];

const result = pets.filter(pets => pets == 'cat');

console.log(result); */


/*5 - Crear una variable que muestre solo los nombres de los productos del siguiente array
hacerlo con.map
const productos = [
    { id: 2, nombre: 'Remera muy fachera', precio: 250 },
    { id: 5, nombre: 'Pantalon muy fachero', precio: 400 },
    { id: 6, nombre: 'Camperon invierno', precio: 699 },
    { id: 34, nombre: 'Guantes negros', precio: 199 },
];*/


/*const productos = [
    { id: 2, nombre: 'Remera muy fachera', precio: 250 },
    { id: 5, nombre: 'Pantalon muy fachero', precio: 400 },
    { id: 6, nombre: 'Camperon invierno', precio: 699 },
    { id: 34, nombre: 'Guantes negros', precio: 199 },
]

let nombreDeProducto = productos.map((product, index, array) => {
    return product.nombre;
})

console.log(nombreDeProducto); * /


/*6 - Usando el reduce retornar un solo array.pista: .concat
const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];*/

/*const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const reducir = (pasado, siguiente) => pasado.concat(siguiente);

console.log(data.reduce(reducir));*/