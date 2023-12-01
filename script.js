function calcularIMC() {
    // Para obtener los valores necesarios
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Para ingresar datos validos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, ingresa valores válidos para peso y altura.",
          });
        return;
    }

    // Para calcular el IMC
    const imc = peso / ((altura / 100) ** 2);

    // Resultado mostrado al usuario
    document.getElementById('resultado-imc').innerText = `Tu IMC es: ${imc.toFixed(2)}`;
}