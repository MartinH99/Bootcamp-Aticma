/* Ejercicio Nº1
Escribe una función que sume que calcule la suma de dígitos de un número entero es decir la suma de todos sus dígitos.
Ejemplo: suma de dígitos (192) debería devolver 12 (1+9+2)
*/

/*var x = "192";
var y = 0;
x.split('').forEach(x => y += parseInt(x));

console.log(y);*/


/* Ejercicio Nº2
Escriba una función que tome un string con una suma y devuelva su resultado como un número.
Deben sumarse dos números naturales(numeros enteros). La tarea de suma es una cadena de la forma '102 + 17'.
*/

/*function sumarString(o) {
    let l = o.split("+").map(o => +o),
        n = 0;
    for (let o = 0; o < l.length; o++) n += l[o];
    return n
}
console.log(sumarString("102 + 17"));*/

/* Ejercicio Nº3
Escribir una función que genere un numero random y pregunte por prompt "Adivina un numero del 1 al 10"
hasta que acierte y muestre "Adivinaste el numero"*/

/*function adivinar() {
    let num = Math.random() * 10;
    num = Math.round(num);

    let x = prompt("Adivine el numero del 1 al 10: ");
    while (x != num) {

        if (x != num)
            x = prompt("Segui participando");
    }

    prompt("Adivinaste");
}

adivinar();*/