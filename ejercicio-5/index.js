const fs=require('fs'); /* toma el modulo de lectgura de programa */

fs.writeFile('./archivo1.txt', 'línea 1\nLínea 2', error => { /*llama al modulo fs y al metodo wirte file, le agrega un el nombre del archivbo y las lienas y llama al error si existe*/
  if (error)
    console.log(error);
  else
    console.log('El archivo fue creado');
});

console.log('última línea del programa'); /* La programación asincrónica podemos ver que sucede al mostrar el mensaje 'última línea del programa' antes de informarnos que el archivo fue creado*/