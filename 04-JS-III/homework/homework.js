// No cambies los nombres de las funciones.

function devolverPrimerElemento(array = ['a', 'e', 'i', 'o', 'u']) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];

}


function devolverUltimoElemento(array= ['a', 'e', 'i', 'o', 'u']) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array = ['a', 'e', 'i', 'o', 'u']) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array = [1, 2, 3, 4, 5]) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i = 0; i<array.length; i++){
    array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array = ['a', 'e', 'i', 'o', 'u'], elemento = 5) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array = ['a', 'e', 'i', 'o', 'u'], elemento = 5) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras = ['Hola', 'como', 'estas?']) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase = '';
  for(let i = 0; i<palabras.length; i++){
    if(i === palabras.length-1) {
      frase = frase + palabras[i]; 
      break;}
    frase = frase + palabras[i] + ' ';
  }
  return frase;
}


function arrayContiene(array = ['a', 'e', 'i', 'o', 'u'], elemento = 'o') {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0; i<array.length; i++){
    if(array[i] === elemento) return true;
  }
  return false;
}


function agregarNumeros(numeros = [1, 2, 3, 4, 5]) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma = 0;
  for(let i = 0; i<numeros.length; i++){
    suma += numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest = [8, 7, 5, 10]) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for(var i = 0; i<resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  }
  return suma/resultadosTest.length;
}


function numeroMasGrande(numeros = [5, 8, 10, 7, -10, 7, 9]) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let grande = numeros[0];
  for(var i = 1; i<numeros.length; i++){
    if(numeros[i]>grande) grande = numeros[i];
  }
  return grande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let value = 1;
  if(arguments[0] == undefined) return 0;
  for(var i = 0; i<arguments.length; i++){
    value = value*arguments[i];
  }
  return value;
}


function cuentoElementos(arreglo = [20, 76, 12, 34, 15, 19, 10, 44]){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let value = 0;
  for(var i = 0; i<arreglo.length; i++){
    if(arreglo[i]>18) value++;
  }
  return value;
}


function diaDeLaSemana(numeroDeDia = 4) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia>1 && numeroDeDia<6) return "Es dia Laboral"
  return "Es fin de semana";
} 


function empiezaConNueve(n = 9354) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let number = 0;
  while(true){
    if((n/Math.pow(10, number))<10) break;
    number++;
  }
  first_digit = n/Math.pow(10, number);
  if(Math.floor(first_digit) == 9) return true;
  return false;
}


function todosIguales(arreglo = [5, 5, '5', 5]) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(var i=1; i<arreglo.length; i++){
    if(arreglo[i]!==arreglo[i-1]) return false;
  }
  return true;
} 


function mesesDelAño(array = ['Enero', 'Junio', 'Mayo', 'Marzo', 'Diciembre', 'Noviembre']) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let n_array = [];
  for(var i=0; i<array.length; i++){
    if(array[i]=='Enero' || array[i]=='Marzo' || array[i]=='Noviembre')  n_array.push(array[i]);
  }
  if(n_array.length==3){
    return n_array;
  }
  return "No se encontraron los meses pedidos";
}


function mayorACien(array = [120, 89, 87, 100, 101, 157, 169]) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let n = [];
  for(var i =0; i<array.length; i++){
    if(array[i]>100) n.push(array[i]);
  }
  return n;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
