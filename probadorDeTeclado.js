document.onkeydown = teclado;

const esc = document.getElementById('esc');
const funcion1 = document.getElementById('funcion1');
const funcion2 = document.getElementById('funcion2');
const funcion3 = document.getElementById('funcion3');
const funcion4 = document.getElementById('funcion4');
const funcion5 = document.getElementById('funcion5');
const funcion6 = document.getElementById('funcion6');
const funcion7 = document.getElementById('funcion7');
const funcion8 = document.getElementById('funcion8');
const funcion9 = document.getElementById('funcion9');
const funcion10 = document.getElementById('funcion10');
const funcion11 = document.getElementById('funcion11');
const funcion12 = document.getElementById('funcion12');

const simbGuionVertical = document.getElementById('simb-guion-vertical');
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const numero3 = document.getElementById('numero3');
const numero4 = document.getElementById('numero4');
const numero5 = document.getElementById('numero5');
const numero6 = document.getElementById('numero6');
const numero7 = document.getElementById('numero7');
const numero8 = document.getElementById('numero8');
const numero9 = document.getElementById('numero9');
const numero0 = document.getElementById('numero0');
const simbGuion = document.getElementById('simb-guion');
const simbIgual = document.getElementById('simb-igual');
const backspace = document.getElementById('backspace');

const tab = document.getElementById('tab');
const letraQ = document.getElementById('letraQ');
const letraW = document.getElementById('letraW');
const letraE = document.getElementById('letraE');
const letraR = document.getElementById('letraR');
const letraT = document.getElementById('letraT');
const letraY = document.getElementById('letraY');
const letraU = document.getElementById('letraU');
const letraI = document.getElementById('letraI');
const letraO = document.getElementById('letraO');
const letraP = document.getElementById('letraP');
const simbLlaveApertura = document.getElementById('simb-llave-apertura');
const simbLlaveCierre = document.getElementById('simb-llave-cierre');
const simbCorcheteCierre = document.getElementById('simb-corchete-cierre');

const capsLock = document.getElementById('caps-lock');
const letraA = document.getElementById('letraA');
const letraS = document.getElementById('letraS');
const letraD = document.getElementById('letraD');
const letraF = document.getElementById('letraF');
const letraG = document.getElementById('letraG');
const letraH = document.getElementById('letraH');
const letraJ = document.getElementById('letraJ');
const letraK = document.getElementById('letraK');
const letraL = document.getElementById('letraL');
const letraÑ = document.getElementById('letraÑ');
const simbCorcheteApertura = document.getElementById('simb-corchete-apertura');
const enter = document.getElementById('enter');

const shiftIzquierdo = document.getElementById('shift-izquierdo');
const simboloMayor = document.getElementById('simbolo-mayor');
const letraZ = document.getElementById('letraZ');
const letraX = document.getElementById('letraX');
const letraC = document.getElementById('letraC');
const letraV = document.getElementById('letraV');
const letraB = document.getElementById('letraB');
const letraN = document.getElementById('letraN');
const letraM = document.getElementById('letraM');
const simboloComa = document.getElementById('simbolo-coma');
const simboloPunto = document.getElementById('simbolo-punto');
const simboloPisoBajo = document.getElementById('simbolo-piso-bajo');
const shiftDerecho = document.getElementById('shift-derecho');

const ctrlIzquierdo = document.getElementById('ctrl-izquierdo');
const win = document.getElementById('win');
const altIzquierdo = document.getElementById('alt-izquierdo');
const barraEspaciadora = document.getElementById('barra-espaciadora');
const altDerecho = document.getElementById('alt-derecho');
const fn = document.getElementById('fn');
const ctrlDerecho = document.getElementById('ctrl-derecho');

const imprimir = document.getElementById('print');
const scrollbloq = document.getElementById('scroll');
const pause = document.getElementById('pause');
const insert = document.getElementById('insert');
const home = document.getElementById('home');
const up = document.getElementById('up');
const del = document.getElementById('del');
const end = document.getElementById('end');
const down = document.getElementById('down');
const direccionalArriba = document.getElementById('direccional-arriba');
const direccionalIzquierda = document.getElementById('direccional-izquierda');
const direccionalAbajo = document.getElementById('direccional-abajo');
const direccionalDerecha = document.getElementById('direccional-derecha');

const lock = document.getElementById('lock');
const simbSlash = document.getElementById('simb-slash');
const simbAsterisco = document.getElementById('simb-asterisco');
const numpad7 = document.getElementById('numpad7');
const numpad8 = document.getElementById('numpad8');
const numpad9 = document.getElementById('numpad9');
const numpad4 = document.getElementById('numpad4');
const numpad5 = document.getElementById('numpad5');
const numpad6 = document.getElementById('numpad6');
const numpad1 = document.getElementById('numpad1');
const numpad2 = document.getElementById('numpad2');
const numpad3 = document.getElementById('numpad3');
const numpad0 = document.getElementById('numpad0');
const padPunto = document.getElementById('pad-punto');

const padMenos = document.getElementById('pad-menos');
const padMas = document.getElementById('pad-mas');
const padEnter = document.getElementById('pad-enter');

