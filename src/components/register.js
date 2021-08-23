import { createUsser } from "../lib/firebase.js";
export const Register = () => {
  const divRegister = document.createElement('div');
  divRegister.setAttribute('id', 'register');

  const form = document.createElement('form');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Ingresa tu Email');
  inputEmail.setAttribute('type', 'email');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Ingresa tu Contraseña');
  inputPassword.setAttribute('type', 'password');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrarme';

  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(buttonRegister);

  divRegister.appendChild(form);

  buttonRegister.addEventListener('click', async (e) => {
    e.preventDefault();
    const usserEmail = inputEmail.value;
    const usserPassword = inputPassword.value;
    await createUsser(usserEmail, usserPassword);
  });

  return divRegister;
};
