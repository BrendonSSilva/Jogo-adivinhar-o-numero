var d = (e) => document.querySelector(e);


var enviarPalpite = d('.enviar')
var palpite = d('input')
var palpiteAnt = d('.ant')
var palpites = palpiteAnt.innerHTML = 'Palpites:'
var resp = d('.resposta')
var dica = d('.dica')
var numero = Math.floor(Math.random() * 100) + 1;
//tentativas
var total = 0
//verificar palpite certo ou errado
function verificarPalpite() {
    var palpiteUser = Number(palpite.value)
    palpiteAnt.innerHTML += ` ${palpiteUser}`;
    if (palpiteUser === numero) {
        correta()
    } else {
        errada()
        if (palpiteUser > numero) {
            dica.innerHTML = 'Seu palpite está alto!'
        } else {
            dica.innerHTML = 'Seu palpite está baixo!'
        }
        d('.ant').style.display = 'flex'
    }

    palpite.value = ''
    total++
    //finalizar após 10 tentativas
    if (total === 10 && palpiteUser !== numero) {
        total = 0
        d('.ant').style.display = 'none'
        palpite.type = 'hidden'
        d('.enviar').style.display = 'none'
        d('.reiniciar').style.display = 'flex'
        resp.style.backgroundColor = 'orange'
        resp.innerHTML = 'Tentativas esgotadas. Reinicie o jogo para a próxima rodada.'
        dica.innerHTML = `A resposta era <b>${numero}</b>`
    }
}
//palpite certo
function correta() {
    resp.style.backgroundColor = '#00ff00'
    resp.innerHTML = 'Resposta correta!'
    palpite.type = 'hidden'
    d('.enviar').style.display = 'none'
    d('.reiniciar').style.display = 'flex'
    dica.innerHTML = ''
}
//palpite errado
function errada() {
    resp.style.backgroundColor = '#ff0000'
    resp.innerHTML = 'Resposta errada!'
}
//reiniciar jogo 
function reiniciar() {
    total = 0
    palpiteAnt.innerHTML = 'Palpites: '
    d('.ant').style.display = 'none'
    d('.reiniciar').style.display = 'none'
    palpite.type = 'number'
    d('.enviar').style.display = 'flex'
    resp.innerHTML = ''
    dica.innerHTML = ''
    numero = Math.floor(Math.random() * 100) + 1;
    //resposta
    console.log(numero)
}
d('.ant').style.display = 'none'
d('.reiniciar').style.display = 'none'
d('.reiniciar').addEventListener('click', reiniciar)
d('.enviar').addEventListener('click', verificarPalpite);
//resposta
console.log(numero)
