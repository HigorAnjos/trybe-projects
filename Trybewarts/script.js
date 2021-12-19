const form = document.querySelector('form');

function submitLogin(event) {
  event.preventDefault(); // Não atualiza a página e não perde os dados
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function checked() {
  let array = '';
  // Source: repository [Polyana Sousa e Lilian Azevedo] Projeto Polyana
  const subjects = document.querySelectorAll('input[class="subject"]:checked');
  let i = 0;
  for (i = 0; i < subjects.length - 1; i += 1) {
    array += `${subjects[i].value}, `;
  }
  array += `${subjects[i].value}`;

  return array;
}

function getForms() {
  const formOne = document.querySelectorAll('form')[1];
  const formData = new FormData(formOne);
  const objForm = {
    Nome: `Nome: ${formData.get('name')} ${formData.get('lastname')}`,
    // 'Nome: ' + formData.get('name') + ' ' + formData.get('lastname'),
    // Sobrenome: formData.get('lastname'),
    Email: `Email: ${formData.get('email')}`,
    Casa: `Casa: ${formData.get('house')}`,
    Familia: `Família: ${formData.get('family')}`,
    Materias: `Matérias: ${checked()}`,
    Avaliacao: `Avaliação: ${formData.get('rate')}`,
    Observacoes: `Observações: ${formData.get('textarea')}`,
  };

  return objForm;
}

function changeForm(event) {
  event.preventDefault();
  const forms = document.getElementById('evaluation-form');
  const objForms = getForms();
  forms.innerText = '';
  const ul = document.createElement('ul');
  const objArray = Object.values(objForms);
  for (let i = 0; i < objArray.length; i += 1) {
    const li = document.createElement('li');
    li.innerHTML = objArray[i];
    ul.appendChild(li);
  }
  forms.appendChild(ul);
}

// Source: https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
// https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
function permitSend() {
  const checkedBox = this.checked;
  document.getElementById('submit-btn').disabled = !checkedBox;
}
form.addEventListener('submit', submitLogin);

const checkBox = document.getElementById('agreement');

checkBox.addEventListener('change', permitSend);

const count = document.getElementById('counter');
const textArea = document.querySelector('textarea');

function counter() {
  count.innerHTML = 500 - textArea.value.length;
}

textArea.addEventListener('keyup', counter);

const submit = document.getElementById('submit-btn');

submit.addEventListener('click', changeForm);
