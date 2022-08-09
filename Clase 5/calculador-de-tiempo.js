const $botonCalcular = document.querySelector('#calcular-tiempo-total');

$botonCalcular.onclick = function(){

    let horasVideo = document.querySelectorAll('.horas-video');
    let minutosVideo = document.querySelectorAll('.minutos-video');
    let segundosVideo = document.querySelectorAll('.segundos-video');
    
    let horasSumadas = 0;
    let minutosSumados = 0;
    let segundosSumados = 0;

    for (i = 0; i < horasVideo.length; i++){

        horasSumadas = horasSumadas + Number(horasVideo[i].value);
    }

    for (i = 0; i < minutosVideo.length; i++){

        minutosSumados = minutosSumados + Number(minutosVideo[i].value);
    }
    
    for (i = 0; i < segundosVideo.length; i++){

            segundosSumados = segundosSumados + Number(segundosVideo[i].value);
    }
    
    function convertirASegundos(horasSumadas, minutosSumados, segundosSumados){

        return ((horasSumadas * 3600) + (minutosSumados * 60) + (segundosSumados));
    }   

    let tiempoTotal = convertirASegundos(horasSumadas, minutosSumados, segundosSumados);

    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

     while (tiempoTotal >= 3600)        {

        horasTotales++; 
        tiempoTotal -= 3600;
     }   
     
     while (tiempoTotal >= 60){

        minutosTotales++;
        tiempoTotal -= 60;
     }

     while (tiempoTotal > 0) {

        segundosTotales++
        tiempoTotal--
     }

    let resultado = `El tiempo total es ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos.`;
    
    document.querySelector('#tiempo-total').innerText = resultado;

return false;
}