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
    let resultadoCategoria = ''

    // Validad la categoria segun peso

    if(imc < 18.5){
        resultadoCategoria += "Peso inferior al normal"
    }else if(imc >= 18.5 && imc <24.9){
        resultadoCategoria += "Normal"
    }else if(imc >= 25.0 && imc < 29.9){
        resultadoCategoria += "Peso superior al normal"
    }else{
        resultadoCategoria += "Obesidad"
    }

    //Limpiar los inputs
    document.querySelector('#peso').value = ''
    document.querySelector('#altura').value = ''

    // Resultado mostrado al usuario
    document.getElementById('resultados').innerHTML = `
    <div class="card text-center">
                <div class="card-header fw-bold">
                Calculadora de IMC
                </div>
                <div class="card-body">
                <h5>Peso: ${peso}</h5>
                <h5>Altura: ${altura}</h5>
                <h5>IMC: ${imc.toFixed(2)}</h5>
                <h5>IMC: ${resultadoCategoria}</h5>
                <button onclick="volverCalcular()" class="btn btn-primary">Volver a calcular IMC</button>
                <a class="btn btn-primary" href="#contacto" role="button">Crea tu plan de dieta con nostros</a>
                </div>
            </div>
    `;
}

  //Volver a calcular 
  const volverCalcular = () =>{
    document.querySelector('#resultados').innerHTML = ''
}
 //Función para scroll en navbar permanente según baje
 //Defino constante header
const header = document.querySelector('.navbar');

//Función según variable de posición top
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}