// Array para almacenar los números ingresados por el usuario
const numeros = [];

function agregarALaPantalla(value) {
  document.getElementById("pantalla").value += value;
}

function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;
  try {
    const result = eval(valorPantalla);
    const resultadoTexto = `El resultado es: ${result}`;
    document.getElementById("pantalla").value = resultadoTexto;
    alert(resultadoTexto); // Muestra el resultado en un cuadro de diálogo
  } catch (error) {
    document.getElementById("pantalla").value = "Error";
  }
}

function limpiarPantalla() {
  document.getElementById("pantalla").value = "";
}

function obtenerEntradaUsuario() {
  const entrada = prompt("Ingresa una expresión matemática:");
  if (entrada !== null && entrada !== "") {
    document.getElementById("pantalla").value = entrada;
  }
}

// Función para agregar un número al array
function agregarNumero(numero) {
  numeros.push(numero);
}

// Función para sumar todos los números del array
function sumarNumeros() {
  const suma = numeros.reduce((total, numero) => total + numero, 0);
  document.getElementById("pantalla").value = suma;
}

// Objeto con operaciones matemáticas
const operaciones = {
  suma: (num1, num2) => num1 + num2,
  resta: (num1, num2) => num1 - num2,
  multiplicacion: (num1, num2) => num1 * num2,
  division: (num1, num2) => num1 / num2
};

// Función de orden superior
function calcularPromedio() {
  const promedio = numeros.reduce((total, numero) => total + numero, 0) / numeros.length;
  document.getElementById("pantalla").value = promedio;
}
