var http=require('http');
var url=require('url');
var fs=require('fs');
/*
Primero definimos un objeto literal asociando las distintas extensiones de archivos y su valor MIME:
https://www.sitepoint.com/mime-types-complete-list/
*/
var mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  :	'audio/mpeg3',
   'mp4'  : 'video/mp4'
};


var servidor=http.createServer(function(pedido,respuesta){
    var objetourl = url.parse(pedido.url);
	var camino='static'+objetourl.pathname;
	if (camino=='static/')
		camino='static/index.html';
	fs.exists(camino,function(existe){
	    if (existe) {
		    fs.readFile(camino,function(error,contenido){
				if (error) {
			        respuesta.writeHead(500, {'Content-Type': 'text/plain'});
				    respuesta.write('Error interno');
				    respuesta.end();					
				} else {
					/*Todo el resto del código es idéntico al concepto anterior salvo cuando tenemos que retornar el recurso que solicita el navegador:*/
					var vec = camino.split('.');
					/*Sacamos el último elemento del vector que en definitiva almacena la extensión del archivo:*/
					var extension=vec[vec.length-1];
					/*Seguidamente rescatamos la propiedad del objeto literal mime:*/
					var mimearchivo=mime[extension];

					/*Por ejemplo si tenemos en la variable extension el valor 'html' luego en la variable mimearchivo se almacena: 
					'text/html' que es el valor para dicha propiedad definida en la variable mime.
					Ahora llamamos al métdodo writeHead donde retornamos el tipo MIME para dicha extensión:
					*/
			        respuesta.writeHead(200, {'Content-Type': mimearchivo});
				    respuesta.write(contenido);
				    respuesta.end();
				}
			});
		} else {
            respuesta.writeHead(404, {'Content-Type': 'text/html'});
            respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');		
			respuesta.end();
		}
	});
});

servidor.listen(8888);

console.log('Servidor web iniciado');