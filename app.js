numeroSecreto = generarNumeroSecreto();
let numeroIntentos = 1;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log("Numero secreto: " + numeroSecreto);
    console.log("valor Usuario: " + numeroDeUsuario);

    console.log("Validacion: " + (numeroDeUsuario === numeroSecreto));
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${numeroIntentos} ${numeroIntentos == 1 ? "intento":"intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El ususario no acerto
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('p', 'El número es mayor');
        } else {
            asignarTextoElemento('p', 'El número es menor');
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valoCaja = document.querySelector('#valorUsuario');
    valoCaja.value = '';
}

function generarNumeroSecreto() {
    return numeroSecreto = Math.floor(Math.random()*10)+1;
}

function mensajesIniciales() {
    asignarTextoElemento('h1', "Número secreto");
    asignarTextoElemento('p', "Indica el número del 1 al 10");
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Mensaje de inicio
    mensajesIniciales();
    //numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Reiniciar numero de intentos
    numeroIntentos = 1;
    //desabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

mensajesIniciales();
