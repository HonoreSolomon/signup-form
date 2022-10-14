const inputs = document.querySelectorAll('input');
const passGroup = document.querySelector('.password-group');
const passwords = passGroup.querySelectorAll('div> input');
const passwordOneContainer = document.querySelector(
  '.password-first'
);
const submit = document.querySelector('.account > button');
let error = null;

submit.addEventListener('click', checkError);

function checkError() {
  inputs.forEach((input) => {
    input.checkValidity()
      ? input.classList.remove('error')
      : input.classList.add('error');
  });

  const arrPasswords = [...passwords];
  for (const pass of arrPasswords) {
    pass.value;
  }
  console.table(arrPasswords);
  const match = arrPasswords.reduce(
    (previous, current) => previous.value === current.value
  );

  if (!match) {
    passwords.forEach((password) => {
      password.classList.add('error');
    });
    if (error === null) {
      error = document.createElement('p');
      error.style.color = 'red';
      error.textContent = '*Passwords do not match';
      passwordOneContainer.append(error);
    }
  }
}
