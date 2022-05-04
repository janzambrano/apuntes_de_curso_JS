// ejercicio 1 modulo 2
//Nuestro objetivo será crear 3 variables: moduloNativo, moduloInstalado y moduloPropio, en donde cada una almacenará un módulo distinto.
//La primera deberá requerir el módulo http, la segunda el módulo axios y la tercera un módulo local exportado del archivo miFuncion.js.
//Este último archivo se encuentra en la misma carpeta que nuestro index.js.
/*let moduloNativo = require('http');
let moduloInstalado = require('axios');
let moduloPropio = require('./miFuncion');*/

//Ejercicio 2 modulo 2
/*let arrayDePeliculas = ["Harry Potter","Her", "Up", "Lego"];

module.exports = arrayDePeliculas;

// const zodiac = require('zodiac-signs')('en');

// let signoZodiacal = zodiac.getSignByDate({ day: 18, month: 1 } );

// console.log( signoZodiacal.name );


signoZodiacal = require('zodiac-signs')('en');

let dia = 4;

let mes = 12;

let signo = signoZodiacal.getSignByDate({day: dia, month: mes}).name;

let mensaje = ["Jan Zambrano", "Ver pelicucas de ciencia ficción", "Chile, Los Ángeles, Bio Bio", signo];

console.log(mensaje);*/

//Variblles

/*var miNombre = "Pedro";
var miNombre= "Carlos";
console.log( miNombre );

let dato;
console.log(dato);

var objeroLiteral = {
    programa: "el precio de la historia",
    horario: "2pm los martes y jueves",
    clasificacion: "adulto",
    calificacion: 33
}
console.log(objeroLiteral.programa);
console.log(objeroLiteral);*/

/*Ya vimos cómo declarar una variable y asignarle el tipo de dato que queramos como valor. Ahora, creemos 3 variables numéricas, pero esta vez haciendo uso de la 
función nativa Number().

Una función nativa es una función que ya existe en el lenguaje de JavaScript, no tenemos que definirla, solo ejecutarla en el momento en que la necesitemos. En el 
caso de la función Number(),  esta espera que le pasemos un parámetro dentro de los paréntesis para trasformar el dato que le hayamos pasado, en un tipo de dato 
numérico. Por ejemplo:

var unNuevoNumero = Number('50');
// La función hará que solo se tome el valor 50 como dato numérico (cuando se lo pasamos como parámetro 
era un string) y lo va a dejar almacenado en la variable unNuevoNumero


IMPORTANTE: Si utilizamos la función Number() y como parámetro le pasamos un dato que no puede convertirse en número —como por ejemplo el string "hola"—, nos va a 
devolver Nan. Esto es un valor con el cual no podemos operar como si fuese un número (Not a Number).

Sabiendo esto, creemos tres variables utilizando la función Number(), las mismas se deberán llamar positivo, negativo y decimal. Cada una de ellas deberá almacenar
un número que se corresponda con su nombre. En la variable positivo, almacenar un número positivo; en la variable  negativo, almacenar un número negativo; y en la
variable decimal, almacenar un número decimal.*/
let positivo = Number ("50")
let negativo = Number ("-8")
let decimal = Number ("1.14")


/*Una buena forma de aprender a usar una función nativa es pasarle distintos tipos de datos y ver qué pasa en cada caso. Vamos a hacer uso de esa práctica.
En este caso vamos a utilizar otra función nativa llamada parseInt(). Esta nos devuelve el valor entero de un dato que le pasemos como parámetro, siempre y cuando 
el mismo se pueda operar como dato numérico. Por ejemplo:
var valorEntero = parseInt('167.64');
// La función hará que solo se tome el valor 167 y lo va a dejar almacenado en la variable valorEntero.
IMPORTANTE: Esta función no redondea, ¡solo devuelve el valor entero del número! 
Ahora sí, probemos:
Tenemos una variable ya declarada llamada nan a la cual queremos asignarle, como valor, la función parseInt() y, como parámetro, darle un dato que haga que la misma
no pueda operar con el valor dado, es decir, que nos devuelva el valor NaN.
Además, tenemos una variable ya declarada llamada correcta, a la cual queremos asignarle, como valor, la función parseInt() y, como parámetro, darle un dato que
haga que la misma sí pueda operar.
Dame una pista
En este caso queremos que completes los espacios en blanco (no dejes ningún guión) con las consignas dadas. Es necesario que utilices la función parseInt() en ambos
casos.*/

