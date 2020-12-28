/* Lo primero que hacemos es requerir los módulos 'http', 'url' y 'fs' que hemos analizado en conceptos anteriores:*/
const http=require('http');
const url=require('url');
const fs=require('fs');

/*Procedemos a crear un servidor de peticiones HTTP, tema ya visto:*/
const servidor=http.createServer( (pedido,respuesta) => {
  /*En la función anónima llamamos al método parse del objeto 'url' y le pasamos como parámetro la propiedad url del objeto pedido que llega a la función: */
  const objetourl = url.parse(pedido.url);
  /*Inicializamos una variable con el nombre de la subcarpeta que contiene los archivos HTML y le concatenamos el camino y nombre del archivo HTML solicitado:*/
  /* Por ejemplo podrían ser:

  static/
  static/index.html
  static/pagina1.html
  static/pagina2.html
También podrían ser peticiones de páginas que no existen, por ejemplo:

  static/pagina5.html
  static/carpeta1/pagina1.html
  etc.*/
  let camino='static'+objetourl.pathname;

    /*El primer control que hacemos es verificar si en la url no viene ninguna página, en dicho caso retornamos el archivo index.html que es el principal del sitio, para verificar hacemos un if:*/
     if (camino=='static/')
    camino='static/index.html';
    /*Mediante el objeto fs procedemos a verificar si existe el archivo HTML, el método stat tiene como primer parámetro 
    el nombre del archivo que debemos indicarlo con todo el camino y el segundo parámetro es una función anónima que llega 
    como parámetro si hubo o no un error con la existencia del archivo:*/

  fs.stat(camino, error => {
   if (!error) {
      fs.readFile(camino, (error,contenido) => {
        if (error) {
          /*Veamos que sucede si el if se verifica verdadero, es decir si existe el archivo HTML:*/
          respuesta.writeHead(500, {'Content-Type': 'text/plain'});
          respuesta.write('Error interno');
          respuesta.end();					
        } else {
          respuesta.writeHead(200, {'Content-Type': 'text/html'});
          respuesta.write(contenido);
          respuesta.end();
        }
      });
    } else {
      /*Veamos primero si no existe el archivo, en dicho caso se ejecuta el else del if y
       procedemos a devolver al navegador un mensaje y el código 404 de recurso inexistente (el parámetro error llega un null si no existe el archivo):*/
      respuesta.writeHead(404, {'Content-Type': 'text/html'});
      respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');		
      respuesta.end();
    }
  });
});

servidor.listen(8888);

console.log('Servidor web iniciado');