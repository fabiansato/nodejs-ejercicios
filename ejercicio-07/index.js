/*  requerimos el módulo 'http' y guardamos una referencia en la constante http:*/
const http=require('http');

/* La función createServer debemos enviarle una función anónima (o podemos implementar una función definida como vimos en el concepto anterior) con dos parámetros que los hemos llamado pedido y respuesta.
Los objetos pedido y respuesta los crea la misma función createServer y los pasa cuando se dispara el pedido de una página u otro recurso al servidor.*/
const servidor=http.createServer((pedido,respuesta) => {

  /*writeHead: es para indicar la cabecera de la petición HTTP (en esta caso indicamos con el código 200 
    que la petición fue Ok y con el segundo parámetro inicializamos la propiedad Content-Type indicando que retornaremos una corriente de datos de tipo HTML
  write: mediante la función write indicamos todos los datos propiamente dicho del recurso a devolver 
  al cliente (en este caso indicamos en la cabecera de la petición que se trataba de HTML)
  Como el string a devolver son dos líneas lo más común es utilizar plantilla de cadenas de caracteres con las comillas invertidas `
  end: finalmente llamando a la función end finalizamos la corriente 
  de datos del recurso (podemos llamar varias veces a la función write previo a llamar por única vez a end)*/
  respuesta.writeHead(200, {'Content-Type': 'text/html'});
  respuesta.write(`<!doctype html><html><head></head>
                   <body><h1>Sitio en desarrollo</h1></body></html>`);
  respuesta.end();
});

/*Otra cosa importante de notar de nuestro servidor web elemental es que no importa que archivo pidamos a nuestro servidor web siempre nos devolverá el código HTML que indicamos en la función anónima que le pasamos a 
createServer (en este ejemplo solicito el archivo pagina1.html, lo mismo sucedería si pido otras páginas: pagina2.html, pagina3.php etc.)*/

/* Igual que cuando vimos archivos de texto estamos utilizando programación asincrónica, 
la función createServer se ejecuta en forma asíncrona lo que significa que no se detiene, sino que sigue con la ejecución de la siguiente función:*/
servidor.listen(8888);

/* esto es lo que se mostrara en el terminal*/
console.log('Servidor web iniciado');


/* en "Pedido" Este objeto tiene muchos datos que llegan al servidor. Analizaremos la propiedad url de este objeto.

Se trata de un string con la ubicación exacta del recurso que pide el navegador al servidor, por ejemplo:

 http://localhost:8888/carpeta1/pagina1.html?parametro1=10¶metro2=20*/