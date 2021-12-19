function eventoCriarTarefa ()
{
    let eCriarTarefa = document.getElementById ('criar-tarefa'); 
    eCriarTarefa.addEventListener ('click', criarTarefa);

}
function criarTarefa ()
{
    let textoInput = document.getElementById ('texto-tarefa');
    addLista(textoInput.value);
}

////Funcoes da lista
function addLista (stringTarefa)
{

    let lista = document.getElementById ('lista-tarefas');
    let li = document.createElement ('li');
    li.innerHTML = stringTarefa;
    lista.appendChild (li);
    clearInput();
    eventoUmCLickNaLista(li);
    eventoDuploClickNaLista (li);
}
function clearInput ()
{
    let input = document.getElementById ('texto-tarefa');
    input.value = '';
}
function eventoUmCLickNaLista (li)
{
    li.addEventListener ('click', umCLickNaLista);
}
function umCLickNaLista (e)
{
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    umCLickApenasUmSelecionado (e);

}
function umCLickApenasUmSelecionado (e)
{
    let lista = document.getElementsByTagName ('li');
    for (let li of lista)
    {
        if (e.target !== li)
        {
            li.style.backgroundColor = '';
        }
    }
}

function eventoDuploClickNaLista (li)
{

    li.addEventListener ('dblclick',duploClickAddClassCompleted);
}
function duploClickAddClassCompleted (e)
{
    console.log (e.target.classList.toggle('completed'));
}
function eventoLimparLista ()
{
    let limpar = document.getElementById ('apaga-tudo');
    limpar.addEventListener ('click', limparLista);
}
function limparLista ()
{
    let lista = document.getElementById ('lista-tarefas');
    lista.innerText = '';
}
function eventoRemoverFinalizados ()
{
    let remover = document.getElementById ('remover-finalizados');
    remover.addEventListener ('click', removerFinalizados);
}
function removerFinalizados ()
{
    let lista = document.getElementById ('lista-tarefas');
    let li = document.getElementsByTagName ('li');
    
    for (let i=0; i<li.length; i++)
    {
        if(li[i].classList.contains('completed'))
        {
            lista.removeChild(li[i]);
            i = i - 1;
        }
    }
}
eventoCriarTarefa ();
eventoLimparLista ();
eventoRemoverFinalizados();


///BOnus
function eventoSalvarTarefas ()
{
    let salvar =  document.getElementById ('salvar-tarefas');
    salvar.addEventListener ('click', salvarTarefas);
}
function salvarTarefas()
{
    let lista = [];
    let ol = document.getElementById ("lista-tarefas");
    console.log(ol.innerText);
   
    // localStorage.setItem('lista',JSON.stringify(lista))
    
}
// function iniciarListaStorage ()
// {
//     let obj = JSON.parse(localStorage.getItem('lista'));
//     let lista = document.getElementById ("lista-tarefas");
//     lista.appendChild (obj);

// }
// window.onload = function() {
//     iniciarListaStorage ();
//   };
// eventoSalvarTarefas ();
