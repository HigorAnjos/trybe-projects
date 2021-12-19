function criarQuadroPixel (pixel = 5)
{
    let pixelBoard = document.getElementById ("pixel-board");
    for (let linha = 1; linha<=pixel; linha++)
    {
        let row = document.createElement ('div');
        row.classList.add ('row');
        //row
        for (let coluna = 1; coluna<=pixel; coluna++)
        {
            let linhaPixel = document.createElement ('div');
            linhaPixel.classList.value = `pixel row-${linha} colum-${coluna}`;
            row.appendChild (linhaPixel);
        }
        pixelBoard.appendChild (row)
    }
}
criarQuadroPixel ();
// color-palette: Classe select apenas em um color-palette
function eventoSelectColorPalette ()
{
    let palette = document.querySelectorAll ('.color');
    for (let color of palette)
    {
       color.addEventListener ('click', select)
    }
}
function select (e) {
    let palette = document.getElementsByClassName ('color');
    for (let i=0; i< palette.length; i++)
    {
        if (palette[i].classList[2] === 'selected')
        {
            palette[i].classList.toggle('selected');
        }
    }
    e.target.classList.toggle ('selected');
   
    
}
// pixel-board colorir
function eventoColorirBoard (pixel = 5)
{
    for (let i =1; i <= pixel; i++)
    {
        let row = document.getElementsByClassName (`row-${i}`);
        for (let rc of row)
        {
            rc.addEventListener ('click', colorir);
        }
    }

}

function colorir (e)
{   
    let value = e.target.classList[0]+' '+ e.target.classList[1]+' '+ e.target.classList[2]+' '+corSelectAtual();
    e.target.classList.value = value;
}
function corSelectAtual ()
{
    let palette = document.getElementsByClassName ('color');
    for (let i=0; i< palette.length; i++)
    {
        if (palette[i].classList[2] === 'selected')
        {
            return palette[i].classList[1];
        }
    }

}

//Limpar dash bord
function eventoLimpar ()
{
    let btn = document.getElementById ("clear-board");
    btn.addEventListener ('click', limparPixel);
}

function limparPixel ()
{
    let row = document.getElementsByClassName ('row');
    let pxs = [...row].length;
    
    for (let i =1; i <= pxs; i++)
    {
        let row = document.getElementsByClassName (`row-${i}`);

        for (let rc of row)
        {
            rc.classList.value = rc.classList[0]+' '+ rc.classList[1]+' '+ rc.classList[2];
        }
    }
}
// Quantidade de pixel quadro
function eventoPixels ()
{
    let btnSize = document.getElementById ('generate-board');
    btnSize.addEventListener ('click', setSizePixel);
}
function setSizePixel ()
{
    let pixelBoard = document.getElementById ("pixel-board");
    pixelBoard.innerText = '';
    let bordSize = document.getElementById ('board-size');
    let pxs = bordSize.value;
    if (pxs > 50)
    {
        alert ('Board inválido!');
        criarQuadroPixel (50);
        eventoColorirBoard(50);
        limparPixel();
    }else if (pxs < 5 )
    {
        alert ('Board inválido!');
        criarQuadroPixel ();
        eventoColorirBoard();
        limparPixel();
    }
    else
    {
        criarQuadroPixel (pxs);
        eventoColorirBoard (pxs);
        limparPixel();
    }
    
}
eventoSelectColorPalette();
eventoColorirBoard ();
eventoLimpar ();
eventoPixels ();


