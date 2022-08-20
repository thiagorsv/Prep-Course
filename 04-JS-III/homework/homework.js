// No cambies los nombres de las funciones.

function devolverPrimerElemento(array = ['a', 'e', 'i', 'o', 'u']) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array = ['a', 'e', 'i', 'o', 'u']) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array  = ['a', 'e', 'i', 'o', 'u']) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array = [1, 2, 3, 4]) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i = 0; i<array.length; i++){
    array[i]+=1;
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


function agregarItemAlComienzoDelArray(array  = ['a', 'e', 'i', 'o', 'u'], elemento = 5) {
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
  let frase = '';
  for(let i=0;i<palabras.length;i++){
    if(i!=palabras.length-1) frase = frase + palabras[i]+' ';
    frase = frase + palabras[i];
  }
}


function arrayContiene(array = ['a', 'e', 'i', 'o', 'u'], elemento = 'o') {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0; i<array.length; i++){
    if(array[i]===elemento) return true;
  }
  return false;
}


function agregarNumeros(numeros = [1, 2, 3, 4, 5]) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let value = 0;
  for(let i = 0; i<array.length; i++){
    value = value + numeros[i];
  }
  return false;
}


function promedioResultadosTest(resultadosTest = [[1,2,3,4,5], [8, 7, 9, 5, 10]]) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for(let i = 0; i<resultadosTest[1].length;i++){
    suma = suma + resultadosTest[1][i];
  }
  return suma/resultadosTest[1].length;
}


function numeroMasGrande(numeros = [3, 6, 2, -1, 9, 2]) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let grande = numeros[0];
  for(let i = 1; i<numeros.length; i++){
    if(numeros[i]>grande) grande = numeros[i];
  }
  return grande;
}


function multiplicarArgumentos(a = 1, b = 2, c = 3, d = 4) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let res = 1;
    for(let i = 0; i<4; i++){
        res = res*arguments[i];
    }
    return res;
}


function cuentoElementos(arreglo = [5, 23, 34, -12, 100, 90]){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let num = 0;
  for(let i = 0; i<arreglo.length; i++){
    if(arreglo[i]>18) num++;
  }
  return num;
}


function diaDeLaSemana(numeroDeDia = 5) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia>1 && numeroDeDia<6) return "Es dia laboral";
  return "Es fin de semana";
} 


function empiezaConNueve(n = 978) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let str = n.toString();
  if(str[0]=='9') return true
  return false; 
}


function todosIguales(arreglo = [3, 3, '3', 3]) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(let i = 1; i<arreglo.length; i++){
    if(arreglo[i]!==arreglo[i-1]) return false;
  }
  return true;
} 


function mesesDelAño(array = ['Enero', 'Junio', 'Mayo', 'Noviembre', 'Febrero']) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let cuenta = 0;
  for(let i = 0; i<array.length; i++){
    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') cuenta++;
  }
  if(cuenta===3) return ['Enero', 'Marzo', 'Noviembre'];
  return "No se encontraron los meses pedidos"; 
}


function mayorACien(array = [1, 142, 100, 24, 78, 198, 144, 44, 122]) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevo_array = [];
  for(let i = 0; i<array.length; i++){
    if(array[i]>100) nuevo_array.push(array[i]);
  }
  return nuevo_array;
}


function breakStatement(numero = 1) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array = [];
  let suma = numero;
  for(let i=1; i<11; i++){
    suma += 2;
    if(suma===i) return "Se interrumpió la ejecución";
    array[i-1] = numero + i*2;
  }
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array = [];
  for(let i=1; i<11; i++){
    if(i=5) continue;
    array[i-1] = numero + i*2;
  }
  return array;
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
