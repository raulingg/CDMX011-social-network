/* eslint-disable import/no-cycle */
import { onNavigate } from '../router/routes.js';

export const Home = () => {
  const html = `
  <p>¿Sin palabras?</p>
  <h1>Échale la culpa</h1>
  <p>se lo dice por ti</p>
  <div class="options">
      <button id ="login">Inicia sesión</button>
      <button id ="register">Regístrate</button>
  </div>`;
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'homeContainer');

  divElement.innerHTML = html;

  const buttonLogin = divElement.querySelector('#login');
  const buttonRegister = divElement.querySelector('#register');

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  return divElement;
};
