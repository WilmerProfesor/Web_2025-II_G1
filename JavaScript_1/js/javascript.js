// ================= SALIDAS =================
// alert("Hola mundo");
console.log("Hola mundo DESDE LA CONSOLA");

// ================= ENTRADA =================
//let i= prompt("Ingrese su nombre");
//console.log(i);

// ================= VARIABLES =================
let nombre = "Wilmer Arley"; // String
let edad = 20; // Number
let isStudent = true; // Boolean

console.log(nombre);
console.log(edad);
console.log(isStudent);

// ================= TIPOS DE DATOS =================
let apellido = "Patino"; // String
let altura = 1.75; // Number (Decimal)
let isMarried = false; // Boolean
let dato=5;
let dato2="5";

console.log(typeof apellido);
console.log(typeof altura);
console.log(typeof isMarried);
console.log(dato == dato2); // == compara solo el valor
console.log(dato === dato2); // === compara valor y tipo
console.log(dato === Number(dato2)); // === compara valor y tipo usando Casting

// ================= OPERADORES ARITMÉTICOS =================
let a = 9;
let b = 5;

console.log("Suma: " + (a + b));
console.log("Resta: " + (a - b));
console.log("Multiplicación: " + (a * b));
console.log("División: " + (a / b));
console.log("Módulo: " + (a % b));

if (dato > dato2) {
    console.log("dato es mayor que dato2");
} else {
    console.log("dato no es mayor que dato2");
}

const x=[];
const y=[1,2,3];
console.log(y);
const arreglo=[4,"kjchsdk",true,[3,4,5],{id:123,nombre:"Wilmer"}];
console.log(arreglo);
arreglo.splice(1,2);
console.log(arreglo);