const nan = parseInt('text');
const correcto = parseInt('167.64');


/*
// =======================
//DE ASIGNACIÓN
//==========================

// El operador "=" sirve para asignar el valor 40 a una variable llamada "edad"

var edad = 40

// ==========================
//ARITMÉTICOS
//========================== 

// Nos permiten hacer operaciones matemáticas

10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
15++    //---> Incremento de uno en uno: 15 + 1
15--    //---> Decremento de uno en uno: 15 - 1
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1

// =========================
//DE COMPARACIÓN SIMPLE
//========================== 

10 == 15 //---> Igualdad
10 != 15 //---> Desigualdad

// =======================
//DE COMPARACIÓN ESTRICTA
//========================

10 === 15 //---> Estrictamente igual (mismo valor y tipo de dato)
10 !== 15 //---> Compara si los operandos no son iguales y/o no del mismo tipo

// =========================
//OPERADORES RELACIONALES
//==========================

15 > 10  //---> Mayor que...
15 >= 10  //---> Mayor igual que...
15 < 10  //---> Menor que...
15 <= 10  //---> Menor igual que...

// ==========================
//LÓGICOS
//========================== 

// Permiten combinar valores booleanos y su resultado a la vez también es un booleano

// && Todos sus valores deben evaluar como TRUE
(10 > 15) && (10 != 20) //---> 

// || (OR) Solo un valor debe evaluar como TRUE para que la expresión sea TRUE

(10 > 15) || (10 != 20) //---> TRUE porque 10 != 20 es verdadero

// ! (NOT) - Niega la condición, TRUE pasa a FALSE y FALSE a TRUE

let color = 'Verde';
let noEsRojo = !(color == 'Rojo'); //---> Esto daría FALSE, 
pero como está negado, da TRUE*/

//let edad9;
//edad9 = 15 % 5; //muestra como resultado el residuo de una division, siver para saber si el numero es par o no
//console.log( edad9 );


//Hagamos una función más. La función debe llamarse esPar, debe recibir un número como parámetro, y nos devolverá un booleano (true/false) indicándonos si ese 
//número es divisible por dos.
//Tips: utilizar la consola para probar la función esPar y observar si devuelve el resultado esperado. Recordar utilizar el operador módulo.

/*function esPar(n){
    if ((n % 2) == 0){
        return (true)         
    } 
        else{
            return (false)
        }   
}
console.log(esPar(3));*/

//¿Se acuerdan cuando declarábamos variables para poder utilizarlas luego? Bueno, aquí podemos hacer algo similar, pero en lugar de declarar variables 
//(estructuras que contienen información) podemos declarar funciones (estructuras que procesan información).
//Escribir las siguientes tres funciones:
//anterior: recibe un número como parámetro y devuelve ese número menos uno.
//triple: recibe un número como parámetro y devuelve el triple de ese número.
//anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores, tendrá que devolver el número recibido multiplicado 
//por 3 (tres) y al resultado restarle 1 (uno).
//Aclaración: este ejercicio conlleva cierta complejidad. Es normal que se tarde en llegar a la solución.

