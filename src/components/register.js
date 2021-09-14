/* eslint-disable import/no-cycle */
import { createUsser, continueWithGoogle } from '../lib/firebase.js';
import { onNavigate } from '../router/routes.js';

export const Register = () => {
  const divRegister = document.createElement('div');
  divRegister.setAttribute('id', 'divRegister');

  const form = document.createElement('form');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Ingresa tu Email');
  inputEmail.setAttribute('type', 'email');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Ingresa tu Contraseña');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('minlength', '5');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrarme';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Continuar con Google';

  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(buttonRegister);
  form.appendChild(buttonGoogle);

  divRegister.appendChild(form);

  buttonRegister.addEventListener('click', async (e) => {
    e.preventDefault();
    const usserEmail = inputEmail.value;
    const usserPassword = inputPassword.value;
    await createUsser(usserEmail, usserPassword);
  });

  buttonGoogle.addEventListener('click', async (e) => {
    e.preventDefault();
    await continueWithGoogle(onNavigate);
  });
  return divRegister;
};
