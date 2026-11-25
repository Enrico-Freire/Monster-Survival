let vidaMonsters = vidaMaxima * 0.5
let danoMonster = 20
let monstroAtual = "";
let atacado = 0
let defesa = 0
let temporizadorAtaque = null;

let x = document.getElementById("canvas").getContext("2d")

SortearMonstro()

function SortearMonstro() {
    let sorteio = Math.floor(Math.random() * 3) + 1;

    vidaMonsters = vidaMaxima / 2;

    if (sorteio == 1) {
        Zombie();
        SortearAtaque()
    } else if (sorteio == 2) {
        Esqueleto();
        SortearAtaque()
    } else {
        Vampiro();
        SortearAtaque()
    }
}

function SortearAtaque() {
    alert("VOCÊ VAI SER ATACADO!!!");
    atacado = 1;
    temporizadorAtaque = setTimeout(() => {
        if (atacado == 1) {
            atacado = 2;
            AtaqueMonstro();
            alert("VOCÊ FOI ATACADO!!!");
        }
        setTimeout(SortearAtaque, 30000);
    }, 30000);

}

function Zombie() {
    monstroAtual = "ZOMBIE";
    AtualizarMonstro();

    setTimeout(SortearAtaque, 30000);

    x.beginPath();
    x.fillStyle = "#009440";
    x.fillRect(90, 60, 50, 20);
    x.closePath();

    x.beginPath()
    x.fillStyle = "red"
    x.fillRect(90, 80, 50, 40)
    x.closePath()

    x.beginPath()
    x.fillStyle = "blue"
    x.fillRect(90, 120, 50, 20)
    x.closePath()

    x.beginPath()
    x.fillStyle = "black"
    x.fillRect(95, 65, 10, 5)
    x.closePath()

    x.beginPath()
    x.fillStyle = "black"
    x.fillRect(123, 65, 10, 5)
    x.closePath()

    x.beginPath()
    x.fillStyle = "#009440"
    x.fillRect(70, 80, 20, 40)
    x.closePath()

    x.beginPath()
    x.fillStyle = "#009440"
    x.fillRect(140, 80, 20, 40)
    x.closePath()
}

function Esqueleto() {
    monstroAtual = "ESQUELETO";
    AtualizarMonstro();

    setTimeout(SortearAtaque, 30000);

    x.beginPath();
    x.fillStyle = "white";
    x.fillRect(90, 60, 50, 20);
    x.closePath();

    x.beginPath()
    x.fillStyle = "gray"
    x.fillRect(90, 80, 50, 40)
    x.closePath()

    x.beginPath()
    x.fillStyle = "#929292"
    x.fillRect(90, 120, 50, 20)
    x.closePath()

    x.beginPath()
    x.fillStyle = "black"
    x.fillRect(95, 65, 10, 5)
    x.closePath()

    x.beginPath()
    x.fillStyle = "black"
    x.fillRect(123, 65, 10, 5)
    x.closePath()

    x.beginPath()
    x.fillStyle = "white"
    x.fillRect(70, 80, 20, 40)
    x.closePath()

    x.beginPath()
    x.fillStyle = "white"
    x.fillRect(140, 80, 20, 40)
    x.closePath()
}

function Vampiro() {
    monstroAtual = "VAMPIRO";
    AtualizarMonstro();

    setTimeout(SortearAtaque, 30000);

    x.beginPath();
    x.fillStyle = "black";
    x.fillRect(90, 60, 50, 20);
    x.closePath();

    x.beginPath()
    x.fillStyle = "black"
    x.fillRect(90, 80, 50, 40)
    x.closePath()

    x.beginPath()
    x.fillStyle = "#929292"
    x.fillRect(90, 120, 50, 20)
    x.closePath()

    x.beginPath()
    x.fillStyle = "red"
    x.fillRect(95, 65, 10, 5)
    x.closePath()

    x.beginPath()
    x.fillStyle = "red"
    x.fillRect(123, 65, 10, 5)
    x.closePath()

    x.beginPath()
    x.fillStyle = "#929292"
    x.fillRect(70, 80, 20, 40)
    x.closePath()

    x.beginPath()
    x.fillStyle = "#929292"
    x.fillRect(140, 80, 20, 40)
    x.closePath()
}

function AtualizarMonstro() {
    document.getElementById("nomeMonsters").textContent = monstroAtual;
    document.getElementById("vidaMonsters").textContent = "VIDA = " + vidaMonsters;
}

function MatarMonstroEspada() {
    if (vidaMonsters <= 0) {
        SortearMonstro();
    }

    else {
        vidaMonsters -= danoEspada
        document.getElementById("vidaMonsters").textContent = "VIDA = " + vidaMonsters
        if (vidaMonsters <= 0) {
            SortearMonstro();
        }
    }
}

function MatarMonstroArco() {
    if (vidaMonsters <= 0) {
        SortearMonstro();
    }

    else {
        vidaMonsters -= danoArco
        document.getElementById("vidaMonsters").textContent = "VIDA = " + vidaMonsters
        if (vidaMonsters <= 0) {
            SortearMonstro();
        }
    }
}


function AtaqueMonstro() {
    if (vidaMonsters <= 0) {
        SortearMonstro();
    }

    else {
        vida -= danoMonster
        if (vida < 0) {
            vida = 0
        }
        document.getElementById("vida").textContent = vida
        atacado = 2
    }
}