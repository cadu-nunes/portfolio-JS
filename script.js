//Exercício 1
function verificarPalpite() {
    var palpiteUsuario = parseInt(document.getElementById("palpite").value);
    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    if (palpiteUsuario === numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "Parabéns, você acertou!";
    } else {
        document.getElementById("resultado").innerHTML = "Tente novamente!";
    }
}

//Exercício 2
function verificarAnoBissexto() {
    var ano = parseInt(document.getElementById("ano").value);
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        document.getElementById("resultado").innerHTML = "O ano é Bissexto!";
    } else {
        document.getElementById("resultado").innerHTML = "O ano não é Bissexto.";
    }
}

//Exercício 3
function calcularMedia() {
    var notas = [
        parseFloat(document.getElementById("prova1").value),
        parseFloat(document.getElementById("prova2").value),
        parseFloat(document.getElementById("prova3").value),
        parseFloat(document.getElementById("prova4").value)
    ];
    var media = notas.reduce((a, b) => a + b, 0) / notas.length;

    if (media >= 7) {
        document.getElementById("resultado").innerHTML = "Aprovado!";
    } else if (media >= 5) {
        document.getElementById("resultado").innerHTML = "Recuperação";
    } else {
        document.getElementById("resultado").innerHTML = "Reprovado";
    }
}

//Exercício 4
function calcularGorjeta() {
    var valorConta = parseFloat(document.getElementById("valorConta").value);
    var satisfacao = document.getElementById("satisfacao").value;
    
    var porcentagem;
    
    switch (satisfacao) {
        case "excelente":
            porcentagem = 0.20;
            break;
        case "bom":
            porcentagem = 0.15;
            break;
        case "regular":
            porcentagem = 0.10;
            break;
        case "ruim":
            porcentagem = 0.05;
            break;
        default:
            porcentagem = 0;
            break;
    }

    var gorjeta = valorConta * porcentagem;
    var total = valorConta + gorjeta;

    document.getElementById("resultado").innerHTML = `Gorjeta: R$${gorjeta.toFixed(2)}, Total: R$${total.toFixed(2)}`;
}

//Exercício 5
function saudacao() {
    var horaAtual = new Date().getHours();
    
    var saudacao;
    
    if (horaAtual < 12) {
        saudacao = "Bom Dia!";
    } else if (horaAtual < 18) {
        saudacao = "Boa Tarde!";
    } else {
        saudacao = "Boa Noite!";
    }

    document.getElementById("resultado").innerHTML = saudacao;
}

