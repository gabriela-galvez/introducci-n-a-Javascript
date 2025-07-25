function operar(operacion) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  switch (operacion) {
    case 'sumar':
      resultado = num1 + num2;
      break;
    case 'restar':
      resultado = num1 - num2;
      break;
    case 'multiplicar':
      resultado = num1 * num2;
      break;
    case 'dividir':
      resultado = num2 !== 0 ? num1 / num2 : "Error: División por 0";
      break;
    case 'potencia':
      resultado = Math.pow(num1, num2);
      break;
    case 'raiz':
      resultado = num1 >= 0 ? Math.sqrt(num1) : "Error: Raíz negativa";
      break;
    default:
      resultado = "Operación no válida";
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}