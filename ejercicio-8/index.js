const http=require('http');
/*En la función anónima llamamos al método parse del objeto 'url' y le pasamos como parámetro la propiedad url del objeto pedido que llega a la función:
onst objetourl = url.parse(pedido.url);
*/


const url=require('url');
/*ponemos en el navegador:
 http://localhost:8888/carpeta1/pagina1.html?parametro1=10¶metro2=20*/
const servidor=http.createServer((pedido,respuesta) => {
  const objetourl = url.parse(pedido.url);
  console.log('camino completo del recurso y parametros:'+objetourl.path);
  console.log('solo el camino y nombre del recurso     :'+objetourl.pathname)
  console.log('parametros del recurso                  :'+objetourl.query)
  respuesta.writeHead(200, {'Content-Type': 'text/html'});
  respuesta.write('<!doctype html><html><head></head><body>Hola mundo</body></html>');
  respuesta.end();
});

servidor.listen(8888);

console.log('Servidor web iniciado');