// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "uno";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str = "hola") {
  // "Return" la string provista: str
  // Tu código:
  return str;
  
}

function suma(x = 2, y = 3) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return x+y;
  
}

function resta(x = 2, y = 1) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x-y;
}

function multiplica(x = 2, y = 3) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return x*y;
}

function divide(x = 4, y = 2) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x/y;
}

function sonIguales(x = 5, y = 3) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  return x==y;
}

function tienenMismaLongitud(str1 = "Casa", str2 = "Patio") {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length==str2.length) return true;
  return false;
}

function menosQueNoventa(num = 80) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num<90;
}

function mayorQueCincuenta(num = 80) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num>50;
}

function obtenerResto(x = 25, y = 4) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x%y;
}

function esPar(num = 6) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  value = num%2;
  if (value == 1) return false;
  return true;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  value = num%2;
  if (value == 0) return false;
  return true;
}

function elevarAlCuadrado(num = 2) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return num*num;
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num*num*num;
}

function elevar(num = 2, exponent = 4) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var value = num;
  for(var i = 1; i<exponent; i++){
    value *= num;
  }
  return value;
}

function redondearNumero(num = 4.3) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  value = Math.round(num);
  return value;
}

function redondearHaciaArriba(num = 4.3) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  value = Math.ceil(num);
  return value;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  value = Math.random();
  return value;
}

function esPositivo(numero = -3) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero < 0) return "Es negativo";
  else if(numero > 0) return "Es positivo";
  else return false;
}

function agregarSimboloExclamacion(str = "Hola mundo") {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  newstr =str + "!";
  return newstr;
}

function combinarNombres(nombre = "Diego", apellido = "Salas") {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido;
}

function obtenerSaludo(nombre = "Henry") {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var str1 = "Hola ";
  var str3 = "!";
  return str1.concat(nombre, str3);
}

function obtenerAreaRectangulo(alto = 3, ancho = 2) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto*ancho;
}


function retornarPerimetro(lado = 5){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return 4*lado;
}


function areaDelTriangulo(base = 3, altura = 3){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return 0.5*base*altura;
}


function deEuroAdolar(euro = 5){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  dolar = euro*1.2;
  return dolar;
}


function esVocal(letra = 'a'){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
    respuesta = "Es vocal";
    return respuesta;
  }
  else{
    respuesta = "Dato incorrecto";
    return respuesta;
  }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