/*let anterior = function(numero){
    return numero - 1;    
}
console.log(anterior(10));


let triple = function(numeroTriple){
    return numeroTriple * 3;
}
console.log(triple(5));

let anteriorDelTriple = function(numeroAnteriorDelTriple){
    return numeroAnteriorDelTriple = triple(numeroAnteriorDelTriple), numeroAnteriorDelTriple = anterior(numeroAnteriorDelTriple);
}
console.log(anteriorDelTriple(5));

// otra forma que es la correcta del playground
function  anterior(numero){
    return numero - 1;    
}
console.log(anterior(10));


function triple(numeroTriple){
    return numeroTriple * 3;
}
console.log(triple(5));

function anteriorDelTriple(numeroAnteriorDelTriple){
    return numeroAnteriorDelTriple = triple(numeroAnteriorDelTriple), numeroAnteriorDelTriple = anterior(numeroAnteriorDelTriple);
}
console.log(anteriorDelTriple(5));

let dato = false;
if (dato === true){
    console.log("es true");
}
else{
    console.log("es false");
}


function puedePasar(nombre) {
    if (nombre !== "Cosme Fulanito"){
    return(true);
}
else{
    return(false);
}
}
console.log(puedePasar("Juan perez"));

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]
let indiceJuan = alumnos.indexOf("Juan");
let indiceFrancisco = alumnos.indexOf("Francisco");
console.log(indiceJuan);
console.log(indiceFrancisco);


let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
let fraseNueva = arrayFrase.join(" ");
console.log(fraseNueva);


let estudiantes1 = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
let alumnoEgresado = estudiantes1.pop();
console.log(alumnoEgresado);


let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
estudiantes.push(
    {
    nombre: 'Juan',
    promedio: 5,
    curso: 'iOS',
    }
);

estudiantes.push(
    {
    nombre: 'Miguel',
    promedio: 2,
    curso: 'Android',
    }
);
console.log(estudiantes);

let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]
let alumnoDeBaja = estudiantes.shift();
console.log(alumnoDeBaja);

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
  
estudiantes.unshift(
    {
    nombre: 'Mariana',
    promedio: 9,
    curso: 'Full Stack',
    }
);

estudiantes.unshift(
    {
    nombre: 'Francisco',
    promedio: 2,
    curso: 'Android',
    }
);
console.log(estudiantes);

console.log(1 == "1");

function dominio(url){  
  return 'http://www.'+ url;
}
console.log(dominio("midominio.com"));

let texto = "Hola mundo"
console.log(texto.length);

function reemplazoFastFast(texto,paraRemplazar,remplazada){
  return texto.replace(paraRemplazar, remplazada);
}
  console.log(reemplazoFastFast('buenos días, Chile', 'Chile', 'Venezuela'));

let texto   = 'Existen muchos lenguajes de programación y JavaScript es uno de ellos';
let palabra = 'programación';
//console.log(texto.indexOf(palabra));

function menciona(texto,palabra){
  if (texto.indexOf(palabra) === -1){
    return (false);
  }
  else{
    return (true);
  }
}
console.log(menciona(texto,palabra));

let frase = 'Hola!, soy Carli';
let licenciada;
function slice(){    
    return licenciada = (frase.slice(11,16));
}
console.log(slice());

//Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.
//Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.
//La función entrenarHoras tiene las siguientes tres características:
//Recibe por parámetro la cantidad de horas.
//Resta a su energía (this.energia) la cantidad de horas x 5.
//Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.

let deportista = {
	  energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function entrenarHoras(cantidadDeHoras){
        return this.energia = (this.energia - (cantidadDeHoras * 5)), this.experiencia = ((cantidadDeHoras * 2) + this.experiencia);        
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


// Función convencional 

function sumar(n1,n2) {
  return n1 + n2
}

// Arrow function

let sumar = (n1,n2) => n1 + n2


// cambiando funciones de convencional a arrow funtion
function dameCinco() {
  return [1,2,3,4,5];
}

function multiplicarPorDos() {
return 123 * 2 ;
}

function mostrarNombre() {
return "Mi nombre es Hernán";
}

function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}


//cambio a arrow
let dameCinco = () => [1,2,3,4,5];
console.log(dameCinco());


let multiplicarPorDos = () => 123 * 2;
console.log(multiplicarPorDos());

let mostrarNombre = () => 'Mi nombre es Hernán';
console.log(mostrarNombre());

let saludar = nombre => 'Hola, ' + nombre + '!';
console.log(saludar("Jan"));


let saludar2 = (nombre2, apellido) =>  'Hola, ' + nombre2 + ' ' +  apellido + '!';
console.log(saludar2("Jan", "Zambrano"));

//if ternario
                        

//switch

// cambiando a switch ojo hace comparacion estricta
let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}


function finDeSemana(dia){  
  switch (dia){
    case 'viernes' :
      console.log('buen finde');
    break;

    case 'lunes' :
      console.log('buena semana');
    break;

    default :
      console.log('buen dia');
    break;    
  }
}
finDeSemana("lunes");


//El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. Utilizando switch deberemos evaluar si la 
//variable "día" es lunes, miércoles o viernes; y, en ese caso, debe imprimir el texto "tenés clases". Para cualquier otro caso debe imprimir "no tenés clases".

function tengoClases(dia) {
	switch (dia) {
    case 'lunes' :
    case 'miércoles' :
    case 'viernes' :
      console.log('tenés clases');
    break;

    default :
     console.log('no tenés clases');
	}
}
tengoClases('lunes');


//Vamos a poner en práctica el if ternario. En este escenario vamos a contar con dos bicicletas y nos interesa saber cuál tiene el rodado más grande.
//Para esto, a la variable bicicletaConRodadoGrande debemos asignarle la bicicleta utilizando un operador ternario. El operador ternario debe comparar 
//los rodados de ambas bicicletas y retornar la que tenga el mayor rodado.
//ejemplo variable = expresion ? true_value : false_value;

let bicicletaA = {
  rodado: 38,
  marca: "Mountain Bike"
}
let bicicletaB = {
  rodado: 24,
  marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaA.rodado > bicicletaB.rodado ? bicicletaA: bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca);

//Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
//La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.
//for(inicio, condicion, modificador) {
  // Código que se ejecutará en cada repetición
//}

function loro(texto){
    for(let i = 1 ; i <= 5 ; i++)
    {
        console.log(texto);
    }
}
loro("repitiendo como un loro");


//¡Vamos a crear una función interesante!
//En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de 
//números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .
//Ejemplo: console.log(noParesDeContarImparesHasta(4)) // imprime por pantalla el valor 2, que se obtiene de contar 1 y 3. Los valores 0, 2 y 4 no los
//contabiliza por ser números pares.
//Dame una pista: Dentro del condicional del for, deberíamos utilizar el parámetro que es enviado a la función.


function noParesDeContarImparesHasta(numero){
  let conteo = 0;
    for (let i = 0; i <= numero; i++) {
      if ((i % 2) !== 0) {
        conteo = conteo + 1;
  }
}
return conteo;
}
console.log(noParesDeContarImparesHasta(4));
//ejercicio numero primos
for (let i=1; i <= 100; i++){

  let contar = 0
  for ( j=1; j<=i;j++){

      if(i%j == 0){
          contar = contar + 1 
      }

  }
  let primo = (contar == 2 || i ==1) ? console.log(i) : "";
}*/

