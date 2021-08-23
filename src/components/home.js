/* eslint-disable import/no-cycle */
import { onNavigate } from '../router/routes.js';

export const Home = () => {
  const divElement = document.createElement('div');
  divElement.setAttribute('id', 'homeContainer');

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

  divElement.appendChild(options);

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  return divElement;
};
