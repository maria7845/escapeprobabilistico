 // Definimos un objeto que contiene las iniciales y sus códigos correctos
        const combinacionesCorrectas = {
            "A": "370",
            "B": "322",
            "C": "25",
          "D": "320",
        };

       function verificar() {
            // Obtenemos la inicial seleccionada y el código ingresado
            const inicialseleccionada = document.getElementById('color').value;
            const codigoIngresado = document.getElementById('codigo').value;

            const resultadoDiv = document.getElementById('resultado');

            // Verificamos si la inicial seleccionada tiene un código y si el código ingresado es correcto
            if (combinacionesCorrectas[inicialSeleccionada] && combinacionesCorrectas[inicialSeleccionada] === codigoIngresado) {
                resultadoDiv.style.color = 'black';
                resultadoDiv.innerText = "¡Perfecto, pueden escapar!";
            } else {
                resultadoDiv.style.color = 'red';
                resultadoDiv.innerText = "Código incorrecto.";
            }
        }f       function verificar() {
            // Obtenemos la inicial seleccionada y el código ingresado
            const inicialseleccionada = document.getElementById('inicial').value;
            const codigoIngresado = document.getElementById('codigo').value;

            const resultadoDiv = document.getElementById('resultado');

            // Verificamos si la inicial seleccionada tiene un código y si el código ingresado es correcto
            if (combinacionesCorrectas[inicialSeleccionada] && combinacionesCorrectas[inicialSeleccionada] === codigoIngresado) {
                resultadoDiv.style.color = 'black';
                resultadoDiv.innerText = "¡Perfecto, pueden escapar!";
            } else {
                resultadoDiv.style.color = 'red';
                resultadoDiv.innerText = "Código incorrecto.";
            }
        }