//Callbacks es como tener una funcion dentro de otra funcion en las variables o recibirlas como argumentos

let sumar         = (numero1, numero2) => numero1 + numero2;
let restar        = (numero1, numero2) => numero1 - numero2;
let multiplicar   = (numero1, numero2) => numero1 * numero2;
let dividir       = (numero1, numero2) => numero1 / numero2;

let calculadora   = (numero1, numero2, operacion) => operacion(numero1, numero2);

console.log(calculadora(30, 2, sumar));
console.log(calculadora(30, 2, restar));
console.log(calculadora(30, 2, multiplicar));
console.log(calculadora(30, 2, dividir));


//Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.
//La primera función se llamará doble. Esta recibirá un número y retornará el doble.
//La segunda función se llamará triple. Esta recibirá un número y retornará el triple.
//La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor 
//que recibió. Ejemplo: 
//aplicarCallBack(2, doble); // 4
//aplicarCallBack(4, triple); // 12
//Dame una pista Una vez tengamos las funciones doble y triple es momento de crear la función aplicarCallback. Cuando la definamos, hay que tener en cuenta 
//que recibe un valor y una función. Esa función se tendrá que ejecutar internamente para poder retornar el valor deseado.


let doble             = (numero1) => numero1 * 2;
let triple            = (numero1) => numero1 * 3;
let aplicarCallback  = (numero1, operacion) => {
    return operacion(numero1);
}

