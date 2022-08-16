/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $ingresarIntegrantes = document.querySelector('#ingresar-integrantes');
const botonCalcular = document.querySelector('#calcular-edades');
const botonResetear = document.querySelector('#resetear-valores');
let numeroIntegrantes;

$ingresarIntegrantes.onclick = function(){

    const nodoFormulario = document.querySelector('form');

    numeroIntegrantes = document.querySelector('#numero-integrantes').value;

    crearInputEdad = function (){

        const nuevoInput = document.createElement('input');
              nuevoInput.type = ('number');
              nuevoInput.className = ('edad-integrante');

        const nuevoLabel = document.createElement('label'); 
              nuevoLabel.className = ("label-edad");

        const textoLabel = document.createTextNode('Edad:')
        const saltoLinea = document.createElement('br');
              saltoLinea.className = ("salto-linea");


        nuevoLabel.appendChild(textoLabel);
        nodoFormulario.appendChild(nuevoLabel);
        nodoFormulario.appendChild(nuevoInput);
        nodoFormulario.appendChild(saltoLinea);
    }

    let i = 0;

    while(i < numeroIntegrantes){

        crearInputEdad();
        i ++;
    }

    botonResetear.type = ('reset');
    botonCalcular.type = ('button');
                                                                                                                                     
    return false;
}


const $calcularEdades = document.querySelector('#calcular-edades');

$calcularEdades.onclick = function(){

    const nodoEdades = document.querySelectorAll('.edad-integrante');

    let edades = [];

    for(i = 0; i < nodoEdades.length; i++){

        edades.push(nodoEdades[i].value);
    }

    function calcularMayorEdad(edades){

        edadMaxima = Number(edades[0]);

        for(i = 0; i < edades.length; i++){

            if (Number(edades[i]) > edadMaxima){

                edadMaxima = Number(edades[i]);
            }
        }

        return edadMaxima;
    }

    function calcularMenorEdad(edades){

        edadMinima = Number(edades[0]);

        for(i = 0; i < edades.length; i++){

            if (Number(edades[i]) < edadMinima){

                edadMinima = Number(edades[i]);
            }
        }
    
        return edadMinima;
    }

    function calcularPromedioEdad(edades){

        let sumaEdades = 0;

        for (i = 0; i < edades.length; i++){

            sumaEdades = sumaEdades + Number(edades[i]);
        }

        promedioEdades = (sumaEdades / edades.length);

        return promedioEdades;
    }

    let mayorEdad = calcularMayorEdad(edades);
    let menorEdad = calcularMenorEdad(edades);
    let promedioEdad = calcularPromedioEdad(edades);

    document.querySelector('#mayor-edad').innerText = `La edad más alta es ${mayorEdad}.`;
    document.querySelector('#menor-edad').innerText = `La edad más baja es ${menorEdad}.`;
    document.querySelector('#promedio-edad').innerText = `El promedio de edad es ${promedioEdad}.`;

    return false;
}

const $resetear = document.querySelector('#resetear-valores');

$resetear.onclick = function (){

    botonCalcular.type = ('hidden');

    [].forEach.call(document.querySelectorAll(".edad-integrante"), function(edadIntegrante){
        edadIntegrante.parentNode.removeChild(edadIntegrante);
    });

    [].forEach.call(document.querySelectorAll(".label-edad"), function(labelEdad){
        labelEdad.parentNode.removeChild(labelEdad);
    });

    [].forEach.call(document.querySelectorAll(".salto-linea"), function(saltoLinea){
        saltoLinea.parentNode.removeChild(saltoLinea);
    });

    let resultado = document.getElementsByClassName("resultado");

    for(i = 0; i < resultado.length; i++){

        resultado[i].innerText = "";
    }
}


