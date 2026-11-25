function Comecar() {
  let nome = document.getElementById("nome").value;
  let tipo = document.querySelector(
    'input[name="tipoPersonagem"]:checked',
  )?.value;

  if (nome == "" || tipo == undefined) {
    alert("Preencha todos os campos!!!");
  } else {
    sessionStorage.setItem("nomeJogador1", nome);
    sessionStorage.setItem("tipoJogador", tipo);
  }
}

function Voltar() {
  history.back()
}

function Espada() {
  if (vidaMonsters > 0) {
    MatarMonstroEspada()
  }
  else {
    AtualizarMonstro()
    ataques++;
    if (ataques >= nvl * 20) {
      nvlEspada++;
      document.getElementById("nvlEspada").textContent = nvlEspada;
      alert("SUA ESPADA SUBIU PARA O NÍVEL " + nvlEspada);
      SubirNvl()
    }
  }
}

function Arco() {
  if (vidaMonsters > 0) {
    MatarMonstroArco()
  }
  else {
    AtualizarMonstro()
    distancia++;
    if (distancia >= nvl * 20) {
      nvlArco++;
      document.getElementById("nvlArco").textContent = nvlArco;
      alert("SEU ARCO SUBIU PARA O NÍVEL " + nvlArco);
      SubirNvl()
    }
  }
}

function Escudo() {
    if (atacado == 1) {
        clearTimeout(temporizadorAtaque);
        temporizadorAtaque = null;
        atacado = 0;
        alert("VOCÊ SE DEFENDEU!!!");
        defesas++;
        if (defesas >= nvl * 20) {
            nvlEscudo++;
            document.getElementById("nvlEscudo").textContent = nvlEscudo;
            alert("SEU ESCUDO SUBIU PARA O NÍVEL " + nvlEscudo);
            SubirNvl();
        }
        setTimeout(SortearAtaque, 30000);
    }
    else {
        alert("NÃO EXISTE NENHUM ATAQUE PARA DEFENDER!");
    }
}


function SubirNvl() {

  if (nvlEspada > nvl && nvlArco > nvl && nvlEscudo > nvl) {

    nvl++;


    alert("VOCÊ SUBIU DE NÍVEL!!!");


    vidaMaxima += 40
    let calculoVida = vidaMaxima - vida
    vida += calculoVida
    danoEspada += 5
    danoArco += 5
    defesaEscudo += 5

    document.getElementById("nvlJogador").textContent = nvl;
    document.getElementById("vida").textContent = vida;
    document.getElementById("vidaMaxima").textContent = vidaMaxima;
    document.getElementById("danoEspada").textContent = danoEspada;
    document.getElementById("danoArco").textContent = danoArco;
    document.getElementById("defesaEscudo").textContent = defesaEscudo;
  }
}