console.log(aplicarCallback(2, doble));
console.log(aplicarCallback(4, triple));*/


//Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 
//Para esto debemos completar la función procesar. Esta recibe dos parámetros:
//1. El primer parámetro es un array.
//2. El segundo parámetro que recibe es una función (al que solemos llamar callback).
//La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.
//Dejamos unas funciones para comprender y probar con el ejemplo:
  
/*let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
  let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
  console.log(largoDeElmentos); // imprime [ 14, 13 ]

//Dame una pista Hay que tener en cuenta que la función procesar, además de recibir una función como parámetro, recibe un array de sitios webs. 
//¿Cómo podemos hacer para aplicarle A CADA UNO de esos sitios el callback que recibe como parámetro esta función?

function agregarHttp(url) {
  return "http://" + url;
}

function procesar(unArray,callback) {
  let sitiosWeb = [];
  for (let i = 0; i < unArray.length; i++){
      // Se ejecuta la función callback enviando el elemento actual como parámetro
      sitiosWeb.push(callback(unArray[i]));
  }
  return sitiosWeb;
}

let sitioWebCompleto = (unArray, callback) => procesar(unArray, callback);

console.log(sitioWebCompleto(["www.yahoo.com", "www.google.com", "www.git.com"], agregarHttp));


let notas = [10, 5, 8, 12, 2, 6];

let notasHastaEl100 = notas.map( function (numero){
  return numero * 10;
});
console.log(notasHastaEl100);

let notasAprobadas = notas.filter( function (numero){
  return numero >= 10;
});
console.log(notasAprobadas);

let sumaDeNotas = notas.reduce( function (estado, numero){
  return estado + numero;
});
console.log(notasHastaEl100);

notas.forEach( function (valor, indice){
  console.log("En posición " + indice + " tenemos el valor " + valor);
});*/

//Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio.
//Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables 
//aprobados y desaprobados respectivamente.

let estudiantes = [
  {nombre: 'John', promedio: 8.5, aprobado: true},
  {nombre: 'Jane', promedio: 7, aprobado: true},
  {nombre: 'June', promedio: 3, aprobado: false},
]

// con forEach
estudiantes.forEach( function (valor, indice){
  if (valor.aprobado === true){
    let aprobados = valor.nombre;
    console.log("Estos son los aprobados " + aprobados);
  } 
  else{
    let desaprobados = valor.nombre
    console.log("Estos son los desaprobados " + desaprobados);
  }  
});

//Con filter
estudiantes.filter( function (valor){
  if (valor.aprobado === true){
    let aprobados = ("Nombre: " + valor.nombre  + " " + "Promedio: " + valor.promedio + " " + "Aprobado: " + valor.aprobado);
    //return aprobados;
    console.log(aprobados);
  } 
  else{
    let desaprobados = ("Nombre: " + valor.nombre  + " " + "Promedio: " + valor.promedio + " " + "Aprobado: " + valor.aprobado);
    //return desaprobados;
    console.log(desaprobados);
  }  
});

// retornando un objeto
let aprobados = estudiantes.filter(function(estudiantes) {return estudiantes.aprobado == true});
let desaprobados = estudiantes.filter(function(estudiantes) {return estudiantes.aprobado == false});


//Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las pantallas del aeropuerto y, 
//a modo de travesura, queremos adelantar una hora cada partida. Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la
//lista en una variable nueva llamada horariosAtrasados.

let horariosPartida = [12, 14, 18, 21];


let horariosAtrasados = horariosPartida.map( function (numero){
  return numero - 1;
});
console.log(horariosAtrasados);


//Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
//Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.

let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce( function (vuelta, numero){
  return vuelta + numero;
});
console.log(totalVueltas);


//Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.

let listaDeSuperMercado = [
  'Bife de chorizo', 
  'Coca Cola', 
  'Bananas', 
  'Lechuga', 
  'Chimichurri', 
  'Lata de tomates', 
  'Arvejas', 
  'Cereales', 
  'Pechuga de pollo', 
  'Leche'
];


listaDeSuperMercado.forEach( function (objeto){
  console.log(objeto);
});

//metodo Date
let miFecha = 12;
let diaDeMiFecha = miFecha.getDate();
console.log(diaDeMiFecha);

//En este ejercicio ya vamos a tener disponible la fecha en la variable fecha y, utilizándola, debemos imprimir el siguiente mensaje:
//"Hoy es el día XX del mes YY del año ZZZZ", donde XX es el número del día, YY es el número del mes y ZZZZ es el número del año. 
//Ejemplo de cómo podría verse una fecha con este formato:
//"Hoy es el día 0 del mes 4 del año 2019"
//Funciones de Date que nos van a ayudar:
//getDate()
//getMonth()
//getFullYear()

console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+ fecha.getDate() +' del mes '+ fecha.getMonth() +' del año '+ fecha.getFullYear());

//destructuracion de array podemos colocar cualquier nombre que el lo tomara por el orden del indixe del array
let curso = ["Programación", "Diseño grafico", "Contabilidad"]

//Aca la destructuracion
let [programacion, diseno, contabilidad] = curso;
console.log(programacion);
console.log(diseno);
console.log(contabilidad);

// se dejan los espacios vacios con comas de los indise que no tomaremos en cuenta para nuetras especificas variables que querramos crear
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [, bariloche, , china] = destinosDelMundo;
console.log(bariloche);
console.log(china);

//destructuracion de objetos literales ojo con las mayusculas y minusculas para objetos literales debe ser igual a cada variable
let carros = {
  modelo1: "Chevrolet",
  modelo2: "Kia",
  modelo3: "Renoult"
}
let {modelo1, modelo2, modelo3} = carros;
console.log(modelo1);
console.log(modelo2);
console.log(modelo3);

//Spread operator y rest parameter
//Unifica 2 array en uno solo
let peliculasComicas = ["¿Que paso ayer?", "Las mascara", "Jackas"]
let peliculasDeAccion = ["Hombre en yamas", "Matrix", "El conductor", "Rapidos y furiosos"]

// uniendo sin uso de metodo dapor resultado un array con 2 array dentro
let todasLasPeliculas1 = [peliculasComicas, peliculasDeAccion];
console.log(todasLasPeliculas1);

//uniendo con metodo spread unifica ambos array en 1 un solo array, solo agregando los tres puntos delante del array ...
let todasLasPeliculas2 = [...peliculasComicas, ...peliculasDeAccion];
console.log(todasLasPeliculas2);

// tambine sirve para unificar objetos literales
let categoria = {
  nombreGenero: "Comedia",
  clasificacion: "A",
  popularidad: 9
}
// sin metodo
let pelicula1 = {
  nombrepeli: "Pobre angelito",
  duracion: "2 horas",
  categoria
}
// con metodo
let pelicula2 = {
  nombrepeli: "Jackas",
  duracion: "1:20 minutos",
  ...categoria
}

let pelicula3 = {
  nombrepeli: "Mascara",
  duracion: "1:45 minutos",
  ...categoria
}

console.log(pelicula1);
console.log(pelicula2);
console.log(pelicula3);

// dentro de una funcion
function peliculasVistas (...nombreDeLasPeliculas){// aca los puntos para unificar cada pelicula sin saber cuantas quiero agregar N cantidad de veces
    for (let i = 0; i < nombreDeLasPeliculas.length; i++){
      console.log("La persona ya vio " + nombreDeLasPeliculas[i]);
    }
}
peliculasVistas("La mascara", "Jackas", "Hombre en yamas");