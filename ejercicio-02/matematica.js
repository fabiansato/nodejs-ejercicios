const PI=3.14; /* se declara la constante PI y se guarda el valor*/

function sumar(x1,x2) /* toma dos parametros y los guarda como x1 y x2*/
{
  return x1+x2;/* devuelve la funcion*/
}
 
function restar(x1,x2)
{
  return x1-x2;
}
 
function dividir(x1,x2)
{
  if (x2==0) /* si la funcion encuentra que x2 es igual a scero entonces*/
  {
    mostrarErrorDivision(); /* llama a la funcion mostrarErrordivision*/
  }
  else
  {
    return x1/x2; /* sino muestra la division de x1 y x2*/
  }
}
 
function mostrarErrorDivision() {
  console.log('No se puede dividir por cero BRO');
}
 
exports.sumar=sumar;
exports.restar=restar;
exports.dividir=dividir;
exports.PI=PI; 