/**
 * 3 - Realizar un script llamado Ejercicio3.js, que cree un array vacío, y luego generar N
números al azar y guardarlos en un array, N es introducido por el usuario a través de un
prompt.
 */

let arreglo = new Array();


var N = prompt('Ingrese un numero: ')

for(let i=0;i<N;i++){
    var num = parseInt(Math.random()*10);
    arreglo.push(num);
}

arreglo.forEach(element => {
    document.write(element + '<br>');
});