import { Home } from '../components/home.js';
import { Login } from '../components/login.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': Home,
  '/login': Login,
};

/* const component = routes[window.location.pathname];
rootDiv.appendChild(component()); */

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
  const viewFunction = routes[pathname];
  viewFunction(rootDiv);
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component());
};
