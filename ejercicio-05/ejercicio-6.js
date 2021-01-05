/* otra forma de leer archivos*/
const fs=require('fs');

function leer(error,datos){
  if (error)
    console.log(error);
  else
    console.log(datos.toString());
}

fs.readFile('./archivo1.txt',leer);

console.log('última línea del programa');

/*No es obligatorio que la implementación de la función esté definida antes de llamar a readFile, podría estar implementada al final:
*/
const fs=require('fs');

fs.readFile('./archivo1.txt',leer);

console.log('última línea del programa');

function leer(error,datos){
    if (error)
      console.log(error);
    else
      console.log(datos.toString());
}
*/