let tecla;
const colorNuevo = '#FFA07A';
const colorPulsar = 'red';

function teclado (teclaPulsada) { 
    evento = teclaPulsada || window.event;
    k=evento.keyCode;

    if (k==27){tecla = esc;}
    if (k==112){tecla = funcion1;}
    if (k==113){tecla = funcion2;}
    if (k==114){tecla = funcion3;}
    if (k==115){tecla = funcion4;}
    if (k==116){tecla = funcion5;}
    if (k==117){tecla = funcion6;}
    if (k==118){tecla = funcion7;}
    if (k==119){tecla = funcion8;}
    if (k==120){tecla = funcion9;}
    if (k==121){tecla = funcion10;}
    if (k==122){tecla = funcion11;}
    if (k==123){tecla = funcion12;}

    if (k==220){tecla = simbGuionVertical;}
    if (k==49){tecla = numero1;}
    if (k==50){tecla = numero2;}
    if (k==51){tecla = numero3;}
    if (k==52){tecla = numero4;}
    if (k==53){tecla = numero5;}
    if (k==54){tecla = numero6;}
    if (k==55){tecla = numero7;}
    if (k==56){tecla = numero8;}
    if (k==57){tecla = numero9;}
    if (k==48){tecla = numero0;}
    if (k==219){tecla = simbGuion;}
    if (k==221){tecla = simbIgual;}
    if (k==8){tecla = backspace;}

    if (k==9){tecla = tab;}
    if (k==81){tecla = letraQ;}
    if (k==87){tecla = letraW;}
    if (k==69){tecla = letraE;}
    if (k==82){tecla = letraR;}
    if (k==84){tecla = letraT;}
    if (k==89){tecla = letraY;}
    if (k==85){tecla = letraU;}
    if (k==73){tecla = letraI;}
    if (k==79){tecla = letraO;}
    if (k==80){tecla = letraP;}
    if (k==186){tecla = simbLlaveApertura;}
    if (k==187){tecla = simbLlaveCierre;}
    if (k==191){tecla = simbCorcheteCierre;}

    if (k==20){tecla = capsLock;}
    if (k==65){tecla = letraA;}
    if (k==83){tecla = letraS;}
    if (k==68){tecla = letraD;}
    if (k==70){tecla = letraF;}
    if (k==71){tecla = letraG;}
    if (k==72){tecla = letraH;}
    if (k==74){tecla = letraJ;}
    if (k==75){tecla = letraK;}
    if (k==76){tecla = letraL;}
    if (k==192){tecla = letraÑ;}
    if (k==222){tecla = simbCorcheteApertura;}
    if (k==13){tecla = enter;}

    if (k==16){tecla = shiftIzquierdo;}
    if (k==226){tecla = simboloMayor;}
    if (k==90){tecla = letraZ;}
    if (k==88){tecla = letraX;}
    if (k==67){tecla = letraC;}
    if (k==86){tecla = letraV;}
    if (k==66){tecla = letraB;}
    if (k==78){tecla = letraN;}
    if (k==77){tecla = letraM;}
    if (k==188){tecla = simboloComa;}
    if (k==190){tecla = simboloPunto;}
    if (k==189){tecla = simboloPisoBajo;}
    if (k==16){tecla = shiftDerecho;}

    if (k==17){tecla = ctrlIzquierdo;}
    if (k==91){tecla = win;} 
    if (k==18){tecla = altIzquierdo;} 
    if (k==32){tecla = barraEspaciadora;}
    if (k==18){tecla = altDerecho;}
    if (k==17){tecla = ctrlDerecho;}

    if (k==44){tecla = imprimir;}
    if (k==145){tecla = scrollbloq;}
    if (k==19){tecla = pause;}
    if (k==45){tecla = insert;}
    if (k==36){tecla = home;}
    if (k==33){tecla = up;}
    if (k==46){tecla = del;} 
    if (k==35){tecla = end;}  
    if (k==34){tecla = down;}
    if (k==38){tecla = direccionalArriba;}
    if (k==37){tecla = direccionalIzquierda;}
    if (k==40){tecla = direccionalAbajo;}
    if (k==39){tecla = direccionalDerecha;}

    if (k==144){tecla = lock;}
    if (k==111){tecla = simbSlash;}
    if (k==106){tecla = simbAsterisco;}
    if (k==103){tecla = numpad7;} 
    if (k==104){tecla = numpad8;} 
    if (k==105){tecla = numpad9;} 
    if (k==100){tecla = numpad4;} 
    if (k==101){tecla = numpad5;} 
    if (k==102){tecla = numpad6;} 
    if (k==97){tecla = numpad1;} 
    if (k==98){tecla = numpad2;} 
    if (k==99){tecla = numpad3;} 
    if (k==96){tecla = numpad0;} 
    if (k==110){tecla = padPunto;} 

    if (k==109){tecla = padMenos;}
    if (k==107){tecla = padMas;}
    if (k==13){tecla = padEnter;}
    
    tecla.style.backgroundColor = colorNuevo;

}