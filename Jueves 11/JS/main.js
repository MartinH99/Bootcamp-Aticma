/*1 -
    str = "origin"
cambiar las vocales por el numero 1
output => 1 r1g1n*/

/*let str = "origin";

function cambiarVocales(str) {
    let resultado = str.replace(/[aeiou]/g, '1')
    return resultado
}

const a = cambiarVocales(str);
console.log(a);*/

/*2 -
    Crear una función que acepte un parámetro con los valores desde 1 hasta 5
si valor numérico ingresado es 1 mostrar una lista del 1 al 10, si es 2 mostrar del 2 al 10,
teniendo en cuenta el limite es 10
posibles salidas esperadas:
    output => 1...10
output => 2...10
output => 3...10
output => 4...10
output => 5...10*/


let num = 6;

function contarHasta10(num) {
    if (num > 0 && num < 6) {
        while (num <= 10) {
            console.log(num);
            num++;
        }
    } else {
        console.log(num + " es un numero no valido.");
    }
}

contarHasta10(num);

/*3 -
    arr = [10, "20", 30, "40", 50]
verificar cada elemento sea de tipo number y sino lo es cambiar su tipo
a number
output => [10, 20, 30, 40, 50]*/

/*let arr = [10, "20", 30, "40", 50];

function verificarTipo() {
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) != Number)
            arr[i] = Number(arr[i]);
    }
    console.log(arr)
}

verificarTipo();*/

/*4 -
    arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
eliminar los elementos repetidos, nota: (el segundo elemento repetido)
output => [2, 4, 7, 1, "foo", "bar", "qux", 3]*/

/*let arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];

const result = [];

const array2 = arr.filter(function(i, pos) {
    return arr.indexOf(i) == pos;
})

console.log("Nuevo array sin repetidos: ", array2); */