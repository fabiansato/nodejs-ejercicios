/*
Desarrollar un sitio en Node.js que permita servir archivos estáticos y haga más eficiente su trabajo implementando un sistema de cache de los archivos del servidor.

Crearemos una nueva carpeta para este proyecto con el nombre de ejercicio11 y en la misma crearemos una subcarpeta llamada static que contendrá todos los archivos html, css, jpg, mp3, mp4 etc.
*/

const http=require('http');
const url=require('url');
const fs=require('fs');

const mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  :  'audio/mpeg3',
   'mp4'  : 'video/mp4'
};
/*Primero definimos un objeto vacío donde almacenaremos los nombres de los recursos y los contenidos de los mismos:*/

const cache={};

const servidor=http.createServer((pedido, respuesta) => {
    const objetourl = url.parse(pedido.url);
  let camino='static'+objetourl.pathname;
  if (camino=='static/')
    camino='static/index.html';
    /*
    Cuando se dispara un pedido de recurso y se ejecuta la función anónima que le pasamos 
    al método createServer procedemos mediante un if a verificar si el objeto cache almacena una propiedad que coincide con el camino del recurso:*/
  if (cache[camino]) {
    const vec = camino.split('.');
    const extension=vec[vec.length-1];
    const mimearchivo=mime[extension];
    respuesta.writeHead(200, {'Content-Type': mimearchivo});
    respuesta.write(cache[camino]);
    respuesta.end();
    console.log('Recurso recuperado del cache:'+camino);           
  } else {
    fs.stat(camino, error => {
      if (!error) {
          /*En un principio debemos tener en cuenta que la cache está vacía por lo que el if analizado anteriormente se verifica 
          falso por lo que se ejecuta el otro bloque donde verificamos que el recurso exista y procedemos a su lectura del disco:*/
        fs.readFile(camino, (error,contenido) => {
          if (error) {
            respuesta.writeHead(500, {'Content-Type': 'text/plain'});
            respuesta.write('Error interno');
            respuesta.end();          
          } else {
            cache[camino]=contenido;
            const vec = camino.split('.');
            const extension=vec[vec.length-1];
            const mimearchivo=mime[extension];
            respuesta.writeHead(200, {'Content-Type': mimearchivo});
            respuesta.write(contenido);
            respuesta.end();
            console.log('Recurso leido del disco:'+camino);
          }
        });
      } else {
        respuesta.writeHead(404, {'Content-Type': 'text/html'});
        respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');    
        respuesta.end();
      }
    });
  }
});

servidor.listen(8888);

console.log('Servidor web iniciado');