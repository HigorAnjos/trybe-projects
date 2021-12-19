var corPrincipal;
let qtdCirculos = 6;

let resetGame = document.getElementById('reset-game');
resetGame.addEventListener('click', iniciarGame);

function corAleatoria () {
    let R = Math.abs(Math.floor(Math.random() * 255));
    let G = Math.abs(Math.floor(Math.random() * 255));
    let B = Math.abs(Math.floor(Math.random() * 255));
    return `(${R}, ${G}, ${B})`;
}
function inserirTitulo ()
{
    let aCor =  document.getElementById ('rgb-color');
    aCor.innerHTML = corPrincipal;
}
function circulosDeCores ()
{
    let aPosicao = Math.floor(Math.random() * qtdCirculos);
    console.log (aPosicao);
    let balls = document.getElementById('balls');
    balls.innerText = '';
    for (let i = 0; i < qtdCirculos; i++)
    {
        let ball = document.createElement('div');
        ball.classList.add('ball');
        ball.addEventListener('click', seraQueAcertou);
        if (aPosicao === i)
        {
            ball.style.backgroundColor = 'rgb'+corPrincipal;
            balls.appendChild(ball);
        }else
        {
            ball.style.backgroundColor = 'rgb'+corAleatoria();
            balls.appendChild(ball);
        }
    }
}
function seraQueAcertou (e)
{
    let resp = `rgb${corPrincipal}`;
    let answer = document.getElementById('answer');
    if (e.target.style.backgroundColor === resp)
    {
        e.target.style.border = '#6EEB83 solid 3px';
        answer.innerHTML = "Acertou!";

    }
    else{
        e.target.style.border = 'red solid 3px';
        answer.innerHTML = "Errou! Tente novamente!";
    }
}
function iniciarGame ()
{
    inserirTitulo ();
    circulosDeCores ();
    let answer = document.getElementById('answer');
    answer.innerHTML = 'Escolha uma cor';
}
window.onload = () =>
{
    corPrincipal = corAleatoria();
    inserirTitulo();
    circulosDeCores ();
}