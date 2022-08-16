/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $agregarInput = document.querySelector('#agregar');

$agregarInput.onclick = function(){

    const nodoFormulario = document.querySelector('form');

    const nuevoInput = document.createElement('input');
          nuevoInput.type = ('number');
          nuevoInput.className = ('input-salario');
            
    const nuevoLabel = document.createElement('Label');
          nuevoLabel.className = ('label-salario');
        
    const textoLabel = document.createTextNode('Ingrese salario anual: ')

    const saltoLinea = document.createElement('br');
          saltoLinea.className = ("salto-linea");

    nuevoLabel.appendChild(textoLabel);
    nodoFormulario.appendChild(nuevoLabel);
    nodoFormulario.appendChild(nuevoInput);
    nodoFormulario.appendChild(saltoLinea);

    document.querySelector('#calcular').type = ('button');
}

const $quitarInput = document.querySelector('#quitar');

$quitarInput.onclick = function(){

    let ultimoInput = document.getElementById('formulario').lastChild;
    ultimoInput.remove();
    ultimoInput = document.getElementById('formulario').lastChild;
    ultimoInput.remove();
    ultimoInput = document.getElementById('formulario').lastChild;
    ultimoInput.remove();
}

const mesesEnUnAnio = 12;
const $calcularSalarios = document.querySelector('#calcular');

$calcularSalarios.onclick = function(){

    const nodoSalarios = document.querySelectorAll('.input-salario');

    let salarios= []

    for (let i = 0; i < nodoSalarios.length; i++){

        if (nodoSalarios[i].value != ''){

             salarios.push(nodoSalarios[i].value)
        }
    }
  
    function calcularMayorSalario(salarios){

        mayorSalario = Number(salarios[0]);

        for(i = 0; i < salarios.length; i++){

            if (Number(salarios[i]) > mayorSalario){

                mayorSalario = Number(salarios[i]);
            }
        }

        return mayorSalario;
    }

    function calcularMenorSalario(salarios){

        menorSalario = Number(salarios[0]);

        for(i = 0; i < salarios.length; i++){

            if (Number(salarios[i]) < menorSalario){

                menorSalario = Number(salarios[i]);
            }
        } 

        return menorSalario;
    }

    function calcularSalarioAnualPromedio(salarios){

        totalSalarios = 0;

        for(i = 0; i < salarios.length; i++){

            totalSalarios = totalSalarios + Number(salarios[i]);
        }

        promedioAnual = (totalSalarios / salarios.length).toFixed(2);

        return promedioAnual;
    }

    function calcularSalarioMensualPromedio(salarios,mesesEnUnAnio){

        totalSalarios = 0;

        for(i = 0; i < salarios.length; i++){

            totalSalarios = totalSalarios + Number(salarios[i]);
        }

        promedioAnual = (totalSalarios / salarios.length);

        promedioMensual = (promedioAnual / mesesEnUnAnio).toFixed(2);

        return promedioMensual;
    }

    mayorSalario = calcularMayorSalario(salarios);
    menorSalario = calcularMenorSalario(salarios);
    promedioAnualSalarios = calcularSalarioAnualPromedio(salarios);
    promedioMensualSalarios = calcularSalarioMensualPromedio(salarios,mesesEnUnAnio);

    document.querySelector('#mayor-salario-anual').innerText = `El salario anual más alto es $${mayorSalario}`;
    document.querySelector('#menor-salario-anual').innerText = `El salario anual más bajo es $${menorSalario}`;
    document.querySelector('#salario-anual-promedio').innerText = `El salario anual promedio es $${promedioAnualSalarios}`;
    document.querySelector('#salario-mensual-promedio').innerText = `El salario mensual promedio es $${promedioMensualSalarios}`;
}