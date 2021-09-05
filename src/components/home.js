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
  /* divElement.setAttribute('id', 'homeContainer');

  const pCuestion = document.createElement('p');
  pCuestion.innerHTML = '¿Sin palabras?';

  const appName = document.createElement('h1');
  appName.textContent = 'Échale la culpa';

  const slogan = document.createElement('p');
  slogan.textContent = 'se lo dice por ti';

  const options = document.createElement('div');

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Regístrate';

  const buttonLogin = document.createElement('button');
  buttonLogin.textContent = 'Inicia Sesión';

  divElement.appendChild(pCuestion);
  divElement.appendChild(appName);
  divElement.appendChild(slogan);
  options.appendChild(buttonLogin);
  options.appendChild(buttonRegister);

  divElement.appendChild(options); */

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
