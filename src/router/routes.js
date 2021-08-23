/* eslint-disable import/no-cycle */
import { Home } from '../components/home.js';
import { Login } from '../components/login.js';
import { Register } from '../components/register.js';

const rootDiv = document.getElementById('root');

let firebase = null;

export const load = (firebaseFromMain) => {
  firebase = firebaseFromMain;
};

export const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register,
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};
