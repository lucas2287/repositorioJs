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
