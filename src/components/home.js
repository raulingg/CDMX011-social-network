/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../router/routes.js';

export const Home = (root) => {
  const html = `
  <div id="homeContainer">
  <p>¿Sin palabras?</p>
  <h1>Échale la culpa</h1>
  <p>se lo dice por ti</p>
  <div class="options">
      <button>Inicia sesión</button>
      <button id="toLogin">Regístrate</button>
  </div>
  </div>
    `;
  /* const divElement = document.createElement('div');
  divElement.setAttribute('id', 'homeContainer');
  divElement.innerHTML = html; */
  root.innerHTML = html;

  /* const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Regístrate'; */

  const buttonLogin = document.getElementById('toLogin');

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  // divElement.appendChild(buttonLogin);
};
