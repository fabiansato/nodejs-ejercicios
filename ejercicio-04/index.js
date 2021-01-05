/*
Como crear un módulo mínimo, como consumirlo a dicho módulo y también como consumir módulos que vienen por defecto en Node.js. 
*/
/*
Confeccionar un programa que requiera el módulo 'os' para recuperar el espacio libre de memoria. Mostrar inicialmente el epacio libre mediante el método freemem()
Luego crear un vector y mediante el método push almacenar 1000000 de enteros. Mostrar luego de la creación y carga del vector la cantidad de espacio libre.
*/

const os=require('os'); /* mujestra y guardaa dentro deu una constante os la funcion OS */

console.log('Memoria libre:'+os.freemem()); /* muestra por pantalla el metodo freemem de el valor de la variable os*/
const vec=[]; /* guiarda una constante vector vacia */
for(let f=0;f<1000000;f++) { /* un ciclo for con una variable f que llegua a 10000 y salta cada vuelta */
  vec.push(f); /* llama a la funcion vec y manda un push mostrando f*/
}	
console.log('Memoria libre después de crear el vector:'+os.freemem()); /* muestra de os el metodo freemem*/