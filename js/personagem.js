let nomeJogador1 = sessionStorage.getItem("nomeJogador1");
let tipoJogador = sessionStorage.getItem("tipoJogador");
let nvl = 1;
let ataques = 0,
    distancia = 0,
    defesas = 0;

let nvlEspada = 1;
let nvlArco = 1;
let nvlEscudo = 1;

let vida = 0;
let vidaMaxima = 0;
let danoEspada = 0;
let danoArco = 0;
let defesaEscudo = 0;

document.getElementById("nvlJogador").textContent = nvl

if(vida <= 0){
    alert("VOCÊ MORREU!!!")
}

if (tipoJogador == "soldado") {
    document.getElementById("nomeJogador").textContent = nomeJogador1 + "🗡️";
    document.getElementById("nvlJogador").textContent = nvl;

    vida += 120
    vidaMaxima += 120
    danoEspada += 10
    danoArco += 2
    defesaEscudo += 8

    document.getElementById("vida").textContent = vida;
    document.getElementById("vidaMaxima").textContent = vidaMaxima;
    document.getElementById("danoEspada").textContent = danoEspada;
    document.getElementById("nvlEspada").textContent = nvlEspada;
    document.getElementById("danoArco").textContent = danoArco;
    document.getElementById("nvlArco").textContent = nvlArco;
    document.getElementById("defesaEscudo").textContent = defesaEscudo;
    document.getElementById("nvlEscudo").textContent = nvlEscudo;

} else if (tipoJogador == "tanque") {
    document.getElementById("nomeJogador").textContent = nomeJogador1 + "🛡️";
    document.getElementById("nvlJogador").textContent = nvl;

    vida += 200;
    vidaMaxima += 200;
    danoEspada += 8;
    danoArco += 2;
    defesaEscudo += 10;

    document.getElementById("vida").textContent = vida;
    document.getElementById("vidaMaxima").textContent = vidaMaxima;
    document.getElementById("danoEspada").textContent = danoEspada;
    document.getElementById("nvlEspada").textContent = nvlEspada;
    document.getElementById("danoArco").textContent = danoArco;
    document.getElementById("nvlArco").textContent = nvlArco;
    document.getElementById("defesaEscudo").textContent = defesaEscudo;
    document.getElementById("nvlEscudo").textContent = nvlEscudo;

} else {
    document.getElementById("nomeJogador").textContent = nomeJogador1 + "🏹";
    document.getElementById("nvlJogador").textContent = nvl;

    vida += 100;
    vidaMaxima += 100;
    danoEspada += 5;
    danoArco += 10;
    defesaEscudo += 2;

    document.getElementById("vida").textContent = vida;
    document.getElementById("vidaMaxima").textContent = vidaMaxima;
    document.getElementById("danoEspada").textContent = danoEspada;
    document.getElementById("nvlEspada").textContent = nvlEspada;
    document.getElementById("danoArco").textContent = danoArco;
    document.getElementById("nvlArco").textContent = nvlArco;
    document.getElementById("defesaEscudo").textContent = defesaEscudo;
    document.getElementById("nvlEscudo").textContent = nvlEscudo;
}