/* eslint-disable import/no-cycle */
import { login, continueWithGoogle } from '../lib/firebase.js';
import { onNavigate } from '../router/routes.js';

export const Login = () => {
  const divLogin = document.createElement('div');
  divLogin.setAttribute('id', 'divLogin');

  const form = document.createElement('form');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'Ingresa tu Email');
  inputEmail.setAttribute('type', 'email');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'Ingresa tu Contraseña');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('minlength', '5');

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Iniciar sesión';

  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Continuar con Google';

  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(buttonLogin);
  form.appendChild(buttonGoogle);

  divLogin.appendChild(form);

  buttonLogin.addEventListener('click', async (e) => {
    e.preventDefault();
    const usserEmail = inputEmail.value;
    const usserPassword = inputPassword.value;
    await login(usserEmail, usserPassword, onNavigate);
  });
  buttonGoogle.addEventListener('click', async (e) => {
    e.preventDefault();
    await continueWithGoogle(onNavigate);
  });
  return divLogin;
};
