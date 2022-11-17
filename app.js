function moverPosicionRandom(elm){
    elm.style.position = 'absolute'; 
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px'; //Medida de la pantalla window.innerHeight
    elm.style.left = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
}

let btnSi = document.getElementById("btn_si"); 
let btnNo = document.getElementById("btn_no"); 
let divModoSexo = document.getElementsByClassName("modo_sexo")[0]; //Solo tenemos uno por eso tomamos el valor de 0

btnNo.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target)}); 

btnSi.addEventListener('click', function(e){
    alert('Sabia que dirias que SI. Casemonos y vivamos con borgui. TE AMOO!!! ❤')
    divModoSexo.style.display = 'block'; 
    const cancion = new Audio('img\\modo_hot.mp3'); 
    cancion.play();
}); 

//Minuto 1:48:00
