/**
 * 2 - Realizar un script llamado Ejercicio2.js, que dado el array [1,2,3,4,5,7] realice una copia
del array sumándole 1 a cada uno de los valores.
 */

 /* Aplicando ES6 y la funcion MAP*/

 var numbers = [1, 5, 10, 15];
 var copy = numbers.map(function(x) {
    return x+1;
 });

 console.log(copy);

 /*Forma tradicional de codigo*/

const miArreglo = [1,2,3,4,5,7]

console.log('Arreglo original: ')

for(let j=0;j<miArreglo.length;j++){
    
    console.log(miArreglo[j])
}

console.log('Arreglo sumado: ')

for(let i=0;i<miArreglo.length;i++){
    
    console.log(miArreglo[i]+1)
}
