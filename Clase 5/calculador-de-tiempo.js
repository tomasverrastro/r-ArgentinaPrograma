


const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(){

    let horas1 = Number(document.querySelector('#horas2').value);
    let minutos1 = Number(document.querySelector('#minutos2').value);
    let segundos1 = Number(document.querySelector('#segundos2').value);
    
    let horas2 = Number(document.querySelector('#horas3').value);
    let minutos2 = Number(document.querySelector('#minutos3').value);
    let segundos2 = Number(document.querySelector('#segundos3').value);
    
    let horas3 = Number(document.querySelector('#horas4').value);
    let minutos3 = Number(document.querySelector('#minutos4').value);
    let segundos3= Number(document.querySelector('#segundos4').value);
    
    let horas4 = Number(document.querySelector('#horas5').value);
    let minutos4 = Number(document.querySelector('#minutos5').value);
    let segundos4 = Number(document.querySelector('#segundos5').value);
    
    let horas5 = Number(document.querySelector('#horas6').value);
    let minutos5 = Number(document.querySelector('#minutos6').value);
    let segundos5 = Number(document.querySelector('#segundos6').value);

    let horas6 = Number(document.querySelector('#horas1').value);
    let minutos6 = Number(document.querySelector('#minutos1').value);
    let segundos6 = Number(document.querySelector('#segundos1').value);


    function convertirASegundos1(horas1, minutos1, segundos1){

        let segundosTotales = ((horas1 * 3600) + (minutos1 * 60) + (segundos1));
        return segundosTotales;
    }   
    function convertirASegundos2(horas2, minutos2, segundos2){

        let segundosTotales = ((horas2 * 3600) + (minutos2 * 60) + (segundos2));
        return segundosTotales;
    }   
    function convertirASegundos3(horas3, minutos3, segundos3){

        let segundosTotales = ((horas3 * 3600) + (minutos3 * 60) + (segundos3));
        return segundosTotales;
    }    
    function convertirASegundos4(horas4, minutos4, segundos4){

        let segundosTotales = ((horas4 * 3600) + (minutos4 * 60) + (segundos4));
        return segundosTotales;
    }   
    function convertirASegundos5(horas5, minutos5, segundos5){

        let segundosTotales = ((horas5 * 3600) + (minutos5 * 60) + (segundos5));
        return segundosTotales;
    }    
    function convertirASegundos6(horas6, minutos6, segundos6){

        let segundosTotales = ((horas6 * 3600) + (minutos6 * 60) + (segundos6));
        return segundosTotales;
        
    }


    let tiempoTotal = convertirASegundos1(horas1, minutos1, segundos1) + convertirASegundos2(horas2, minutos2, segundos2) + 
                      convertirASegundos3(horas3, minutos3, segundos3) + convertirASegundos4(horas4, minutos4, segundos4) + 
                      convertirASegundos5(horas5, minutos5, segundos5) + convertirASegundos6(horas6, minutos6, segundos6);


    let horasTotales = Math.floor(tiempoTotal / 3600);

    let minutosTotales = Math.floor((tiempoTotal % 3600) / 60);

    let segundosTotales = (tiempoTotal % 3600) % 60;
    

    let resultado = `El tiempo total es ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos.`;
    
    document.querySelector('#tiempo-total').innerText = resultado;


return false;
}